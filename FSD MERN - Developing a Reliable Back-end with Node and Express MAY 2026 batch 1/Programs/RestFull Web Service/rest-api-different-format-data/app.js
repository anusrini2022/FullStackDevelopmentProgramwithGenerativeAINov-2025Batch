let express = require('express');
let app = express();
// http://localhost:3000/
// produce data in plain text format. 
app.get("/",(request,response)=> {
    response.send("Welcome to Rest API with Express and Node.js");
})

// http://localhost:3000/plainText
app.get("/plainText",(request,response)=> {
    response.setHeader("Content-Type","text/plain");
    response.send("<h2>This is plain text data h2>");
})

// http://localhost:3000/html
app.get("/html",(request,response)=> {
    response.setHeader("Content-Type","text/html");
    response.send("<h2>This is HTML data</h2>");
})

// http://localhost:3000/xml
app.get("/xml",(request,response)=> {
    response.setHeader("Content-Type","text/xml");
    response.send("<abc>This is XML data</abc>");
})

// http://localhost:3000/json
app.get("/json",(request,response)=> {
    response.setHeader("Content-Type","application/json");
    response.send({"message": "This is JSON data"});
})

app.listen(3000,()=>console.log('Server is running on port 3000'));