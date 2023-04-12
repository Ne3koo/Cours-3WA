new Vue({
    el: '#app',
    data: {
        scores: [12, 45, 23, 1, 8]
    },
    template: `<div>
      Scores :
      <ul>
        <li v-for="s of scores">{{ s }}</li>
      </ul>
    </div>`,
});
