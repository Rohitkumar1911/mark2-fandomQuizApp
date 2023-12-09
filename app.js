var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name? ");
 console.log("Welcome! " + userName + " Let's see how much do you about iron man? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;

  } else {
    console.log("You are wrong!");
  }
  console.log("current score: ", score);
}

var questions = [{
  question: "In which year first iron man movie got released? ",
  answer: "2008"
}, {
  question: "Who played the role of iron man? ",
  answer: "robert downey jr"
}, {
  question: "what is the ability of iron man? ",
  answer: "armoured suit"
}, {
  question: "What is the color of iron man suit? ",
  answer: "red"
}, {
  question: "can iron man fly? ",
  answer: "yes"
}
  ];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,
      currentQuestion.answer)
}
console.log("Your score is: ", score);