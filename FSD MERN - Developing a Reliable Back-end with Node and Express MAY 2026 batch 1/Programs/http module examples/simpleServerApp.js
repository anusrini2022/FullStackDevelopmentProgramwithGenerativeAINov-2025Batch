let http = require("http");
// http://localhost:3000    
// http://127.0.0.1:3000
// below code execute only if any client application send request through browser. 
let server = http.createServer((request,response)=> {


    response.end("Welcome to Http Node JS module");
    
});

// port number : range of port number 0 to 65535 
server.listen(3000,()=>console.log("Server is up on port number 3000"))