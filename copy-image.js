const fs = require('fs');

const sourcePath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\3cfdd43e-287a-4aa5-a39d-99d699a70698\\multivendor_1784909423734.png';
const targetPath = 'C:\\Users\\HP\\portfolio\\public\\multivendor.png';

fs.copyFileSync(sourcePath, targetPath);
console.log('Image copied successfully!');
