const { readFile, writeFile } = require('./fileManager');

const content = readFile('Hello World.txt');
console.log('Read from Hello World.txt:', content);

writeFile('Bye World.txt', 'Writing inside file');
