<template>
  <div class="Research__Box">
    <form @submit.prevent>
      <label for="Research" class="">
        <input
          id="Research"
          type="text"
          placeholder="Trouver mon produit, ex: manioc, charbon, apki."
          v-model="searchQuery"
          @input="filterResults"
          @focus="isSearching = true"
          @blur="handleBlur"
        />
        <button class="Research">
          <i class="ri-search-line"></i>
        </button>
      </label>
    </form>
    <div 
      class="result__box" 
      v-if="isSearching && filteredResults.length"
    >
      <ul>
        <li v-for="(result, index) in filteredResults" :key="index" @click="selectItem(result)">
          {{ result }}
        </li>
      </ul>
    </div>
    <div 
      class="no-results" 
      v-if="isSearching && !filteredResults.length"
    >
      Aucun résultat trouvé
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { categoriesData } from '@/data/categoriesData'; // Adjust the import path as needed

export default {
  name: 'Research',
  setup() {
    const searchQuery = ref('');
    const researchResults = ref(
      Object.values(categoriesData).flatMap(category => category.items.map(item => item.name))
    );

    const filteredResults = ref(researchResults.value.slice(0, 5)); // Initial limit to 5
    const isSearching = ref(false); // Variable to track search state

    const filterResults = () => {
      if (searchQuery.value.trim() === '') {
        filteredResults.value = researchResults.value.slice(0, 5); // Limit to 5 items
      } else {
        filteredResults.value = researchResults.value
          .filter(item =>
            item.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
          .slice(0, 5); // Limit to 5 items after filtering
      }
    };

    const handleBlur = () => {
      setTimeout(() => {
        isSearching.value = false;
      }, 200);
    };

    const selectItem = (itemName) => {
      const item = Object.values(categoriesData)
        .flatMap(category => category.items)
        .find(item => item.name === itemName);
      if (item) {
        EventBus.emit('add-to-cart', { ...item, quantity: 1 });
        searchQuery.value = '';
        filterResults();
      }
    };

    return {
      searchQuery,
      researchResults,
      filteredResults,
      isSearching,
      filterResults,
      handleBlur,
      selectItem
    };
  },
};
</script>

<style scoped>
.Research__Box{
  width: 100%
}

form{
    width: 100%;
}
label{
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid gray;
  border-radius: 1.2rem;
  cursor: pointer;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

input{
  padding: 1rem;
  border: none;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  width: 100%;
}

input:focus{
    outline: none;
}

.Research{
  background: none;
  color: #058C42;
  display:contents;
}

.Research i{
  background: #058C42;
  border-radius: 50%;
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.4s ease-in-out;
}

.Research i:hover{
    background: #16DB65;
    color:white;
    font-size: 1.2rem;
}

.result__box {
  margin-top: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.result__box ul {
  list-style: none;
  padding: 0;
}

.result__box li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eaeaea;
}

.result__box li:last-child {
  border-bottom: none;
}

.no-results {
  margin-top: 1rem;
  color: #888;
  text-align: center;
}

@media (min-width: 768px) {
    label{
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 1024px) {
    label{
        display: flex;
        justify-content: space-between;
    }
}
</style>