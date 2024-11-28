<template>
  <div id="app">
    <router-view> </router-view> <!-- Vue Router injecte ici la vue active -->
  </div>
</template>

<script>
import LandingPage from './views/LandingPage.vue';
import ResearchPage from './views/ResearchPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    ResearchPage
  },
};
</script>

<style>
#app{
  padding:1rem
}
</style>