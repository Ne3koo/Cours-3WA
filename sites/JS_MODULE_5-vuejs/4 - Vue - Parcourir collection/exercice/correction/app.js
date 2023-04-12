/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est d'afficher la liste d'articles
dans un tableau HTML

*/
/**************************************************************/
/*                    !!! DO NOT EDIT !!!                     */
/**************************************************************/

// !!! DO NOT EDIT !!!

let articles = [{
  name: 'Pantalon bleu',
  price: '100',
  quantity: 12
},{
  name: 'Pull over rouge',
  price: '75',
  quantity: 120
},{
  name: 'Chemise à carreaux',
  price: '35',
  quantity: 15
}];

/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  data: {
    articles
  }, 
  template: `
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Quantité</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article of articles">
          <td>{{ article.name }}</td>
          <td>{{ article.price }}</td>
          <td>{{ article.quantity }}</td>
        </tr>
      </tbody>
    </table>
  `,
});
