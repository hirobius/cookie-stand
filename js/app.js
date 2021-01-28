'use strict';

var score = 0;

var username = prompt('Hello. What\'s your name?');
alert('Welcome, ' + username + ', to my life.');

function questionOne() {
  var quizOne = prompt('Do I like dogs?').toUpperCase();
  if (quizOne === 'YES' || quizOne === 'Y') {
    alert('Well done.');
    score++;
  } else if (quizOne === 'NO' || quizOne === 'N') {
    alert('Incorrect.');
  } else {
    alert('Ok, that doesn\'t make sense.');
  }
}
questionOne();

function questionTwo() {
  var quizTwo = prompt('Do I like piña coladas?').toUpperCase();
  if (quizTwo === 'YES' || quizTwo === 'Y') {
    alert('Not really');
    score++;
  } else if (quizTwo === 'NO' || quizTwo === 'N') {
    alert('Correct.');
  } else {
    alert('Umm...');
  }
}
questionTwo();

function questionThree() {
  var quizThree = prompt('Do I prefer electric razors?').toUpperCase();
  if (quizThree === 'YES' || quizThree === 'Y') {
    alert('Totally, if I watch a good review beforehand.');
    score++;
  } else if (quizThree === 'NO' || quizThree === 'N') {
    alert('I actually do, but with other things I\'m more on the analog side of life.');
  } else {
    alert('I mean...');
  }
}
questionThree();

function questionFour() {
  var quizFour = prompt('Am I a gamer?').toUpperCase();
  if (quizFour === 'YES' || quizFour === 'Y') {
    alert('+10,000 EXP');
    score++;
  } else if (quizFour === 'NO' || quizFour === 'N') {
    alert('Dude. Get with it.');
  } else {
    alert('Moving on..');
  }
}
questionFour();

function questionFive() {
  var quizFive = prompt('Am I into politics?').toUpperCase();
  if (quizFive === 'YES' || quizFive === 'Y') {
    alert('Unfortunate, ' + username + '.');
    score++;
  } else if (quizFive === 'NO' || quizFive === 'N') {
    alert('Unfortunate, ' + username + '.');
  } else {
    alert('Unfortunate, ' + username + '.');
  }
}
questionFive();

function questionSix() {
  for (var i = 0; i < 4; i++) {
    var fingers = 7;
    var guessCounter = 4;
    var fingerQuestion = 'How many fingers am I holding up?';
    var guessFingers = +prompt(fingerQuestion + ` You have ${guessCounter - i} guesses remaining.`);
    if (guessFingers === fingers) {
      alert('Excellent.');
      score++;
      break;
    } else if (i === 2) {
      alert('Last guess.');
    } else if (i < 3 && guessFingers < fingers) {
      alert('Higher...');
    } else if (i < 3 && guessFingers > fingers) {
      alert('Lower...');
    }
  }
}
questionSix();
alert('The correct answer was 7.');

function questionSeven() {
  var colors = ['WHITE', 'BLUE', 'BLACK', 'RED', 'GREEN', 'YELLOW', 'PURPLE'];
  var guessCounter = 6;
  var correctAnswer = false;
  for (var i = 0; i < guessCounter; i++) {
    var guess = prompt(`Name one of my favorite colors. ${guessCounter - i} guesses remaining.`).toUpperCase();
    for (var j = 0; j < colors.length; j++) {
      if (guess === colors[j]) {
        alert('Good job!');
        score++;
        correctAnswer = true;
        break;
      }
    }
    if (correctAnswer) {
      break;
    } else {
      alert('Incorrect. Please try again.');
    }
  }
}
questionSeven();

alert('My favorite colors are WHITE, BLUE, BLACK, RED, GREEN, YELLOW and PURPLE.');
alert('Your final score is: ' + score + '/7.');