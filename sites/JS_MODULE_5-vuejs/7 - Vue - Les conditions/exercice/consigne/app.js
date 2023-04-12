/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de gérer l'affichage des messages d'erreurs
et du bouton de validation du formulaire.

TODO
1. Afficher les messages "Le champ xxx est vide"
uniquement si le champ correspondant est vide
2. Afficher le bouton du formulaire uniquement si tous les champs sont remplis

*/
/**************************************************************/
/*                          La vue                            */
/**************************************************************/

new Vue({
  el: '#app',
  data: {
    nom: '',
    prenom: '',
  },
  template: `
    <form>
      <span>Le champ nom est vide</span><br />
      <label for="name">Nom</label><br />
      <input id="name" type="text" /><br />
      <br />

      <span>Le champ prénom est vide</span><br />
      <label for="firstName">Prénom</label><br />
      <input id="firstName" type="text" /><br />
      <br />

      <button type="submit">Submit</button>
    </form>
  `,
});
