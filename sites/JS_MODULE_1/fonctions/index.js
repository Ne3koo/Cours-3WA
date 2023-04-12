
/******************** Partie 1 : sans paramètre ******************/

// toto est le nom de la fonction
// () contient les paramètres de la fonction (ici il n'y en a pas)
// {} contient le corps de la fonction,
//    qui est le code qui sera exécuté lorsque la fonction sera appelée
// return c; signifie que la fonction renvoie la valeur de la variable c
// c'est la valeur de la fonction qui est retournée au code appelant

function toto () {
  let a = 1;
  let b = 2;
  let c = a + b;

  return c;
}


// Exécute la fonction toto qui retournera la valeur de la variable c
// et stocke le résultat dans la variable titi
let titi = toto();

// Affiche le contenu de la variable titi
console.log(titi); // 3


/* Détail de se qui se passe au-dessus

  1. La fonction toto() est appelée
  2. Le code entre { et } est exécuté :
     let a = 1;
     let b = 2;
     let c = a + b;

  3. La fonction retourne la valeur de la variable c au code appelant
     return c;

  4. La valeur de la variable c est stockée dans la variable titi

     let titi <= return c <= toto();

  5. La valeur de la variable titi est affichée
 */

/******************** Partie 2 : avec paramètre ******************/

function titi(a, b) {
  return a + b;
}

let tata = titi(1, 2);
console.log(tata); // 3

/* Détail de se qui se passe au-dessus
  1. La fonction titi() est appelée avec 2 paramètres : 1 et 2
  2. Les paramètres a et b sont alimentées respectivement
     par les valeurs 1 et 2

  Equivalent à :
    let a = 1;
    let b = 2;

  2. Le code entre { et } est exécuté :
    a + b;

  3. La fonction retourne le résultat de a + b au code appelant
    return a + b;
  
  4. Le résultat de a + b est stocké dans la variable tata
  5. La valeur de la variable tata est affichée
*/
