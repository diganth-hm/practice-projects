const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/signup",(req,res)=>
{
    console.log("working");
 const {email,pass}=req.body;
 
 if (email=="" || pass == "")
 {
        console.log("bad request")

    return   res.status(400).send("Fields cannot be empty");

 }
 if(email != "" && pass !=""){
 
return res.status(201).send("Signup successful");
 }
});

console.log("not working");
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
    if(email !="diagnthhm714@gmail.com" || pass !="12345678")
    {
         console.log("bad reaquest");
        return res.status(401).send("invalid eamil or password");
       
    }
});

app.listen(5000,()=>
{
    console.log("server running on port 5000");
});