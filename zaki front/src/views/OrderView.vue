<template>
  <div>
    <NavBar />
    <OrderSection />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from '@/components/Landing/FooterSection.vue';
import NavBar from '@/components/Landing/NavBar.vue';
import OrderSection from '@/components/Order/OrderSection.vue';

export default {

    components:{
        NavBar,
        OrderSection,
        FooterSection,
    }
}
</script>

<style>

</style>