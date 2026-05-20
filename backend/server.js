const express = require("express");
const app = express();
const http = require("http");
const [email,pass]=req.body;
app.post("/signup",(req,res)=>
{
 
 if (email=="" || pass == "")
 {
    res.status(400);
    console.log("bad request")

 }
 if(email)
console.log("server created");

});
server.listen(5000,()=>
{
    console.log("server running on port 5000");
});