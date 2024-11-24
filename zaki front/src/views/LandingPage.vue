<template>
    <div class="landing-page">
        <NavBar />
        <Header />
        <PageSection />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';
import PageSection from '@/components/PageSection.vue';

export default {
    components: {
        NavBar,
        Header,
        PageSection
    },
};
</script>

<style>

</style>
