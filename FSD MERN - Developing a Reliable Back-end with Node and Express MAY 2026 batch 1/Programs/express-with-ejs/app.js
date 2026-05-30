const express = require("express");
const fs = require("fs");
const app = express();

// set view engine
app.set("view engine", "ejs");

// set custom views directory
//app.set("views", "./my_views");

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {

    let message = "Welcome to Express with EJS View Engine"

    response.render("index", { message });
});


app.get("/login", (request, response) => {
    let msg="";
    response.render("login",{msg});
});

// in memory login data
let logins = [
    {email: "admin@gmail.com", password: "admin123", typeofUser: "admin"},
    { email: "raj@gmail.com", password: "raj123", typeofUser: "user" },
    { email: "ravi@gmail.com", password: "ravi123", typeofUser: "user" },
    { email: "john@gmail.com", password: "john123", typeofUser: "user" }
];

// check login credentials with hardcoded values
// app.post("/checkLogin", (request, response) => {
//     const login = request.body;

//     if(login.email === "user@example.com" && login.password === "password") {
//         response.send("Login successful!");
//     } else {
//         response.send("Invalid credentials");
//     }
// });

// check login credentials from in memory data ie logins array 
app.post("/checkLogin", (request, response) => {
    const login = request.body;
    let isValidUser = logins.some(user => user.email === login.email && user.password === login.password);
    if(isValidUser) {
        if(login.typeofUser === "admin") {
            response.render("adminDashboard", { msg: login.email });
        } else {    
       response.render("userDashboard", { msg: login.email });
        }
    } else {
        response.render("login", { msg: "Invalid credentials. Please try again." });
    }
});


// get method 
app.get("/addData", (request, response) => {
    let msg = "";
    response.render("addData",{msg});
})

// post method 
app.post("/addData", (request, response) => {
    const data = request.body;
    let dataFromFs = JSON.parse(fs.readFileSync("data.json").toString());
    dataFromFs.push(data);
    fs.writeFileSync("data.json", JSON.stringify(dataFromFs));
    response.render("addData", { msg: "Data added successfully!" });
});

app.get("/viewData", (request, response) => {
    let dataFromFs = JSON.parse(fs.readFileSync("data.json").toString());
    response.render("viewData",{data: dataFromFs});
}); 

app.listen(3000, () => {
    console.log("Server running on port 3000");
});