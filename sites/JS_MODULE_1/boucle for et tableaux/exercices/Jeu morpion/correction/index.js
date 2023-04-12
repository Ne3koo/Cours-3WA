/**************************************************************/
/*                         Variables                          */
/**************************************************************/

// Création du tableau de jeu, tel qu'il s'affichera dans la console
let jeu = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Création du tableau de symboles : X et O
let symboles = [
  "X",
  "O"
];

// Définition de la variable qui contiendra le symbole du joueur
let symboleDuJoueur = symboles[0];

// Définition de la variable qui contiendra le numéro de la ligne
let numeroDeLaLigne = 0;

// Définition de la variable qui contiendra le numéro de la colonne
let numeroDeLaColonne = 0;

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Début de la boucle
while (true) {
  // Affichage du tableau de jeu dans la console
  for(let i = 0; i < jeu.length; i++) {
    console.log(jeu[i]);
  }
  console.log("\n");

  // Demande au joueur de choisir une ligne
  numeroDeLaLigne = parseInt(prompt("Choisissez une ligne :"));

  // Demande au joueur de choisir une colonne
  numeroDeLaColonne = parseInt(prompt("Choisissez une colonne :"));

  // Vérification de la validité de la ligne : entre 0 et 2
  if (numeroDeLaLigne < 0 || numeroDeLaLigne > 2) {
    alert("La ligne doit être compris entre 0 et 2");
    continue;
  }

  // Vérification de la validité de la colonne : entre 0 et 2
  if (numeroDeLaColonne < 0 || numeroDeLaColonne > 2) {
    alert("La colonne doit être compris entre 0 et 2");
    continue;
  }

  // Vérification que la case est vide
  if (jeu[numeroDeLaLigne][numeroDeLaColonne] !== null) {
    alert("La case est déjà occupée");
    continue;
  }

  // Attribution du symbole du joueur à la case
  jeu[numeroDeLaLigne][numeroDeLaColonne] = symboleDuJoueur;

  // Vérification de la victoire du joueur
  if (
    jeu[0][0] === jeu[0][1] &&
    jeu[0][1] === jeu[0][2] &&
    jeu[0][0] !== null ||
    jeu[1][0] === jeu[1][1] &&
    jeu[1][1] === jeu[1][2] &&
    jeu[1][0] !== null ||
    jeu[2][0] === jeu[2][1] &&
    jeu[2][1] === jeu[2][2] &&
    jeu[2][0] !== null ||
    jeu[0][0] === jeu[1][0] &&
    jeu[1][0] === jeu[2][0] &&
    jeu[0][0] !== null ||
    jeu[0][1] === jeu[1][1] &&
    jeu[1][1] === jeu[2][1] &&
    jeu[0][1] !== null ||
    jeu[0][2] === jeu[1][2] &&
    jeu[1][2] === jeu[2][2] &&
    jeu[0][2] !== null ||
    jeu[0][0] === jeu[1][1] &&
    jeu[1][1] === jeu[2][2] &&
    jeu[0][0] !== null ||
    jeu[0][2] === jeu[1][1] &&
    jeu[1][1] === jeu[2][0] &&
    jeu[0][2] !== null
  ) {
    alert("Le joueur " + symboleDuJoueur + " a gagné !");
    console.log(jeu);
    break;
  }

  // Vérification s'il reste des cases vides
  let finDuJeu = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (jeu[i][j] === null) {
        finDuJeu = false;
      }
    }
  }
  // Si toutes les cases sont remplies, le jeu est terminé par un nul
  if (finDuJeu) {
    alert("Match nul !");
    console.log(jeu);
    break;
  }

  // Changement du symbole du joueur : X ou O
  if (symboleDuJoueur === symboles[0]) {
    symboleDuJoueur = symboles[1];
  } else {
    symboleDuJoueur = symboles[0];
  }
}
