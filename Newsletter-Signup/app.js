const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const open=require("open");


const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  firstName=req.body.firstName;
  lastName=req.body.lastName;
  email=req.body.email;

  console.log(firstName,lastName,email);
});



app.listen(3000,function(){
  console.log("Server is running on port 3000 ...");
  open('http://localhost:3000/');
});
