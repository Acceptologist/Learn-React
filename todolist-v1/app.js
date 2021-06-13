
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")

var items=["Buy Food","Cook Food","Eat Food"];

const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

const day=date.getDate()
  res.render('list', {
    day:day,
    items:items
  });
});

app.post("/",function(req,res){
  var newItem=req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("Server is running on port 3000 ...");
});
