import { createApp } from 'vue/dist/vue.esm-bundler';

let app = createApp({
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  template: `<div>{{ message }}</div>`,
});

app.mount('#app');
