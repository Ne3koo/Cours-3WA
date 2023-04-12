/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de réaliser un compteur de clics.

*/
/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  data: {
    compteur: 0,
  },
  methods: {
    incrementeCompteur() {
      this.compteur++;
    },
    resetCompteur() {
      this.compteur = 0;
    }
  },
  template: `
    <div>
      <button v-on:click="incrementeCompteur">Cliques sur moi</button>
      <p>{{ compteur }} clics</p>
      <button v-on:click="resetCompteur">Reset</button>
    </div>
  `,
});
