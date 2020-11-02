// create variables of all elements in document
var timeEl = document.getElementById("time");
var scoreEl = document.getElementById("score");
//create timing and score variables
var totalTime = 60;
var timeSpent = 0;
var score = 0;

// create function to handle timing and score board start up
function gameStart() {
    setInterval(function() {
        timeEl.textContent = totalTime - timeSpent;
        scoreEl.textContent = score;
        timeSpent++;
        if (timeSpent > totalTime){
            // something happens when time is up
        }
    }, 1000)
}

// create function to handle scoring
function scoreUp() {
    score++;
}

// start timer when game is started
gameStart();

// test scoring function
scoreUp();