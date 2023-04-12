export default ({
  name: 'Header',
  props: ['title'],
  template: `
    <div class="header">
      <slot></slot>
      <h1>{{ title }}</h1>
    </div>
  `,
});
