<template>
  <div class="order__section">
    <NavBar />
    <header>
      <h4>
        Suivre ma commande
      </h4>
      <p>
        Ci-dessous obtenez toutes les informations sur votre commande
      </p>
    </header>
    <form @submit.prevent="searchOrder" action="" class="research__box">
      <input
      id="searchCriteria"
      type="text"
      placeholder="nom, numéro de commande ..."
      v-model="searchCriteria"
      />
      <button type="submit"><i class="ri-search-line"></i></button>
    </form>
    <Loading  v-if="loading"/>
    <div v-if="error" class="error">{{ error }}</div>
    
    <div class="results__box" v-if="results.length > 0">
      <div class="clients__info" v-for="order in results" :key="order.invoice_number">
        <h3>Informations personnelles</h3>
        <p>Votre nom: {{ order.user_name }}</p>
        <p>Numéro de commande: {{  order.invoice_number }} </p>
      </div>
      <div class="custom-divider"></div>
      
      <div class="clients__info" v-for="order in results" :key="order.invoice_number">
        <h3>Vos produits</h3>
        <ul>
          <li v-for="item in order.items" :key="item.product">
            <div class="products__info">
              <p>Produits: {{ item.product }}</p>
              <p>Quantité: {{ item.quantity }}</p>
              <p>Prix: {{ item.total_price }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="custom-divider"></div>

      <div class="clients__info" v-for="order in results" :key="order.invoice_number">
        <h3>Informations financières</h3>
        <p>Montant à payer: {{ order.total_price }} FCFA</p>
        <p>Méthode de paiement: {{ order.paiement_method }}</p>
      </div>

      <div class="custom-divider"></div>

      <div class="clients__info" v-for="order in results" :key="order.invoice_number">
        <span> {{ order.status }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ResearchPage from '@/views/ResearchPage.vue';
import Research from '../Research.vue';
import NavBar from '../Landing/NavBar.vue';
import axios from 'axios';
import Loading from '../tools/Loading.vue';

export default {
  components: {
    ResearchPage,
    Research,
    NavBar,
    Loading
  },
  data() {
    return {
      searchCriteria: '', // Critère de recherche entré par l'utilisateur
      results: [], // Résultats de l'API
      loading: false, // Indique si la requête est en cours
      error: null, // Erreurs éventuelles
    };
  },
  methods: {
    async searchOrder() {
      this.loading = true;
      this.error = null;
      this.results = [];
      try {
        // Effectuer la requête POST à l'API
        const response = await axios.post('http://127.0.0.1:8000/zakiapi/orders/search/', {
          invoice_number: this.searchCriteria, // Envoyer le critère de recherche
        });
        this.results = response.data; // Assigner les résultats retournés par l'API
      } catch (err) {
        // Gérer les erreurs
        this.error =
          err.response?.data?.message || 'Une erreur est survenue lors de la recherche.';
      } finally {
        this.loading = false; // Terminer le chargement
      }
    },
  },
};

</script>

<style scoped>

.custom-divider {
  width: 100%; /* La ligne occupe toute la largeur */
  height: 2px; /* Épaisseur de la ligne */
  background: linear-gradient(to right, #345511, #6c757d); /* Dégradé pour un effet stylé */
  margin: 1rem 0; /* Espace autour de la ligne */
}

.custom-divider-none {
  width: 100%; /* La ligne occupe toute la largeur */
  height: 2px; /* Épaisseur de la ligne */
  background: none; /* Dégradé pour un effet stylé */
  margin: 1rem 0; /* Espace autour de la ligne */
}

.order__section{
  padding: 4rem 1rem 1rem 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

header{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.research__box {
  position: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 1rem;

}

input {
  width: 90%;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
}

button{
  width:20%;
  background: none;
  padding: 0;
  display: flex;
  justify-content: end;
}

button .ri-search-line{
  background: #058C42;
  border-radius: 50%;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}

button .ri-search-line:hover{
  background: #058C42;
  color:white;
  transform: scale(1.1);
}

.results__box{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 1rem;
}

ul{
  width: 100%;
}

.clients__info{
  display: flex;
  flex-direction: column;
  align-items: flex-start
}

.products__info{
  display: flex;
  justify-content: space-between;
}

span{
  width: auto;
  padding: 0.5rem;
  background: #058C42;
  color: #f3f3f3;
  border-radius: 1rem;

}
</style>