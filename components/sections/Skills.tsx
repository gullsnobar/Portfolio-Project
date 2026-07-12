'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'

/**
 * Uses jsdelivr CDN to serve real SVG brand icons from simple-icons.
 * CSS filter: invert(1) in dark mode flips black → white automatically.
 */

interface Skill {
  name: string
  slug: string  // simpleicons.org slug
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React',        slug: 'react' },
      { name: 'Next.js',      slug: 'nextdotjs' },
      { name: 'JavaScript',   slug: 'javascript' },
      { name: 'TypeScript',   slug: 'typescript' },
      { name: 'HTML5',        slug: 'html5' },
      { name: 'CSS3',         slug: 'css3' },
      { name: 'Tailwind',     slug: 'tailwindcss' },
      { name: 'Material UI',  slug: 'mui' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js',      slug: 'nodedotjs' },
      { name: 'Express',      slug: 'express' },
      { name: 'GraphQL',      slug: 'graphql' },
      { name: 'REST APIs',    slug: 'openapiinitiative' },
      { name: 'PostgreSQL',   slug: 'postgresql' },
      { name: 'MongoDB',      slug: 'mongodb' },
      { name: 'Supabase',     slug: 'supabase' },
      { name: 'Firebase',     slug: 'firebase' },
    ],
  },
  {
    category: 'Tools & Deployment',
    skills: [
      { name: 'Git',          slug: 'git' },
      { name: 'GitHub',       slug: 'github' },
      { name: 'Docker',       slug: 'docker' },
      { name: 'VS Code',      slug: 'visualstudiocode' },
      { name: 'Postman',      slug: 'postman' },
      { name: 'Vercel',       slug: 'vercel' },
      { name: 'Netlify',      slug: 'netlify' },
      { name: 'OpenAI',       slug: 'openai' },
    ],
  },
]

function TechIcon({ slug, name }: { slug: string; name: string }) {
  return (
    // Icon is always served black from CDN.
    // dark:invert        → white on dark bg (normal state)
    // group-hover:invert → white on black hover bg (light mode hover)
    // dark:group-hover:invert-0 → black on white hover bg (dark mode hover)
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`}
      alt={name}
      width={22}
      height={22}
      className="w-[22px] h-[22px] object-contain transition-all duration-200 dark:invert group-hover:invert dark:group-hover:invert-0"
    />
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Skills"
          title="Tools of the trade."
          subtitle="Technologies I work with daily to build scalable web applications."
        />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-text-primary" />
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, slug }) => (
                  <div key={name} className="skill-badge group">
                    {/* Icon container — bg inverts on hover */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-text-primary transition-all duration-200">
                      <TechIcon slug={slug} name={name} />
                    </div>
                    {/* Label */}
                    <span className="text-xs text-text-secondary group-hover:text-text-primary font-medium transition-colors text-center leading-tight max-w-[5rem]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
