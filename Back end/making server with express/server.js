const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.send("Hello World")
})

app.listen('3030',()=>{
    console.log("Server is ruuning on http://localhost:3030 ");
    
})