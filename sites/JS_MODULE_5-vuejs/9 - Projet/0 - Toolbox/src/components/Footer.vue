<template>
  <div class="footer">
    <span>&copy; {{ copyright }}</span>
  </div>
</template>

<style scoped>
  .footer {
    width: 100%;
    padding: 1em;
    text-align: center;
    background-color: #00FDC8;
    box-shadow: 0 -0.25em 0.25em rgba(0, 0, 0, 0.1);
  }
</style>

<script>
  export default ({
    name: 'Footer',
    props: {
      copyright: {
        type: String,
        required: true,
      },
    },
  });
</script>
