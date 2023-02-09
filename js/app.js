'use strict';
let totalScore = 0;
let userName = prompt('what is your name?');

function guessMyNum() {
  while (numOfGuesses) {
    const userGuess = prompt('Guess a number between 1 and 10');
    numOfGuesses--;
    if (parseInt(userGuess) === myNum) {
      totalScore++;
      alert('Congrats you picked the right number!');
      break;
    }
    else if (parseInt(userGuess) > myNum) {
      alert('Your guess was too high');
    }
    else if (alert('Your guess was too low.'));
    else {
      if (numOfGuesses === 0) {
        alert(`sorry, you are wrong. the correct answer is ${myNum}`);
      }
    }
  }
}
function metalBandGuess() {
  while (totalGuesses) {
    let userGuess = prompt('What are my favorite metal bands?').toLowerCase();
    let correct = false;
    for (let i = 0; i < favBands.length; i++) {
      let favBand = favBands[i];
      if (userGuess === favBand) {
        totalScore++;
        alert(`Congrats you guessed ${userGuess} correctly. Here are my top four favorite metal bands, ${favBands}`);
        correct = true;
        break;
      }
    }
    totalGuesses--;
    if (!correct) {
      alert(`You have ${totalGuesses} total guesses remaining`);
      alert(`your guess was ${userGuess} and was incorrect.`);
      if (totalGuesses === 0) {
        alert(`My favorite metal bands are ${favBands}`);
      }
    }
    else { break; }
  }
}
 // My code is so clean and neat
 
function questionOne() {
  while (qOne) {

    if (qOne === ('yes' || 'y')) {
      alert('alright here we go!');
      break;
    }
    else if (qOne === ('no' || 'n')) {
      alert('sorry you are playing anyways');
      break;
    }
    else {
      qOne = prompt('you need to write Yes or No');
    }
  }
}
function questionTwo() {

  if (qTwo === ('no' || 'n')) {
    totalScore++;
    alert(`Congrats ${userName}, green is my favorite color! `);
  }
  else alert('sorry, you got it wrong my favorite color is green');
}
function questionThree() {
  if (qThree === ('yes' || 'y')) {
    totalScore++;
    alert('congrats you\'re correct I do have three dogs!');
  }
  else alert('sorry you are wrong!');
}
function questionFour() {
  if (qFour === ('yes' || 'y')) {
    totalScore++;
    alert('you\'re right! I am excited for this course!');
  }
  else alert('sorry you are wrong');
}
function questionFive() {
  if (qFive === ('no' || 'n')) {
    totalScore++;
    alert('you\'re right, I do not live on the water. :(');
  }
  else alert('shoot I wish I lived on the water!');
}



let qOne = prompt(`Hello ${userName}, welcome to my humbe abode! Are you ready to play a game? please answer the following with 'yes' or 'no'.`).toLowerCase();
questionOne();

let qTwo = prompt('Is blue my favorite color?').toLowerCase();
questionTwo();

let qThree = prompt('Do I have 3 dogs?').toLowerCase();
questionThree();

let qFour = prompt('Am I excited for this course?').toLowerCase();
questionFour();

let qFive = prompt('Do I live on the water?');
questionFive();

let numOfGuesses = 4;
let myNum = 7;
guessMyNum();

const favBands = ['of mice and men', 'silverstein', 'alesana', 'dance gavin dance'];
let totalGuesses = 6;
metalBandGuess();

console.log(totalScore);

alert(`Hope you had fun playing the game ${userName}. Your total score is ${totalScore}`);






