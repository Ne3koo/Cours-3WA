
export default ({
  name: 'Footer',
  props: {
    copyright: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="footer">
      <span>&copy; {{ copyright }}</span>
    </div>
  `,
});
