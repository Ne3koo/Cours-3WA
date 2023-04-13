<template>
  <div class="container">
    <Header title="Welcome !" />
    <Main>
      <p>{{ content }}</p>
    </Main>
    <Footer copyright="Nevezide 2022" />
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
</style>

<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';

  export default {
    data() {
      return {
        tasks: [{
          description: 'Faire le ménage'
        },{
          description: 'Apprendre Vue'
        },{
          description: 'Faire un projet'
        }]
      };
    },
    components: {
      Header,
      Main,
      Footer,
    },
  }
</script>
