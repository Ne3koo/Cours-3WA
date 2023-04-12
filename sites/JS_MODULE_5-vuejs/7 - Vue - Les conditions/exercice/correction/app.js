
new Vue({
  el: '#app',
  data: {
    nom: '',
    prenom: '',
  },
  template: `
    <form>
      <span v-if="nom === ''">Le champ nom est vide</span><br />
      <label for="name">Nom</label><br />
      <input id="name" type="text" v-model="nom" /><br />
      <br />

      <span v-if="prenom === ''">Le champ prénom est vide</span><br />
      <label for="firstName">Prénom</label><br />
      <input id="firstName" type="text" v-model="prenom" /><br />
      <br />

      <button type="submit" v-if="nom !== '' && prenom !== ''">Submit</button>
    </form>
  `,
});
