const express=require("express");
const app=express();

app.get("/",function(req,res){
  res.send("<h1><center>Welcome To Our Website<center/><h1/>");
});

app.get("/contact",function(req,res){
  res.send("<h1><center>For Contact Visit SeeYou@room.com<center/><h1/>");
});

app.get("/about",function(req,res){
  res.send("<h1><center>This website made by Mohamed Sayed<center/><h1/>");
});



app.listen(3000,function(){
  console.log("Server is running in port 3000");
});
