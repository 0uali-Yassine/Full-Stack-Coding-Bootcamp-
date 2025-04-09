const fs = require('fs');

const sourcePath = 'source.txt';
const destinationPath = 'destination.txt';

try {
  const data = fs.readFileSync(sourcePath, 'utf-8');
  fs.writeFileSync(destinationPath, data, 'utf-8');
  console.log('Done: File copied successfully!');
} catch (err) {
  console.error('Not: Error copying file:', err.message);
}
