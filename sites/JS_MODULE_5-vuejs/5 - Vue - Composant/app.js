// Découpage en composant

import Header from './components/Header.js';

new Vue({
  el: '#app',
  components: {
    Header,
  },
  template: `<Header title="Welcome todos !">
    <span>Facebook</span>
    <span>Tweeter</span>
  </Header>`,
});
