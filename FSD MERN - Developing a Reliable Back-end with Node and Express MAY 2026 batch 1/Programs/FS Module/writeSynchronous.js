let fs = require('fs');
console.log("module loaded successfully");
let data = "Another line of text";
//fs.writeFileSync("test.txt", data); // overwrite the file with new data
fs.appendFileSync("test.txt", data); // append the new data to the existing file
console.log("data written successfully");