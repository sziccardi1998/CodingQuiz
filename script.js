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

//create variable to house question text
var questionText = "";

// create function to handle timing and score board start up
function gameStart() {
  setInterval(function () {
    timeEl.textContent = totalTime - timeSpent;
    scoreEl.textContent = score;
    timeSpent++;
    if (timeSpent > totalTime) {
      // something happens when time is up
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

// write questionText to the page
function questionWrite() {
    questionEl.textContent = questionText;
}

welcomeScreen();

document.addEventListener("click", function() {
    gameStart();
    questionText = "This is when we would load the first real question";
    questionWrite();
})