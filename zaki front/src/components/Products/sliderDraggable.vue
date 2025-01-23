<template>
  <div class="slider-container">
    <i class="ri-arrow-left-s-line" @click="slideLeft"></i>

    <ul class="slider" ref="slider">
      <li v-for="category in categories" 
        :key="category.id"
        @click="redirect(category)">
        <router-link to="/{{ category.name }}">{{ category.r_name }}</router-link>
      </li>
    </ul>

    <i class="ri-arrow-right-s-line" @click="sliderRight"></i>
  </div>
</template>

<script>
import { categoriesData } from '@/data/categoriesData';

export default { 
  data(){
    return{
      categories:categoriesData
    }
  },
  methods:{
    slideLeft(){
      const slider = this.$refs.slider;
      slider.scrollLeft -= slider.clientWidth;
    },
    sliderRight(){
      const slider = this.$refs.slider;
      slider.scrollLeft += slider.clientWidth;
    }, 
    redirect(category) {
      if (!category) {
        console.error('La catégorie est introuvable.');
        return;
      }

      // Utilisation de Vue Router pour rediriger vers la route dynamique
      this.$router.push({ 
        name: 'categories', 
        params: { category: category.name } 
      });
    },

  },

}
</script>

<style scoped>
.slider-container{
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*border: 1px solid gray;*/
  border-radius: 12px;
}

.slider{
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  transition: scroll-left 1s ease-in-out; /* Add transition effect */
}

li{
  font-size: 0.8rem;
  background: #058C42;
  padding: 0.5rem;
  border-radius: 0.9rem;
  color: #f3f3f3;
  max-width: 250px;
  max-height: 30px;
  display: flex;
  align-items: center; /* Centre le contenu verticalement */
  justify-content: center; /* Centre le contenu horizontalement */
  white-space: nowrap; /* Empêche le retour à la ligne */
  text-overflow: ellipsis; /* Ajoute "..." si le texte dépasse */
  cursor: pointer;
}

i{
  color: #058C42;
  cursor: pointer;
  font-size: 2rem;
}

a{
  text-decoration: none;
  color: #f3f3f3;
}

@media (min-width: 768px) {

  .slider{
    max-width: 550px;
  }
}

@media (min-width: 1024px) {
  .slider{
    max-width: 750px;
  }
}

@media (min-width: 1920px) {
  .slider{
    max-width: 1024px;
  }
}
</style>