const express = require("express");
const app = express();
const http = require("http");
app.use(express.json());

app.post("/signup",(req,res)=>
{
 const [email,pass]=req.body;
 if (email=="" || pass == "")
 {
  return   res.status(400);
    console.log("bad request")

 }
 
console.log("server created");

});
server.listen(5000,()=>
{
    console.log("server running on port 5000");
});