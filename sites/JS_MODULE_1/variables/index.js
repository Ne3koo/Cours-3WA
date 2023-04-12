// Une constante
const TITI = 'J adore';

// Une variable
let toto = 'Trop cool';

/************** Passage par valeur ****************
Dans la mémoire d'ordinateur, une variable est composée de deux éléments
- Une adresse mémoire 
Là où se trouve la variable dans l'immense mémoire (comme une adresse postale dans une ville)
- Une valeur
Le contenu de la variable (ici 'Trop cool')

Lorsqu'on veut passer quelque chose d'une variable à l'autre,
L'ordinateur peut s'y prendre de deux manières :
- Passer la valeur (le contenu de la variable)
OU
- Passer la réfénrece (l'adresse mémoire)

Dans le cas de Javascript :
*/
/*
- Lorsque le contenu est un type de base (nombre, chaîne, booléen)
Javascript passe la valeur
*/
let a = "toto";

let b = a;
// Javascript va passer le contenu "toto" à b
// il fait une copie du contenu de a dans b.

// Ainsi, si je modifie le contenu de b,
// le contenu de a n'est pas modifié

b = "titi";

console.log(a);// Affiche "toto"
console.log(b);// Affiche "titi"

/*
- Lorsque le contenu est un type complexe (objet, tableau)
Javascript passe la référence (l'adresse mémoire)
*/

a = {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
};

b = a;

// Ainsi, si je modifie le contenu de b,
// le contenu de a est aussi modifié car c'est le même

b.age = 99;

console.log(b);// age = 99
console.log(a);// age = 99 (a a été aussi modifié)

/* Du coup, si je veux faire une copie de l'objet a dans b */
a = {
    nom: "Dupont",
    prenom: "Toto",
    age: 37
};

b = Object.assign({}, a);

console.log(b);// age = 99
console.log(a);// age = 37
