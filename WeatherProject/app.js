
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
  res.write("<p><img src="+imageURL+"></p>");
  res.write("<p>The Weather is Currently "+weatherDescription+".</p>");
  res.write("<div><h1>The Teampruture in "+cityName+" is "+weatherTemp+"<span>&#176;</span>.</h1></div>");
  res.send();
  });

});

});



app.listen(3000,function(){
  console.log("Server is running on Port : 3000 ...");
});
