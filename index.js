const express = require ("express");

const app = express()

app.get("/",(req,res)=> {
    res.send("<h1>WELCOME TO THE NODE jenkins automation project</h1>")
})

app.get("/about",(req,res)=> {
    res.send("<h1>ABOUT THE automation project</h1>")
})

app.listen(3000);