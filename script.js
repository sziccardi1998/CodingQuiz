// create variables of all elements in document
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var responseEl = document.getElementById("response");
var answerEl = document.getElementById("answerList");
var answerStore = [];

//create timing and score variables
var totalTime = 60;
var timeSpent = 0;
var score = -1;
var questionIndex = 0;
var correctIndex = 0;

//create variable to house question text
var questionText = "";

// create function to handle timing and score board start up
function gameStart() {
  setInterval(function () {
    if(totalTime >= timeSpent){
      timeEl.textContent = totalTime - timeSpent;
      scoreEl.textContent = score;
      timeSpent++;
    }
    else {
      // send to the ending screen
      endScreen();
      return;
    }
  }, 1000);
}

// create the intial screen
function welcomeScreen() {
  questionText =
    "Welcome to the JavaScript timed coding quiz. You will have 60 seconds to answer some amount of questions. Hit the button below to start the quiz!";
  questionWrite();
  correctIndex = 0;
  answerStore = ["Start!"];
  answerRender();
}

// create function to clear answer options after question is answered correctly
function answerRender() {
  // clear answer options
  answerEl.innerHTML = "";

  // add new answers to the screen
  for (var i = 0; i < answerStore.length; i++) {
    var answer = answerStore[i];
    var li = document.createElement("li");
    li.textContent = answer;
    li.setAttribute("data-index", i);
    answerEl.appendChild(li);
  }
}

// create function to handle scoring
function scoreUp() {
  score++;
}

// function to handle correct answers
function correctSelection() {
  // increase question index
  questionIndexIncrease();

  //display message showing answer was correct
  responseEl.textContent = "Correct!";

  // increase the score
  scoreUp();

  questionNavigation();
}

// function to handel incorrect answers
function inocrrectSelection() {
  // display message that the selection was incorrect
  responseEl.textContent = "Incorrect!";

  // remove time from the clock will chose amount later
  timeSpent = timeSpent + 2;
}

// write questionText to the page
function questionWrite() {
  questionEl.textContent = questionText;
}

// function that handles increasing question index
function questionIndexIncrease() {
  questionIndex++;
}

// create function to handle end of game
function gameEnd() {

}

function firstQuestion() {
  //add question text and write to screen
  questionText = "JavaScript is a type of ";
  questionWrite();
  // write to list items that will show possible answers
  answerStore = ["Object Oriented Programming", "Functional Programming"];
  correctIndex = 0;
  answerRender();
}

function secondQuestion() {
  questionText = "Array indexes start at ";
  questionWrite();
  answerStore = ["0", "1", "Whatever I set"];
  correctIndex = 0;
  answerRender();
}

function thirdQuestion() {
  questionText = "Arrays use which type of bracket?";
  questionWrite();
  answerStore = ["( )", "[ ]", "{ }"];
  correctIndex = 1;
  answerRender();
}

function fourthQuestion() {
  questionText = "Which represents the 'or' logical operator?";
  questionWrite();
  answerStore = ["!!", "&&", "||"];
  correctIndex = 2;
  answerRender();
}

function fifthQuestion() {
  questionText = "JSON stands for ";
  questionWrite();
  answerStore = [
    "Just Stored Objects and Numbers",
    "JavaScript Object Numbers",
    "JavaScript Object Notation",
  ];
  correctIndex = 2;
  answerRender();
}

function sixthQuestion() {
  questionText = "Which character is put at the end of a line?";
  questionWrite();
  answerStore = [":", ";", "."];
  correctIndex = 1;
  answerRender();
}

function seventhQuestion() {
  questionText = "How do you prevent event 'bubbling'?";
  questionWrite();
  answerStore = [
    "event.stopPropogation()",
    "event.preventDefault()",
    "event.stopBubble()",
  ];
  correctIndex = 0;
  answerRender();
}

function eighthQuestion() {
  questionText = "How do you prevent a form from submitting?";
  questionWrite();
  answerStore = [
    "event.stopPropogation()",
    "event.preventDefault()",
    "event.stopBubble()",
  ];
  correctIndex = 1;
  answerRender();
}

function ninthQuestion() {
  questionText = "What comes after the ',' in .addEventListner('', )?";
  questionWrite();
  answerStore = ["A function", "A string", "A number", "A boolean"];
  correctIndex = 0;
  answerRender();
}

function tenthQuestion() {
  questionText = "var example = true; is what kind of variable?";
  questionWrite();
  answerStore = ["A string", "A number", "An array", "A boolean"];
  correctIndex = 3;
  answerRender();
}

