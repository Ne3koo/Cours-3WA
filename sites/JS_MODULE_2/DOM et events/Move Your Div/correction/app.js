/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/
document.addEventListener('DOMContentLoaded', function(event) {
    let boutonClick = document.getElementById('moveDiv');
    let boutonHide = document.getElementById('hideModal');
    
    let clicCounter = 0;
    
    boutonClick.addEventListener('click', function () {
        clicCounter++;
        
        let redBox = document.querySelector('.red');
        let modale = document.querySelector('.modal');
        
        modale.classList.remove('active');
        
        switch(clicCounter) {

            // 1er clic : Bouger à droite
            case 1:
                //redBox.style.marginLeft = '200px';
                redBox.style.left = '200px';
                break;

            // 2ème clic : Bouger vers le bas
            case 2:
                //redBox.style.marginTop = '200px';
                redBox.style.top = '200px';
                break;

            // 3ème clic : Bouger vers la gauche
            case 3:
                //redBox.style.marginLeft = '0';
                redBox.style.left = '0';
                break;

            // 4ème clic : Bouger vers le haut
            case 4:
            default:
                //redBox.style.marginTop = '0';
                redBox.style.top = '0';
                clicCounter = 0;
                modale.classList.add('active');
                
        }
    });
    
    boutonHide.addEventListener('click', function () {
        let modale = document.querySelector('.modal');
        modale.classList.remove('active');
    });
});
