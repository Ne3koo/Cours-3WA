<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
  .header {
    width: 100%;
    padding: 1em;
    text-align: center;
    background-color: #00FDC8;
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
  }
</style>

<script>
  export default ({
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  });
</script>
