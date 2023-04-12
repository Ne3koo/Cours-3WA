/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

L'objectif est de générer une page web à partir d'un modèle HTML.
(à la manière des modèles de documents de Word).
Ce type de pratique est très utilisée pour générer des pages web
et / ou des emails personnalisées par les données propres au client.

TODO
- Dans template, remplacer les tags {{...}} par le contenu de data :
  - {{title}} par le champ title de data
  - {{text}} par le champ text de data

- Pour effectuer le remplacement, utiiser la méthode
   template.replaceAll(
     <chaine à remplacer>,
     <chaine de substitution>
   )

- Afficher le résultat

*/
/**************************************************************/
/*                            Data                            */
/**************************************************************/

// DO NOT EDIT

const template = '\
  <html>\n\
    <head>\n\
      <title>{{title}}</title>\n\
    </head>\n\
    <body>\n\
      <h1>{{title}}</h1>\n\
      <p>{{text}}</p>\n\
    </body>\n\
  </html>'
;

const data = {
  title: 'My page',
  text: 'This is my page'
};

// Afficher le contenu de l'objet data
for(let key in data) {
    console.log(key + ':' + data[key]);
}

/**************************************************************/
/*                        Main Program                        */
/**************************************************************/
// Première méthode pour générer le template
let html = template.replaceAll('{{title}}', data.title);
html = html.replaceAll('{{text}}', data.text);

console.log(html);

// Seconde méthode : Variante avec code plus propre
let html2 = template
  .replaceAll('{{title}}', data.title)
  .replaceAll('{{text}}', data.text);

console.log(html2);

// Troisième méthode : Variante automatisée, moteur de template
let html3 = template;
for(let key in data) {
    html3 = html3.replaceAll(
        '{{' + key + '}}',
        data[key]
    );
}

console.log(html3);

/*************************** BONUS ***************************/
// Générer un template pour chaque objet :

let collection = [{
  title: 'My page',
  text: 'This is my page'
},{
  title: 'BLog de Lucie',
  text: 'Lorem ipsum toto'
},{
  title: '3WAcademy',
  text: 'Coucou !'
}];

// Première méthode

for(let i = 0 ; i < collection.length; i++) {
    let newTemplate = template
      .replaceAll('{{title}}', collection[i].title)
      .replaceAll('{{text}}', collection[i].text);
    console.log(newTemplate);
}


// Seconde méthode : Version automatisée, générateur de newsletters

for(let i = 0 ; i < collection.length; i++) {
    let newTemplate    = template;
    let collectionItem = collection[i];
    for(let key in data) {
        newTemplate = newTemplate.replaceAll(
            '{{' + key + '}}',
            collectionItem[key]
        );
    }
    console.log(newTemplate);
}
