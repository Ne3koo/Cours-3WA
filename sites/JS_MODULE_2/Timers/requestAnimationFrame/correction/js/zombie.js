'use strict'

const IMG_SOURCE = 'img/zombie.png';
const POSITION_Y = 0;
const FPS = 5;

let zombie;
let positionX = 0;

document.addEventListener('DOMContentLoaded', function () {
    zombie = document.getElementById('zombietomb');
    
    console.log(zombie);
    
    requestAnimationFrame(zombieMove);
});

function zombieMove() {
    positionX -= 100;
    
    zombie.style.background = `url(${IMG_SOURCE}) ${positionX}px ${POSITION_Y}px`;
    
    
    setTimeout(function () {
        requestAnimationFrame(zombieMove);
    }, 1000 / FPS);
}
