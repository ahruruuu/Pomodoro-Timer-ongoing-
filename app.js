const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; //60 secs (total secs in 1 minute)x 25mins (total minutes on timer) = 1500seconds
let interval; //set current time

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60 );
    const seconds = timeLeft % 60;

    timer.innerHTML = `${minutes.toString().padStart( 2, "0")} : ${seconds.toString().padStart( 2, "0")}`;

};

//functions for buttons
//start button function
const startTimer = () => {
    interval = setInterval (() => {
        timeLeft--; //so that timer decreases every 1 sec
        updateTimer(); //display timer

        //if timer hits 0
        if(timeLeft === 0) {
            clearInterval(interval); // to clear time
            alert ("Time's up!");
            timeLeft = 1500; //reset time to 1500s
            updateTimer(); 
        }  
    },  1000); //1000 millisecond is 1 sec
};

//stop button function
const stopTimer = () => clearInterval(interval); //stops time

//reset button function
const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
};

//assigning the functions to the buttons
start.addEventListener("click", startTimer); //executes Start button on timer
stop.addEventListener("click", stopTimer); //executes Stop button on timer
reset.addEventListener("click", resetTimer); //executes Reset button on timer
