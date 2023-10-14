const express = require("express");

const port = 3000 ;

const app = express();

app.get("/",(req,res)=>{
    res.send("bienvenue sur mon site web")
})
app.listen(port,()=>{
    console.log("serveur is run ");
})