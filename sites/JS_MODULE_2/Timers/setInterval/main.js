'use strict'

let timer = 0;

let intervalID;

function updateTimer(timerDOM) {
    timerDOM.innerText = ++timer;
    
    if (timer > 5) {
        window.clearInterval(intervalID);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let timerDOM = document.getElementById('timer');
    
    intervalID = window.setInterval(updateTimer, 1000, timerDOM);
    
});
