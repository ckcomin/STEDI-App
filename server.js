const express = require("express");
const app = express();

app.get("/Caroline", (req, res)=>{

    res.send("Hello Caroline!");
})

app.get("/", (req, res)=>{

    res.send("Welcome to my backend API");
})

app.listen(3000, ()=> {

    console.log("Listening");
})