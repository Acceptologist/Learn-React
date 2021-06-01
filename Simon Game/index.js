var isAGameRunning=false;
var buttonsSequence=[];
var level=1;
var index=0;
var idx=0;


$(document).keypress(function(event) {
  if (!isAGameRunning) {
    isAGameRunning=true;
    index=0;
    level=1;
    idx=0;
    buttonsSequence=[];
    $("h1").text("Level "+level);
    buttonsSequence.push(getRandomButton());
    playLevelSequence();
  }
});



$(".btn").click(function(){
  pressedButton(this);
  if(!isAGameRunning){
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    gameoverSound();
    setTimeout(function () {
    $("body").removeClass("game-over");
  }, 300);
  }else{
    if(this==buttonsSequence[index]){
      playSound(this);
      ++index;
      if(index==buttonsSequence.length){
        index=0;
        buttonsSequence.push(getRandomButton());
        ++level;
        setTimeout(function () {
          newLevel();
        }, 500);
      }
    }else{
      $("h1").text("Game Over, Press Any Key to Restart");
      isAGameRunning=false;
      $("body").addClass("game-over");
      gameoverSound();
      setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);
    }

  }

});


function pressedButton(button){
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
}, 300);
}


function playSound(button){
  if(button.classList.contains("blue")){
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
  }else if(button.classList.contains("green")){
    var audio = new Audio('sounds/green.mp3');
    audio.play();
  }else if(button.classList.contains("red")){
    var audio = new Audio('sounds/red.mp3');
    audio.play();
  }else if(button.classList.contains("yellow")){
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
  }else{
    console.log("There Something  Wrong with this Function and Input : "+button);
  }
}


function getRandomButton(){
  var randomNumber=Math.floor(Math.random()*4);
  return document.querySelectorAll(".btn")[randomNumber];
}

function newLevel(){
  $("h1").text("Level "+level);
  idx=0;
  playLevelSequence();
}

function playLevelSequence(){
  setTimeout(function() {
    pressedButton(buttonsSequence[idx]);
    playSound(buttonsSequence[idx]);
    idx++;
    if(idx<buttonsSequence.length){
      playLevelSequence()
    }

  },500);
}
function gameoverSound(){
  var audio = new Audio('sounds/wrong.mp3');
  audio.play();
}
function pressedImage(img){
  img.classList.add("img-pressed");
  setTimeout(function () {
    img.classList.remove("img-pressed");
}, 300);
}
$("img").click(function(){
  pressedImage(this);
  if (!isAGameRunning) {
    isAGameRunning=true;
    index=0;
    level=1;
    idx=0;
    buttonsSequence=[];
    $("h1").text("Level "+level);
    buttonsSequence.push(getRandomButton());
    playLevelSequence();
  }
});