function eleventhQuestion() {
  questionText = "Which kind of loop can easily be an infinite loop?";
  questionWrite();
  answerStore = ["For Loop", "While Loop"];
  correctIndex = 1;
  answerRender();
}

function twelthQuestion() {
  questionText = "If/Else statements are contained in ";
  questionWrite();
  answerStore = ["[ ]", "{ }", "( )"];
  correctIndex = 1;
  answerRender();
}

function thirteenthQuestion() {
  questionText = "If statements are only run if the condition ";
  questionWrite();
  answerStore = ["is true", "is false", "the statement always runs"];
  correctIndex = 0;
  answerRender();
}

function fourteenthQuestion() {
  questionText = "Which for loop will run 4 times?";
  questionWrite();
  answerStore = [
    "for(var i = 0; i < 3; i++)",
    "for(var i = 0; i < 4; i++)",
    "for(var i = 0; i < 5; i++)",
  ];
  correctIndex = 1;
  answerRender();
}

function fifteenthQuestion() {
  questionText = "Which of the following writes to an HTML page?";
  questionWrite();
  answerStore = ["alert()", "console.log()", "event.textContent = "];
  correctIndex = 2;
  answerRender();
}

function sixteenthQuestion() {
  questionText = "What does .trim() do?";
  questionWrite();
  answerStore = [
    "Splits a string in to two parts.",
    "Trims a string to a defined length.",
    "Removes white space from the front and back of a string.",
  ];
  correctIndex = 2;
  answerRender();
}

function seventeenthQuestion() {
  questionText = "Objects are contained within ";
  questionWrite();
  answerStore = ["( )", "[ ]", "{ }"];
  correctIndex = 2;
  answerRender();
}

function eighteenthQuestion() {
  questionText = "Arrays can store ";
  questionWrite();
  answerStore = ["Strings", "Numbers", "Booleans", "All of the above"];
  correctIndex = 3;
  answerRender();
}

function nineteenthQuestion() {
  questionText = "Objects generally store ";
  questionWrite();
  answerStore = [
    "All strings",
    "All numbers",
    "Both strings and numbers",
    "Pieces of related data",
  ];
  correctIndex = 3;
  answerRender();
}

function twentiethQuestion() {
  questionText = "A function inside of an object is called ";
  questionWrite();
  answerStore = [
    "an object associated function",
    "an objective function",
    "a strategy",
    "a method",
  ];
  correctIndex = 3;
  answerRender();
}

//create function to handle the end of the game
function endScreen() {
  // display final score
  questionText = "Your final score was " + score;
  questionWrite();
  // remove response and answer elements
  answerEl.remove();
  responseEl.remove();
}

// create function to move to next question
function questionNavigation() {
  if (questionIndex === 0) {
    welcomeScreen();
  } else if (questionIndex === 1) {
    // move to first question and start tracking score and time
    firstQuestion();
    gameStart();
  } else if (questionIndex === 2) {
    secondQuestion();
  } else if (questionIndex === 3) {
    thirdQuestion();
  } else if (questionIndex === 4) {
    fourthQuestion();
  } else if (questionIndex === 5) {
    fifthQuestion();
  } else if (questionIndex === 6) {
    sixthQuestion();
  } else if (questionIndex === 7) {
    seventhQuestion();
  } else if (questionIndex === 8) {
    eighthQuestion();
  } else if (questionIndex === 9) {
    ninthQuestion();
  } else if (questionIndex === 10) {
    tenthQuestion();
  } else if (questionIndex === 11) {
    eleventhQuestion();
  } else if (questionIndex === 12) {
    twelthQuestion();
  } else if (questionIndex === 13) {
    thirteenthQuestion();
  } else if (questionIndex === 14) {
    fourteenthQuestion();
  } else if (questionIndex === 15) {
    fifteenthQuestion();
  } else if (questionIndex === 16) {
    sixteenthQuestion();
  } else if (questionIndex === 17) {
    seventeenthQuestion();
  } else if (questionIndex === 18) {
    eighteenthQuestion();
  } else if (questionIndex === 19) {
    nineteenthQuestion();
  } else if (questionIndex === 20) {
    twentiethQuestion();
  }
  else if (questionIndex === 21) {
    endScreen();
  }
}

questionNavigation();

answerEl.addEventListener("click", function (event) {
  var choice = event.target;
  // if click on an answer check to see if it is the correct answer
  if (choice.matches("li") === true) {
    var answerSelection = choice.getAttribute("data-index");
    console.log(answerSelection);
    if (answerSelection == correctIndex) {
      correctSelection();
    } else {
      inocrrectSelection();
    }
  }
});
