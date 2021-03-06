// create variables of all elements in document
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var responseEl = document.getElementById("response");
var answerEl = document.getElementById("answerList");
var formStore = document.getElementById("formStore");

//variables for timing navitgation and question functionality
var answerStore = [];
var totalTime = 60;
var timeSpent = 0;
var score = -1;
var questionIndex = 0;
var correctIndex = 0;
var timerBool = true;
var playerScore = {
  finalScore: [],
  playerInitials: [],
};

// creation of global variables to be used later
var form = document.createElement("form");
var label = document.createElement("label");
var formInput = document.createElement("input");
var formButton = document.createElement("button");
form.setAttribute("class", "form-inline");
formButton.setAttribute("class", "btn");
formInput.setAttribute("class", "form-control");

//create variable to house question text
var questionText = "";

// create function to handle timing and score board start up
function gameStart() {
  // after timer hits 0 stop incrementing
  if (timerBool) {
    gameTimer = setInterval(function () {
      if (totalTime >= timeSpent) {
        timeEl.textContent = totalTime - timeSpent;
        scoreEl.textContent = score;
        timeSpent++;
      } else {
        // send to the ending screen
        endScreen();
        timerBool = false;
        clearInterval(gameTimer);
        return;
      }
    }, 1000);
  }
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
    li.setAttribute("class", "list-group-item");
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

  // pass to navigation handler
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

// create function to create score list at end of game
function formCreation() {
  formStore.appendChild(form);
  form.appendChild(label);
  form.appendChild(formInput);
  formInput.setAttribute("type", "text");
  form.setAttribute("id", "initialForm");
  label.setAttribute("for", "Initials");
  label.textContent = "Add Your Initials: ";
  form.appendChild(formButton);
}

// the following question functions have the same structure
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
  answerStore = ["alert()", "console.log()", "element.textContent = "];
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
  answerEl.innerHTML = "";
  responseEl.innerHTML = "";

  // add form to the ending screen for initial and score collection
  formCreation();
}

// create function to present scoreboard
function presentScoreboard() {
  // change heading to show that scores will be shown
  questionText = "Recent Scores: ";
  questionWrite();
  answerStore = [];
  // create new page elements to show results
  var resultsList = document.createElement("ul");
  formStore.appendChild(resultsList);
  resultsList.setAttribute("id", "scoreList");
  // store the results in the answer array
  for (var i = 0; i < playerScore.finalScore.length; i++) {
    answerStore.push(
      playerScore.playerInitials[i] + ": " + playerScore.finalScore[i]
    );
  }

  // append results to the result list
  for (var i = 0; i < answerStore.length; i++) {
    var answer = answerStore[i];
    var li = document.createElement("li");
    li.textContent = answer;
    resultsList.appendChild(li);
  }
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
  } else if (questionIndex === 21) {
    endScreen();
  }
}

// initialize screen on load
welcomeScreen();

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

formButton.addEventListener("click", function (event) {
  // prevent form from submitting
  event.preventDefault();

  // trim and store intials
  var initialsText = formInput.value.trim();

  console.log(initialsText);

  // get all stored scores and initials
  var loadedScores = JSON.parse(localStorage.getItem("storedScore"));
  // if previous scores exsist and them to the playerScore object
  if (loadedScores !== null) {
    for (var i = 0; i < loadedScores.playerInitials.length; i++) {
      playerScore.finalScore.push(loadedScores.finalScore[i]);
      playerScore.playerInitials.push(loadedScores.playerInitials[i]);
    }
  }

  // add current score and initials to object
  playerScore.finalScore.push(score);
  playerScore.playerInitials.push(initialsText);
  console.log(playerScore);

  // store scores and initials for leaderboard
  localStorage.setItem("storedScore", JSON.stringify(playerScore));

  // clear out form
  formStore.innerHTML = "";

  // call scoreboard

  presentScoreboard();
});
