<template>
  <section>
    <NavBar />
    <h1>Catégories</h1>
    <ul>
      <li v-for="(category, key) in categories" :key="key">
        <router-link :to="{ name: 'categories', params: { category: key } }">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import NavBar from '../Landing/NavBar.vue';
import { categoriesData } from '@/data/categoriesData';

export default {
    components:{
        NavBar,
    },
    name: 'CategoryList',
  data() {
    return {
      categories: categoriesData,
    };
  },
}
</script>

<style>

</style>
  