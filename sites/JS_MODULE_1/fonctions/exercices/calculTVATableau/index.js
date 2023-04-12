/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter le code qui calcule le montant de la TVA
d'une liste de montants hors taxes.

// TODO
- Ecrire une fonction pour calculer le montant de la TVA :
elle prend un montant hors taxes en paramètre et retourne
le montant de la TVA calculée
- Ecrire le programme qui pour chaque élément du tableau
montantsHT affiche le montant de la TVA

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

const TVA = 19.6;

const montantsHT = [12, 15, 20, 25, 30];

/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

function calculTVA(prix, taxe) {
  let a = prix * taxe / 100;
  
  return a;
}

let result = [];
for(let i = 0 ; i < montantsHT.length; i++) {
    let montantTVA = calculTVA(montantsHT[i], TVA);
    let montantTVAArrondi = Math.round(montantTVA * 100) / 100;
    result.push(montantTVAArrondi);
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

console.log(result);

/* Résultat attendu : console.log([
   2.352,
   2.94,
   3.92,
   4.9,
   5.88
 ])
*/
