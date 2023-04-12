new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        titrePage: '<h1>Bonjour !</h1>'
    },
    template: `<form>
      <div v-html="titrePage"></div>
      <p v-text="message">{{ message }}</p>
      <input id="message" type="text" v-model="message" />
    </form>`,
});
