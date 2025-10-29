const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1500; //60 secs (total secs in 1 minute)x 25mins (total minutes on timer) = 1500seconds
let interval; //set current time

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60 );
    const seconds = timeLeft % 60;

    timer.innerHTML = '${minutes.toString().padStart( 2, "0")} : ${seconds.toString().padStart( 2, "0")}';

};

const startTimer = () => {
    interval = setInterval (() => {}, 1000)

}