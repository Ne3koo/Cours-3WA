/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de compter les mots commençant
par la lettre "s".

Exemple d'algorithme (pour t'aider) :
- Parcourir la liste de mots
  - Vérifier si la première lettre est égale à s
    - Si oui, incrémente le compteur

- Affiche le nombre de mots commençant par s

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_mots = ['sapin', 'bougie', 'sucre', 'soleil', 'alphabet', 'trousse'];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Parcourir la liste de mots
let compteur = 0;
for(let i = 0; i < liste_mots.length; i++) {
  let mot = liste_mots[i];

  // Vérifie si la première lettre est égale à s
  if(mot[0] === 's') {
    // Si oui, incrémente le compteur
    compteur++;
    console.log(mot);
  }
}

// Affiche le nombre de mots commençant par s
console.log(`${compteur} lettres commençant par s`);
