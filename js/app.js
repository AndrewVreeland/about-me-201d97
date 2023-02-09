
'use strict';
let totalScore = 0;
let userName = prompt('what is your name?');

let qOne = prompt(`Hello ${userName}, welcome to my humbe abode! Are you ready to play a game? please answer the following with 'yes' or 'no'.`).toLowerCase();

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

let qTwo = prompt('Is blue my favorite color?').toLowerCase();

if (qTwo === ('no' || 'n')) {
  totalScore++;
  alert(`Congrats ${userName}, green is my favorite color! `);
}
else alert('sorry, you got it wrong my favorite color is green');

let qThree = prompt('Do I have 3 dogs?').toLowerCase();
if (qThree === ('yes' || 'y')) {
  totalScore++;
  alert('congrats you\'re correct I do have three dogs!');
}
else alert('sorry you are wrong!');
let qFour = prompt('Am I excited for this course?').toLowerCase();
if (qFour === ('yes' || 'y')) {
  totalScore++;
  alert('you\'re right! I am excited for this course!');
}
else alert('sorry you are wrong');

let qFive = prompt('Do I live on the water?');
if (qFive === ('no' || 'n')) {
  totalScore++;
  alert('you\'re right, I do not live on the water. :(');
}
else alert('shoot I wish I lived on the water!');
let numOfGuesses = 4;

while (numOfGuesses) {
  const userGuess = prompt('Guess a number between 1 and 10');
  numOfGuesses--;
  if (parseInt(userGuess) === 7) {
    totalScore++;
    alert('Congrats you picked the right number!');
    break;
  }
  else if (parseInt(userGuess) > 7) {
    alert('Your guess was too high');
  }
  else {
    alert('Your guess was too low.');
  }
}
const favBands = ['of mice and men', 'silverstein', 'alesana', 'dance gavin dance'];
let totalGuesses = 6;


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
  }
  else { break; }

}

console.log(totalScore);

alert(`Hope you had fun playing the game ${userName}. Your total score is ${totalScore}`);






