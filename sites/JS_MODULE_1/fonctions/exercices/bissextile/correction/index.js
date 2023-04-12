/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Implémenter une fonction qui retourne true si l'année passée en paramètre
est bissextile.

Une année est bisseextile si elle respecte un des 2 critères suivants :
- C1 : Elle est divisible par 4 mais pas par 100
- C2 : Elle est divisible par 400
Autrement dit : pour être bissextile, une année doit dans tous les cas être divisible par 4 ;
mais si c’est une année de centenaire (comme 1800, 1900, etc.), elle doit en complément être divisible par 400.

Si une année ne respecte ni le critère C1 ni le critère C2, l'année n'est pas bissextile :
elle a ainsi la durée habituelle de 365 jours ; on dit alors que c’est une année commune.

*/
/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

/**
 * Fonction isBissextile
 *
 * @param {Number} annee - Année à vérifier
 *
 * @returns {Boolean} true si l'année est bissextile, false sinon
 */
 function isBissextile(annee) {
  if (annee % 4 === 0 && annee % 100 > 0) {
    return true;
  }
  if (annee % 400 === 0) {
    return true;
  }
  return false;
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Tant que l'utilisateur ne saisi pas une année
// Demander de saisir une année
let saisieAnnee;
while(isNaN(saisieAnnee)) {
  saisieAnnee = Number(prompt('Saisir une année'));
}

// Appeler la fonction isBissextile déclarée plus haut
// Si l'année est bissextile
if (isBissextile(saisieAnnee)) {
  // Afficher le message l'année xxxx est bissextile
  console.log('L\'année ' + saisieAnnee + ' est bissextile, elle a 366 jours');
} 
// Sinon
else {
  // Afficher le message l'année xxxx n'est pas bissextile
  console.log('L\'année ' + saisieAnnee + ' n\'est pas bissextile, elle a 365 jours');
}
