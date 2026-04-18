// Step 3.1: Import fs module
const fs = require("fs");

// Step 3.2: Content to write
let message = "Hello, this file was created using Node.js!";

// Write file
fs.writeFile("message.txt", message, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("File created successfully!");
    }
});