<template>
  <section class="category-details">
    <NavBar />
    <div v-if="category">
      <sliderDraggable/>
      <header class="section__header">
        <h1>{{ category.r_name }}</h1>
        <p>{{ category.description }}</p>
      </header>
      <div class="custom-head-divider"></div>
      <div class="custom-head-divider"></div>
      <div class="card___container">
        <img :src="category.image" :alt="`Image de ${category.name}`" class="category-image" />
        <div class="cards">
          <h4>Produits disponibles</h4>
          <ul >
            <li v-for="(item, index) in category.items" 
              :key="index" class="food__items"
            >
              {{ typeof item === 'object' ? item.name : item }}
              <span> 
                <ConfirmView
                :itemName="typeof item === 'object' ? 
                item.name : item" 
                :onConfirm="() => logItem(item)"/> 
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Catégorie non trouvée. <router-link to="/">Retour à l'accueil</router-link></p>
    </div>
  </section>
</template>

<script>
import { categoriesData } from '@/data/categoriesData';
import NavBar from '../Landing/NavBar.vue';
import ComponentCart from '../ComponentCart.vue';
import ConfirmView from '../Order/ConfirmView.vue';
import { EventBus } from '@/data/eventBus';
import SliderDraggable from './sliderDraggable.vue';

export default {
  name: 'CategoryDetails',
  data() {
    return {
      category: null,
      clickedItems: [],
    };
  },
  components:{
    NavBar,
    ComponentCart,
    ConfirmView,
    SliderDraggable,
  },
  mounted() {
    const categoryKey = this.$route.params.category;
    this.category = categoriesData[categoryKey] || null;

    // Redirection si la catégorie n'existe pas
    if (!this.category) {
      this.$router.push('/not-found');
    }
  },
  methods: {
    logItem(item){
      this.clickedItems.push(item);
      EventBus.emit('add-to-cart', item); /* Je declenche un évènement nommé 'add-to-cart' puis je passe un objet item en tant que donnée associée à l'évènement */
    },
  },
  
};
</script>


<style scoped>

section{
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.section__header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}

.card___container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.cards{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0.5rem;
}

img{
  background-size: cover;
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
}

.item__group{
  line-height: 2;
}

ul{
  list-style: none;
  padding: 0;
  line-height:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: none;
  overflow-y: auto;

}

.food__items{
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  white-space: nowrap;
  width: 100%;
}

span {
  color: #04471C;
  font-weight: 700;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  gap: 1rem;
  max-width: 400px;
}

.items__list{
  border-top: 1px solid #058C42;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.items__list i{
  color: #058C42;
}

.categories{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Divider */
.custom-divider {
    width: 100%; /* La ligne occupe toute la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: linear-gradient(to right, #345511, #6c757d); /* Dégradé pour un effet stylé */
    margin: 2rem 0; /* Espace autour de la ligne */
}

.custom-divider-none {
    width: 100%; /* La ligne occupe toute la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: none; /* Dégradé pour un effet stylé */
    margin: 2rem 0; /* Espace autour de la ligne */
}

@media (min-width: 768px) {

  .card___container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: normal;
    gap: 3rem;
    
  }
  .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  img{
    background-size: cover;
    max-width: 350px;
    max-height: 350px;
    border-radius: 10px;
  }
  ul{
    padding-top: 1rem;
    max-height: 90vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .food__items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  span {
  color: #04471C;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  gap: 1rem;
  max-width: 400px;
  }
    
}

@media (min-width: 1024px) {

  .card___container{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 1rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
    gap: 1rem;
    padding: 0.5rem;
  }
  img{
    background-size: cover;
    max-width: 320px;
    max-height: 320px;
    border-radius: 10px;
  }
  ul{
    max-height: 90vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .food__items{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
}

@media (min-width: 1920px) {
  .card___container{
    display: grid;
    grid-template-columns: 1fr 1fr ;
  }
  .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
    gap: 1rem;
    padding: 0.5rem;
    
  }
  img{
    background-size: cover;
    max-width: 400px;
    max-height: 400px;
    border-radius: 10px;
  }
  ul{
    padding-top: 1rem;
    padding: 0.5rem;
    max-height: 90vh;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  .food__items{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
}
</style>