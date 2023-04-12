/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif de cet exercice est de créer un filtre anti-spam.

On a en entrée du programme :
- un tableau d'email reçus, comportant des emails frauduleux et des emails valides
- une liste blanche d'email, comportant les adresses email considérées comme valides

Le programme doit retourner un tableau "boite_reception" contenant uniquement les email valides,
c'est à dire les emails qui sont dans la liste blanche.

Le tableau de retour "boite_reception" pourra par exemple être envoyé à un serveur.
Pour notre exercice, on se contentera de l'afficher dans la console.


// TODO
- Créer le programme de filtrage qui stocke dans le tableau "boite_reception"
les emails présents dans email_recus qui ont une adresse email dans liste_blanche
- Afficher le tableau de retour "boite_reception" dans la console.

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

let boite_reception = [];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Pour chaque email reçu
for (let i = 0; i < email_recus.length; i++) {
  let receivedEmail = email_recus[i];
  // Pour chaque email de la liste blanche
  
  // Méthode 1
  for (let j = 0; j < liste_blanche.length; j++) {
    let whiteEmail = liste_blanche[j];

    // Vérifier si l'email reçu est dans la liste blanche
    if (receivedEmail.from === whiteEmail) {
      // Si oui, l'ajouter dans le tableau "boite réception"
      boite_reception.push(receivedEmail);
    }
  }
  // Fin méthode 1

  // Méthode 2
  if (liste_blanche.indexOf(receivedEmail.from) > -1) {
    boite_reception.push(receivedEmail);
  }
  // Fin méthode 2
}


// Autre méthode
boite_reception = email_recus.filter((email) => {
  return (liste_blanche.indexOf(email.from) > -1);
});

console.log(boite_reception);
