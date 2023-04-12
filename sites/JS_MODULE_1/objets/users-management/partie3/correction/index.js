/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

TODO
- Pour chaque objet du tableau users, afficher le message suivant :
  Il y a Toto Dupont, 37 ans

- Puis calculer et afficher la moyenne des âges
INFO : Moyenne = SOMME(age) / nombre de users

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
  },{
    nom: "Durant",
    prenom: "Georges",
    age: 52
  },{
    nom: "Ololo",
    prenom: "Léa",
    age: 5
  },{
    nom: "Jeloie",
    prenom: "Théo",
    age: 12
  }
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
let moyen_age_table = [];

for(let i = 0; i < users.length; i++) {
  let user = users[i];
  
  console.log(
    `Il y a ${user.prenom} ${user.nom}, ${user.age} ans`
  );
  moyen_age_table.push(user.age);
}

let age_moyen = 0;
for(let i = 0; i < moyen_age_table.length; i++) {
  age_moyen = age_moyen + moyen_age_table[i];
  //Simplification : age_moyen += moyen_age_table[i];
}

console.log(age_moyen/ moyen_age_table.length)


/*************************** BONUS **************************/
// Intégrer le code qui créé un nouvel utilisateur

