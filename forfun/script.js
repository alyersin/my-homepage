'use strict';

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const currScore = document.querySelector('.score');
const currHighScore = document.querySelector('.highScore');

let score = 20;
let highscore = 0;

const randNum = Math.floor(Math.random() * 20) + 1;

//GUESS NUMBER
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    message.textContent = 'Not a number';
  } else if (guess === randNum) {
    message.textContent = 'Correct Number !';
    number.textContent = guess;
    document.body.style.backgroundColor = '#436E54';

    //HIGHSCORE
    if (score > highscore) {
      highscore = score;
      currHighScore.textContent = highscore;
    }
    //GUESS TOO HIGH
  } else if (guess > randNum) {
    if (score > 0) {
      message.textContent = 'Too high';
      score--;
      currScore.textContent = score;
    } else {
      message.textContent = 'You lost the game';
      currScore.textContent = score;
      document.body.style.backgroundColor = '#8E3E3C';
    }
    //GUESS LOWER
  } else if (guess < randNum) {
    if (score > 0) {
      message.textContent = 'Too Low';
      score--;
      currScore.textContent = score;
    } else {
      message.textContent = 'You lost the game';
      currScore.textContent = score;
      document.body.style.backgroundColor = '#8E3E3C';
    }
  } else {
  }
});

//RESTART GAME
document.querySelector('.restart-game').addEventListener('click', () => {
  score = 20;
  document.querySelector('.guess').value = '';
  currScore.textContent = score;
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  document.body.style.backgroundColor = '#071A26';
});
