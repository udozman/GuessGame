'use strict';
let secretNumber = Math.floor((Math.random() * 20) + 1);
console.log(secretNumber);

let score = 20;
let highScore = 20;

document.querySelector(".check").addEventListener('click', function(){
  const guess = Number((document.querySelector('.guess').value));

  if(!guess){
    document.querySelector('.message').textContent = "Pick a Number!";
  }else if(guess === secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = "Correct Number😊";
        document.querySelector('body').style.backgroundColor = '#64eb34';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
        if(score > highScore){
          highScore = score;
          }

    }else{
      document.querySelector('.message').textContent = "Correct but you've run out of guesses😒";
      document.querySelector('body').style.backgroundColor = '#34b7eb';
      document.querySelector('.number').textContent = secretNumber;
      score = 20;
    }

  }else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = "Too High!";
      score--;
      highScore--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = "You Lose 😒!";
      document.querySelector('.score').textContent = 0;
    }

  }else if(guess< secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = "Too Low!";
      score--;
      highScore--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = "You Lose 😒!";
      document.querySelector('.score').textContent = 0;
    }

  }
})
//WHEN AGAIN! BUTTON IS PRESSED
document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.message').textContent = "Start guessing...";
  highScore = score;
  document.querySelector('.score').textContent = "20";
  score = 20;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.floor((Math.random() * 20) + 1);
  console.log(secretNumber);
})
