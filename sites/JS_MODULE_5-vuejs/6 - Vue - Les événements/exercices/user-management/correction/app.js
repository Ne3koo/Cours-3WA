/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de gérer une liste d'utilisateurs.

TODO
1. Ajouter au-dessus du tableau un bouton "Ajouter un utilisateur"
Lorsqu'on clique sur ce bouton, on ajoute un utilisateur à la fin de la liste.

2. Lorsqu'on clique sur un utilisateur dans le tableau, il est supprimé de la liste.

*/

/**************************************************************/
/*                          La vue                            */
/**************************************************************/

// Modifier le code ci-dessous pour implémenter les consignes

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
  methods: {
    addItem() {
      this.users.push(this.userToAdd);
    },
    removeItem(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  template: `
    <div>
      <button v-on:click="addItem()">Ajouter un utilisateur</button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user of users" v-on:click="removeItem(user)">
            <td>{{ user.name }}</td>
            <td>{{ user.firstName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});
