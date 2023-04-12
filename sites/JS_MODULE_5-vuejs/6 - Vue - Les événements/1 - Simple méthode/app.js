
// Une méthode avec paramètres

new Vue({
  el: '#app',
  methods: {
    showMessage(message) {
      alert(message);
    }
  },
  template: `
    <div>
      <button v-on:click="showMessage('Plop !')">Show message</button>
    </div>
  `,
});
