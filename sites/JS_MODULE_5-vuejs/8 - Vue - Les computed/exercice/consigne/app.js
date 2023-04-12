/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est d'afficher les salaires d'une équipe technique
avec le total et la moyenne des salaires.

TODO
1. Afficher les salaires de l'équipe
2. Afficher le total des salaires
3. Afficher la moyenne des salaires

*/
/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  // DO NOT EDIT data
  data: {
    salaires: [{
        poste: 'Ingénieur développement junior',
        salaire: 38000,
        nombre: 6,
      },
      {
        poste: 'Lead développeur',
        salaire: 50000,
        nombre: 2,
      },
      {
        poste: 'Designer UX-UI',
        salaire: 30000,
        nombre: 1,
      },
      {
        poste: 'Product Manager',
        salaire: 43000,
        nombre: 1,
      },
      {
        poste: 'Manager technique',
        salaire: 70000,
        nombre: 1,
      },
    ],
  },
  computed: {
    total: function() {
      let total = 0;

      for (let i = 0; i < this.salaires.length; i++) {
        let salaireObjet = this.salaires[i];
        total = total + salaireObjet.salaire * salaireObjet.nombre;
      }

      return total;
    },
    moyenne: function() {
      let nbrePostes = 0;

      this.salaires.forEach((salaire) => {
        nbrePostes += salaire.nombre;
      });

      return this.total / nbrePostes;
    },
  },
  template: `
    <table>
      <thead>
        <tr>
          <th>Poste</th>
          <th>Salaire</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="salaire in salaires">
          <td>{{ salaire.poste }}</td>
          <td>{{ salaire.salaire }}€</td>
          <td>{{ salaire.nombre }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td>{{ total }}€</td>
        </tr>
        <tr>
          <td colspan="2">Moyenne</td>
          <td>{{ moyenne.toFixed(2) }}€</td>
        </tr>
      </tfoot>
    </table>
  `,
});
