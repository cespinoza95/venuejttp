'use strict';  //idk what this is doing

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;        //setting up the high score to 20
let highscore = 0;      // high score starts at 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;   // setting up the message popups
  };

  document.querySelector('.check').addEventListener('click', function () { //idk
    const guess = Number(document.querySelector('.guess').value);  //idk 
    console.log(guess, typeof guess);               // console to input the number

    // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');      // display message when you guess the correct number
    document.querySelector('.number').textContent = secretNumber;  

    document.querySelector('body').style.backgroundColor = '#60b347'; //gives the background color
    document.querySelector('.number').style.width = '30rem';   

    if (score > highscore) {
      highscore = score;                                               // keeps up with high score
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });