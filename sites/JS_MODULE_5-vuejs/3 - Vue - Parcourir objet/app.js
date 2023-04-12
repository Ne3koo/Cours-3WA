new Vue({
    el: '#app',
    data: {
        user: {
            name: 'VALLEE',
            firstName: 'Fabrice',
        }
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
        <tr>
          <td v-for="item in user">{{ item }}</td>
        </tr>
      </tbody>
    </table>`,
});
