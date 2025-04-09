// read-directory.js
const fs = require('fs');

const dirPath = '.';

try {
  const files = fs.readdirSync(dirPath);
  console.log('folder:  Files in directory:');
  files.forEach(file => console.log('- ' + file));
} catch (err) {
  console.error('not: Error reading directory:', err.message);
}
