// create variables of all elements in document
var timeEl = document.getElementById("time");

//create timing and score variables
var totalTime = 60;
var timeSpent = 0;
var score = 0;

// create function to handle timing
function timerStart() {
    setInterval(function() {
        timeEl.textContent = totalTime - timeSpent;
        timeSpent++;
        if (timeSpent > totalTime){
            // something happens when time is up
        }
    }, 1000)
}

timerStart();