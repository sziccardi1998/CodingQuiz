// create variables of all elements in document
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");

// use test button to tune starting the game
var startEl = document.getElementById("start");

//create timing and score variables
var totalTime = 60;
var timeSpent = 0;
var score = 0;
var questionIndex = 0;

//create variable to house question text
var questionText = "";

// create function to handle timing and score board start up
function gameStart() {
  setInterval(function () {
    timeEl.textContent = totalTime - timeSpent;
    scoreEl.textContent = score;
    timeSpent++;
    if (timeSpent > totalTime) {
      // send to the ending screen

    }
  }, 1000);
}

// create the intial screen
function welcomeScreen() {
    questionText = "Welcome to the JavaScript timed coding quiz. You will have 60 seconds to answer some amount of questions. Hit the button below to start the quiz!";
    questionWrite();
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


  // increase the score
  scoreUp();

}

// function to handel incorrect answers
function inocrrectSelection() {
  // display message that the selection was incorrect

  // remove time from the clock will chose amount later
  timeSpent = timeSpent + 2;
}

// write questionText to the page
function questionWrite() {
  questionEl.textContent = questionText;
}

welcomeScreen();

// function that handles increasing question index
function questionIndexIncrease(){
  questionIndex++;
}

function firstQuestion() {
  questionText = "JavaScript is a type of ";
  questionWrite();
  questionIndexIncrease();
}

document.addEventListener("click", function() {
    gameStart();
    questionText = "This is when we would load the first real question";
    questionWrite();
})