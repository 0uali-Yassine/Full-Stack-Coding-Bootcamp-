const fs = require('fs');


// Read file function
function  readFile(filePath) {
    try {
        const data =  fs.readFileSync(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

// Write file function
function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`it wrote Success ${filePath}`);
    } catch (error) {
        console.error(`Error writing file: ${error.message}`);
    }
}

// Exporting the functions
module.exports = {
    readFile,
    writeFile
};
