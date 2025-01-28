<template>
    <div>
      <NavBar />
      <NewSection />
      <FooterSection />
    </div>
  </template>
  
<script>
import FooterSection from '@/components/Landing/FooterSection.vue';
import NavBar from '@/components/Landing/NavBar.vue';
import NewSection from '@/components/Newsletter/NewSection.vue';
import OrderSection from '@/components/Order/OrderSection.vue';

export default {

    components:{
        NavBar,
        OrderSection,
        FooterSection,
        NewSection
    }
}
</script>
  
  <style>
  
  </style>