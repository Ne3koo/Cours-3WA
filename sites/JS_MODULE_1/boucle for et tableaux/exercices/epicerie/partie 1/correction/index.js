/**************************************************************/
/*                            Data                            */
/**************************************************************/

const articles = [
  'Chips',
  'Saucisson',
  'Glace',
  'Fraises',
  'Vin',
  'Sucre',
  'Bière',
  'Mouchoirs'
];

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

// Afficher la liste des articles disponibles
console.log(articles);

// Demander au client quel article il veut acheter
let articleVoulu = prompt('Quel article voulez-vous acheter ?')

// Vérifier si l'article est disponible en recherchant sa position dans la liste
let i;
for(i = 0; i < articles.length ; i++) {
  if(articles[i] === articleVoulu) {
    break;
  }
}

// Est-ce que l'article est disponible ?
if (i < articles.length) {
  // OUI
  // Afficher "Ok"
  console.log('ok');
  // Remplacer l'article par une chaine vide '' dans le tableau
  articles[i] = '';
} else {
  // NON
  // Afficher 'Article indisponible...'
  console.log('Article indisponible...');
}

// Afficher à nouveau la liste des articles disponibles
console.log(articles);
