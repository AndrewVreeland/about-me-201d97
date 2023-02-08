
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
    qOne = prompt('you need to write yes or no');
  }
}

let qTwo = prompt('Is blue my favorite color?').toLowerCase();

if (qTwo === ('no' || 'n')) {
  alert(`Congrats ${userName}, green is my favorite color! `);
}
else alert('sorry, you got it wrong my favorite color is green');

let qThree = prompt('Do I have 3 dogs?').toLowerCase();
if (qThree === ('yes' || 'y')) {
  'congrats you\'re correct I do have three dogs!';
}
else alert('sorry you are wrong!');
let qFour = prompt('Am I excited for this course?').toLowerCase();
if (qFour === ('yes' || 'y')) {
  alert('you\'re right! I am excited for this course!');
}
else alert('sorry you are wrong');

let qFive = prompt('Do I live on the water?');
if (qFive === ('no' || 'n')) {
  alert('you\'re right, I unfortunately do not live on the water. :(');
}
else alert('shoot I wish I lived on the water!');
alert(`Hope you had fun playing the game ${userName}.`);






