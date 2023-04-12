<template>
  <div class="container">{{ message }}</div>
</template>

<style scoped>
  .container {
    color: blue;
    font-size: 2rem;
    font-weight: bold;
  }
</style>

<script>
  export default {
    name: 'App',
    data() {
      return {
        message: 'Hello Vue!',
      }
    },
  }
</script>
