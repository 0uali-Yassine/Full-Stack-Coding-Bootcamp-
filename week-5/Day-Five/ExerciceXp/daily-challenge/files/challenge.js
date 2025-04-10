const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log("🔰 Starting Daily Challenge...\n");

console.log(greet("Alice"));

showColorfulMessage();

readFileContent();
