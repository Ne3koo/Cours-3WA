
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

let jour = prompt("Quel est le jour de la semaine ?");
let hasAstreinte = confirm("Y a-t-il une astreinte ?");

if ( (jour === 'jeudi' || jour === 'vendredi') && ! hasAstreinte ) {
  alert("Pas de MEP en fin de semaine !");
} else {
  alert("MEP Autorisée");
}
