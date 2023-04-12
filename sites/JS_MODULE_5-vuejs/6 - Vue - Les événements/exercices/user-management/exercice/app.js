/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de gérer une liste d'utilisateurs.

TODO
1. Ajouter au-dessus du tableau un bouton "Ajouter un utilisateur"
Lorsqu'on clique sur ce bouton, on ajoute un utilisateur à la fin de la liste.
Cet utilisateur se trouve dans la variable userToAdd.

2. Lorsqu'on clique sur un utilisateur dans le tableau, il est supprimé de la liste.

*/

/**************************************************************/
/*                          La vue                            */
/**************************************************************/

// Ajouter le code nécéssaire pour implémenter les consignes.
// Ne rien modifier dans le code ci-dessous, seulement ajouter ce qui est nécéssaire.

new Vue({
  el: '#app',
  data: {
    userToAdd: {
      name: 'DURAND',
      firstName: 'Jacques',
    },
    users: [
      {
        name: 'VALLEE',
        firstName: 'Fabrice',
      },
      {
        name: 'DUPONT',
        firstName: 'Jean',
      },
      {
        name: 'VALLA',
        firstName: 'Pierre',
      },
    ]
  },
  template: `
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user of users">
            <td>{{ user.name }}</td>
            <td>{{ user.firstName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});
