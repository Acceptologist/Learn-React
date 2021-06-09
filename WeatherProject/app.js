
const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
require('dotenv').config();


const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
const cityName=req.body.cityName;
const appid=process.env.appid;
const degreeUnits="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appid+"&units="+degreeUnits;

https.get(url,function(response){
  response.on("data",function(data){
  const weatherData=JSON.parse(data);
  const weatherDescription=weatherData.weather[0].description;
  const weatherTemp=weatherData.main.temp;
  const icon=weatherData.weather[0].icon;
  const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
  res.write("<body style='text-align: center;background-color: #1e3250;background:url(https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg);background-repeat: no-repeat;background-size:100%'>");
  res.write("<p><img src="+imageURL+"></p>");
  res.write("<p style='color:white;font-size:1.3rem;'>The Weather is Currently "+weatherDescription+".</p>");
  res.write("<div><h1 style='color:white;'>The Teampruture in "+cityName+" is "+weatherTemp+"<span>&#176;</span>.</h1></div>");
  res.send();
  });

});

});



app.listen(3000,function(){
  console.log("Server is running on Port : 3000 ...");
});
