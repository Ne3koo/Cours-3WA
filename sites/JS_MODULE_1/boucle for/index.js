
for(let i = 0; i < 3; i++) {
  console.log(i);
}

// Phase d'initialisation : let i = 0;

// Condition de fin de boucle : i < 3;
// Tant qu'elle est vraie,
// on continue d'exécuter le code entre { et } : console.log(i);

// Phase de modification : i++;


/************** Ce qu'il se passe *************/

// Initialisation
let i = 0;


// Première itération
if (i < 3) { // i < 3 => true
    console.log(i);// 0
}


// Seconde itération
i = i + 1; // i = 1
if (i < 3) { // i < 3 => true
    console.log(i);// 1
}

// Troisième itération
i = i + 1; // i = 2
if (i < 3) { // i < 3 => true
    console.log(i);// 2
}

// Dernière itération
i = i + 1; // i = 3
if (i < 3) { // i < 3 => false
    console.log(i);// Ce code ne sera pas exécuté
}

// Fin de boucle :
// on exécute les instructions qui suivent la boucle
