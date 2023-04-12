/*

function DOMReady (event) {
  console.log(document);
}

document.addEventListener('DOMContentLoaded', DOMReady);

*/

document.addEventListener('DOMContentLoaded', function () {

  
  
  // Click sur big daddy le met en rouge
  let bigBox = document.getElementById('js-big-daddy');
  
  bigBox.addEventListener('click', function(event) {
    event.target.classList.toggle('rouge');
    console.log(event);
  });

  // Souris bouge sur ma 1ère div la met en vert
  /*
   let mesDivs = document.querySelectorAll('.js-ma-div');
   let maPremiereDiv = mesDivs[0];
  */
  let maPremiereDiv = document.querySelector('.js-ma-div');
  
  maPremiereDiv.addEventListener('mousemove', function() {
    maPremiereDiv.classList.add('vert');
  });

  // Appui sur une touche affiche l'objet event dans la console
  function keydownListener(event) {
    console.log(event);
    //Enleve le listener une fois la premiere touche appuyée
    //afin qu'on ne puisse le faire qu'une fois
    document.removeEventListener('keydown', keydownListener);
  }
  
  document.addEventListener('keydown', keydownListener);
  
});
