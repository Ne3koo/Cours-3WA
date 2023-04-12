
new Vue({
  el: '#app',
  data: {
    tasks: [
      { description: 'Faire des courses', done: true },
      { description: 'Reviser', done: false },
      { description: 'Lire mes emails', done: false },
      { description: 'Faire le menage', done: true },
    ],
  },
  computed: {
      doneTasks() {
          return this.tasks.filter(task => task.done);
      },
      undoneTasks() {
          return this.tasks.filter(task => !task.done);
      }
  },
  template: `
    <div>
      <h2>Tâches terminées</h2>
      <ul>
        <li v-for="task in doneTasks">
          {{ task.description }}
        </li>
      </ul>
      <h2>Tâches non terminées</h2>
      <ul>
        <li v-for="task in undoneTasks">
          {{ task.description }}
        </li>
      </ul>
    </div>
  `,
});
