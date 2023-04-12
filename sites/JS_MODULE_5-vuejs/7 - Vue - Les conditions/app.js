// If ... Else If ... Else
new Vue({
    el: '#app',
    data: {
        message: '',
    },
    template: `
    <div>
      <input type="text" v-model="message" />
      <span v-if="message === 'toto'">C'est toto</span>
      <button v-else-if="message !== ''">Show message</button>
      <span v-else>Please enter a message</span>
    </div>
  `,
});
