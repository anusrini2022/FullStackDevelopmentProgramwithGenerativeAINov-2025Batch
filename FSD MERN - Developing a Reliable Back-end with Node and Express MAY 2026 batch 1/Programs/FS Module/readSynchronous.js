let fs = require('fs');
let result = fs.readFileSync("test.txt");
console.log("file read successfully");
//console.log(result); // prints the buffer data
console.log(result.toString()); // converts the buffer data to string and prints it