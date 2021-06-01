
$("h1").css("color","red");
$("button").css("width","100px");
$("button").css("position","relative");
$("button").css("background-color","blue");
var flag=false;
$(document).keypress(function(event){
  console.log(event);
  if(!flag){
  $("h1").text("");
  flag=true;
}
  $("h1").text($("h1").text()+event.key);
});
