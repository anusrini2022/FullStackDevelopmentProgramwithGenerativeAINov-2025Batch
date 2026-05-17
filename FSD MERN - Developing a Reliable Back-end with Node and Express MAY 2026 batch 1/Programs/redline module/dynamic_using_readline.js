let obj = require("readline");
// we need to provide the input and output streams to create the interface
let rl = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Please enter your name:",(name)=> {
    console.log("Welcome to Node js ",name);
    rl.close();
})
