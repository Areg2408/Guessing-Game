'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// displayMessage('hello');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please input number');
  } else if (guess <= 0 || guess > 20) {
    displayMessage('Out of range');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage(guess - secretNumber < 5 ? 'High!' : 'Too high!');
    }
    if (guess < secretNumber) {
      displayMessage(secretNumber - guess < 5 ? 'Low!' : 'Too low!');
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'var(--primary-color)';
  document.querySelector('.number').style.width = '15rem';
});
