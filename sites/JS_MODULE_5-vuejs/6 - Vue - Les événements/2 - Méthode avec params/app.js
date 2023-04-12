
// Une simple méthode

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !',
  },
  methods: {
    showMessage() {
      alert(this.message);
    }
  },
  template: `
    <div>
      <button v-on:click="showMessage">Show message</button>
    </div>
  `,
});
