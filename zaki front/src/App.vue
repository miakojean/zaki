<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './views/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
  },
};
</script>

<style>
#app{
  padding:1rem
}
</style>