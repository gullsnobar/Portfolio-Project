import { writeFile } from 'node:fs/promises'

const [output, widthRaw, heightRaw, motionPreference = 'no-preference'] = process.argv.slice(2)
const width = Number(widthRaw)
const height = Number(heightRaw)
const target = await fetch(`http://localhost:9226/json/new?${encodeURIComponent('http://localhost:3002/')}`, { method: 'PUT' })
  .then((response) => response.json())
const socket = new WebSocket(target.webSocketDebuggerUrl)
const pending = new Map()
const runtimeErrors = []
let nextId = 0

await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.method === 'Runtime.exceptionThrown') runtimeErrors.push(message.params.exceptionDetails.text)
  if (!message.id || !pending.has(message.id)) return
  const { resolve, reject } = pending.get(message.id)
  pending.delete(message.id)
  if (message.error) reject(new Error(message.error.message))
  else resolve(message.result)
})

function send(method, params = {}) {
  const id = ++nextId
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
}

async function readHeroState() {
  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const title = document.querySelector('[data-gsap="hero-title"]');
      const actions = Array.from(document.querySelectorAll('[data-gsap="hero-action"]'));
      const style = title ? getComputedStyle(title) : null;
      return {
        titleFound: Boolean(title),
        titleOpacity: style?.opacity,
        titleTransform: style?.transform,
        titleClipPath: style?.clipPath,
        actionOpacities: actions.map((element) => getComputedStyle(element).opacity),
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      };
    })()`,
    returnByValue: true,
  })
  return result.result.value
}

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 700,
  screenWidth: width,
  screenHeight: height,
})
await send('Emulation.setEmulatedMedia', {
  features: [{ name: 'prefers-reduced-motion', value: motionPreference }],
})
await send('Page.navigate', { url: 'http://localhost:3002/' })

for (let attempt = 0; attempt < 40; attempt += 1) {
  const ready = await send('Runtime.evaluate', {
    expression: `document.readyState === 'complete' && Boolean(document.querySelector('[data-gsap="hero-title"]'))`,
    returnByValue: true,
  })
  if (ready.result.value) break
  await new Promise((resolve) => setTimeout(resolve, 100))
}

await new Promise((resolve) => setTimeout(resolve, 250))
const earlyState = await readHeroState()
await new Promise((resolve) => setTimeout(resolve, 1700))
const finalState = await readHeroState()
const { data } = await send('Page.captureScreenshot', { format: 'png', fromSurface: true })
await writeFile(output, Buffer.from(data, 'base64'))
console.log(JSON.stringify({ motionPreference, earlyState, finalState, runtimeErrors }))
socket.close()
