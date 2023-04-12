
// Dans le contexte d'une itération

new Vue({
  el: '#app',
  data: {
    prices: [10, 20, 30],
  },
  methods: {
    remove(price) {
      this.prices.splice(this.prices.indexOf(price), 1);
    }
  },
  template: `
    <div>
      <table>
        <tr v-for="price in prices" v-on:click="remove(price)">
          <td>{{ price }}</td>
        </tr>
      </table>
    </div>
  `,
});
