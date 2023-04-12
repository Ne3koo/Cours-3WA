
export default ({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  `,
});
