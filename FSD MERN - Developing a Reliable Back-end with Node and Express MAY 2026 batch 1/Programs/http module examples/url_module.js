let url = require("url");
let website_name="http://www.google.com:80/index.html?id=100&name=Raj";
console.log(website_name)
let urlRef = url.parse(website_name,true); // boolean value help to extract query property ie id and name
console.log(urlRef)
console.log(urlRef.hostname)
console.log(urlRef.port)
console.log(urlRef.pathname)
console.log(urlRef.query)
console.log(urlRef.query.id)
console.log(urlRef.query.name)
