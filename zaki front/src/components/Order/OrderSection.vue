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
    <ResearchBox 
      v-model="searchCriteria"
      placeholder="nom, numéro de commande"
      type="Text"
      id="research"
    />
    <form @submit.prevent="searchOrder">
      <label for="searchCriteria">Critère de recherche :</label>
      <input
        v-model="searchCriteria"
        id="searchCriteria"
        type="text"
        placeholder="Numéro de commande ou nom"
      />
      <button type="submit">Rechercher</button>
    </form>
    <div v-if="loading">Chargement...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="results.length > 0" class="results">
      <h5>Résultats de la recherche :</h5>
      <ul>
        <li v-for="order in results" :key="order.invoice_number">
          <p>Numéro de commande : {{ order.invoice_number }}</p>
          <p>Nom de l'utilisateur : {{ order.user_name }}</p>
          <p>Statut : {{ order.status }}</p>
          <p>Méthode de paiement : {{ order.paiement_method }}</p>
          <p>Total : {{ order.total_price }} FCFA</p>
          <ul>
            <li v-for="item in order.items" :key="item.product">
              Produit : {{ item.product }}, Quantité : {{ item.quantity }}, Prix total : {{ item.total_price }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ResearchPage from '@/views/ResearchPage.vue';
import Research from '../Research.vue';
import NavBar from '../Landing/NavBar.vue';
import ResearchBox from '../tools/researchBox.vue';
import axios from 'axios';

export default {
  components: {
    ResearchPage,
    Research,
    NavBar,
    ResearchBox
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

</style>