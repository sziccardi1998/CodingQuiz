// create variables of all elements in document
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question");
var responseEl = document.getElementById("response");
var answerEl  = document.getElementById("answerList");
var answerStore = [];
// use test button to tune starting the game
var startEl = document.getElementById("start");

//create timing and score variables
var totalTime = 60;
var timeSpent = 0;
var score = 0;
var questionIndex = 0;
var correctIndex = 0;

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

// create function to clear answer options after question is answered correctly
function answerRender() {
  // clear answer options
  answerEl.innerHTML = "";

  // add new answers to the screen
  for(var i = 0; i<answerStore.length(); i++){
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

welcomeScreen();

// function that handles increasing question index
function questionIndexIncrease(){
  questionIndex++;
}

function firstQuestion() {
  questionText = "JavaScript is a type of ";
  questionWrite();
  questionIndexIncrease();
  // write to buttons that will show possible answers
  while(questionIndex === 1) {
    // add event listners that are linked to incorrect and correct answer handling
  }
  // start the next function
}

document.addEventListener("click", function() {
    gameStart();
    questionText = "This is when we would load the first real question";
    questionWrite();
})

answerEl.addEventListener("click", function(event) {
  var choice = event.target;
  // if click on an answer check to see if it is the correct answer
  if (choice.matches("li") === true) {
    var answerSelection = choice.parentElement.getAttribute("data-index");
  }


})