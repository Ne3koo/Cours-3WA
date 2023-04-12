/**************************************************************/
/*                         Consignes                          */
/**************************************************************/
/*

L'objectif de cet exercice est de réaliser les composants
nécessaires au fonctionnement de la vue ci-dessous.

*/
/**************************************************************/
/*                            La Vue                          */
/**************************************************************/

// Ajouter le code nécéssaire pour implémenter les consignes.
// Ne rien modifier dans le code ci-dessous, seulement ajouter ce qui est nécéssaire.

new Vue({
  el: '#app',
  data: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  template: `
    <div class="container">
      <Header title="Welcome !" />
      <Main>
        <p>{{ content }}</p>
      </Main>
      <Footer copyright="Nevezide 2022" />
    </div>
  `,
});
