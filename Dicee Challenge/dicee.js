
// players dice vlaues
var playerOneRandomDice=Math.floor(Math.random()*6)+1;
var playerTwoRandomDice=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+playerOneRandomDice+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+playerTwoRandomDice+".png");

if(playerOneRandomDice > playerTwoRandomDice){
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";

}
else if(playerOneRandomDice < playerTwoRandomDice){
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").textContent="Draw!";
}
