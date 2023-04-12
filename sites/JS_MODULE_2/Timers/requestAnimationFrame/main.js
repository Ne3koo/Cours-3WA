'use strict'

// Initialisation des fps
let fps = 0;

let fpsDom;


// Tableau nous permettant de stocker le nombre d'appel au rafraichissement et la valeur du temps en millisecondes
let times = [];

function updateFps() {
    window.requestAnimationFrame(updateFps);
    
    console.log('op');

    const now = performance.now();

    // on va enlever les valeurs dans le tableau qui sont supérieurs à 1 seconde (on garde donc dans le tableau le temps de tous les appels s'ils on été efefctués dans la même secondes). Si le tableau comporte 60 éléments, on aura donc fait 60 appels en 1 seconde, donc 60 FPS !)
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }

    // on ajoute au tableau le temps actuel en millisecondes
    times.push(now);

    // lm longeur du tableau correspond donc au nombre de fois ou nous avons appelé cette fonction en une seconde, donc à nos FPS
    fps = times.length;

    // on affiche les FPS dans l'HTML
    fpsDom.innerText = `${fps} fps`;
}

document.addEventListener('DOMContentLoaded', function () {
    fpsDom = document.querySelector('#fps');
    
    window.requestAnimationFrame(updateFps);
});
