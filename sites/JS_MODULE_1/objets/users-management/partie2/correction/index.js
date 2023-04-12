/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

// Voici une collection : cad un tableau d'objets de même type
// Tu vois la syntaxe ?

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

TODO
- Demander à l'utilisateur de saisir son prenom, nom, age
NOTE : penser à gérer les types de valeurs
- Puis créer un objet (comme celui déjà présent) avec ces 3 éléments
- Enfin, l'ajouter à la collection : users.push(nouvel objet)
- Pour finir, afficher le contenu de la collection

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

let users = [
  {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
  }
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Le code sera implémenté ici...
let prenom = prompt('Quelle est votre prénom ?');
let nom = prompt('Quelle est votre nom ?');
let age;

do {
    age = parseInt(prompt('Quelle est votre age ?'));
}
while(isNaN(age));

let newUser = {
    nom: nom,
    prenom: prenom,
    age: age
};

users.push(newUser);

console.log(users);
