/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un anti-spam en utilisant
des fonctions.

On a en entrée du programme :
- un tableau d'email reçus, comportant des emails frauduleux et des emails valides
- une liste blanche d'email, comportant les adresses email considérées comme valides

Le programme doit retourner un tableau "boite_reception" contenant uniquement les email valides,
c'est à dire les emails qui sont dans la liste blanche.

Le tableau de retour "boite_reception" pourra par exemple être envoyé à un serveur.
Pour notre exercice, on se contentera de l'afficher dans la console.

// TODO : Ecrire deux fonctions :

// 1. Fonction estDansListeBlanche qui prend en paramètre un email
// et retourne true si l'email est dans la liste blanche,
// false dans le cas contraire


// 2. Fonction filtrerEmailRecus qui prend en paramètre la liste email_recus
// et retourne uniquement les emails contenus dans liste_blanche
// Pour cela, elle devra utiliser la fonction estDansListeBlanche

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let liste_blanche = [
  'larissa@gmail.com',
  'hacker44@gmail.com'
];

let email_recus = [{
  from: 'toto@gmail.com',
  content: 'Bonjour toi !',
},{
  from: 'larissa@gmail.com',
  content: 'Hé Salut !',
},{
  from: 'hacker44@gmail.com',
  content: 'Je suis un hacker !',
},{
  from: 'hacker@gmail.com',
  content: 'Piratage en cours...',
}];

/**************************************************************/
/*                         Fonctions                          */
/**************************************************************/

function estDansListeBlanche (from) {
  for (let i = 0; i < liste_blanche.length; i++) {
    // si l'email est dans la liste blanche
    if (from === liste_blanche[i]) {
      // retourne true
      return true;
    }
  }
  return false;
}

function filtrerEmailRecus (recus) {
  const boite_reception = [];
  
  for (let i = 0; i < recus.length; i++) {
    let email_recu = recus[i];
    // utilise la fonction estDansListeBlanche
    if (estDansListeBlanche(email_recu.from) === true) {
      // pour retourner les mails autorisés
      boite_reception.push(email_recu);
    }
  }
  
  return boite_reception;
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// DO NOT EDIT

// Filtre les email reçus et récupère la liste d'email filtrée
const boite_reception = filtrerEmailRecus(email_recus);

// Afficher le contenu de la boite de réception
console.log(boite_reception);
