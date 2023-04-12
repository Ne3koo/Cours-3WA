'use strict'

// Initialisation des fps
let fps = 0;

let fpsDom;
let times = [];
let counter = 0;
window.addEventListener('load', function() {
    fpsDom = document.querySelector('#fps');
    window.requestAnimationFrame(updateFps);
});

function updateFps() {

    let anim = window.requestAnimationFrame(updateFps);
    counter++;
    if (counter >= 10) {
        window.cancelAnimationFrame(anim)
    }
    console.log(counter);

}
