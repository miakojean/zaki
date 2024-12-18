<template>
  <div class="order__section">
    <research />
  </div>
</template>

<script>
import ResearchPage from '@/views/ResearchPage.vue';
import Research from '../Research.vue';

export default {
    components: {
        ResearchPage,
        Research,
    }
}
</script>

<style scoped>

.order__section{
    padding: 4rem 1rem 1rem 1rem;
    height: 100vh;
}

</style>