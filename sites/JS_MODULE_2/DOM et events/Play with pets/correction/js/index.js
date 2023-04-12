/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener('DOMContentLoaded', () => {

    console.log('Play with pets');

    // TODO : Modale
    // Lorsqu'on clique sur le bouton d'aide (identifiant : help-button)
    // Ouvrir la modale (identifiant popup-help)
    // Lorsque'on clique sur la croix en haut à droite de la modale,
    // (elle porte la classe .js-close-button)
    // Fermer la modale
    let btnClick = document.getElementById('help-button');
    let modale = document.getElementById('popup-help');
    
    let btnClose = document.querySelector('.js-close-button');
    
    btnClick.addEventListener('click', function () {
        modale.classList.add('visible');
    });
    
    btnClose.addEventListener('click', function () {
        modale.classList.remove('visible');
    });


    // TODO : Couverture
    // La faire défiler de gauche à droite avec les flèches
    // L'image est contenue dans un élément qui a la classe .main-cover
    document.addEventListener('keydown', function(event) {
        console.log(event);
        let cover = document.querySelector('.main-cover img');
        
        switch(event.key) {
            case 'ArrowRight':
                cover.style.marginLeft = '200px';
                break;
            case 'ArrowLeft':
                cover.style.marginLeft = '-200px';
        }
    });

    // TODO : Les races de chat
    // Afficher la bulle sur le chat au clic sur le bouton
    // L'élément est accessible via la classe .race-chat-cover::after
    let btnClicMe = document.querySelector('.race-chat-cover button');
    console.log(btnClicMe);
    btnClicMe.addEventListener('click', function () {
        console.log('click');
        let bulle = document.querySelector('.race-chat-cover');
        console.log(bulle);
        bulle.classList.add('visible');
    });

    // TODO : Les races de chat
    // Si on clique sur l'image, changer la photo
    // L'image est contenue dans un élément qui a la classe .race-chat-cover
    let chat = document.querySelector('.race-chat-cover img');
    chat.addEventListener('click', function (event) {
        this.setAttribute('src', 'images/chat-mignon.png');
    });

    // TODO : Les races de chat
    // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
    // La liste est accessible via la classe .race-chat-list
    //document.querySelector('.race-chat-list li:nth-child(6)').style.fontWeight = 'bold';
    //document.querySelector('.race-chat-list li:nth-child(10)').style.fontWeight = 'bold';
    document.querySelector('#race-chat-list-6').style.fontWeight = 'bold';
    document.querySelector('#race-chat-list-10').style.fontWeight = 'bold';
    
});
