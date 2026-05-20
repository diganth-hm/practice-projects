const express = require("express");
const app = express();
const http = require("http");
app.use(express.json());

app.post("/signup",(req,res)=>
{
 const {email,pass}=req.body;
 if (email=="" || pass == "")
 {
        console.log("bad request")

    return   res.status(400).send("Fields cannot be empty");

 }
 
return res.status(201).send("Signup successful");

});


//Login page
app.post("/login",(req,res)=>
{
    const{email,pass}=req.body;
    if(email == "" || pass == "")
    {
       console.log("bad request");
        return res.status(400).send("Fields can not be empty");
        
    }
    if(email == "diagnthhm714@gmail.com" && pass == "12345678")
    {
    console.log("User  registered sucessfully")
    return res.status(201).send("Login sucessfull");
   
    }
    if(email !="diagnthhm714@gmail.com" && pass !="12345678")
    {
         console.log("bad reaquest");
        return res.status(401).send("invalid eamil or password");
       
    }
});

app.listen(5000,()=>
{
    console.log("server running on port 5000");
});