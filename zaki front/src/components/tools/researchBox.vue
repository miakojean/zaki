<template>
    <div class="Box">
        <form @submit.prevent="searchOrder" action="" class="research__box">
            <input
            :id= "id"
            :type= "type"
            placeholder="nom, numéro de commande ..."
            />
            <button type="submit"><i class="ri-search-line"></i></button>
        </form>

        <div class="result__box">
        <div v-if="loading">Chargement...</div>
        <div v-if="error" class="error">{{ error }}</div>
            <ul v-if="results.length > 0">
                <li v-for="result in results" :key="result">{{ result }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResearchBox',
    props:{
        id:{
            type: String,
            required: true,
            default: "research"
        },
        type:{
            type:String,
            required: true,
            default:"text"
        },
        placeholder:{
            type: String,
            required: true,
        },
    },
    data() {
    return {
      searchCriteria: '',
      loading: false,
      error: null,
      results: []
    };
  },
  methods: {
    async searchOrder() {
      this.loading = true;
      this.error = null;
      // Simulate an API call
      setTimeout(() => {
        if (this.searchCriteria === 'error') {
          this.error = 'An error occurred';
        } else {
          this.results = ['Order 1', 'Order 2', 'Order 3'];
        }
        this.loading = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>

.Box{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.research__box {
  position: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 1rem 0 1rem 1rem;
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
}

.ri-search-line{
  background: #058C42;
  border-radius: 50%;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}

.ri-search-line:hover{
    background: #058C42;
    color:white;
    transform: scale(1.1);
}
</style>