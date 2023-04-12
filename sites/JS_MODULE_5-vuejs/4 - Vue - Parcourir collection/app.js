
new Vue({
  el: '#app',
  data: {
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
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items of users">
          <td v-for="item in items">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  `,
});
