<template>
  <button @click="acheter" class="MainButton" type="submit">
    {{ label }}
    <i v-if="icon" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Souscrire" // Texte par défaut
    },
    icon: {
      type: String, // Classe d'icône comme chaîne
      default: null // Pas d'icône par défaut
    }
  },
  methods: {
    acheter() {
      console.log("Vous avez cliqué sur acheter");
    }
  }
};
</script>

<style>
.MainButton{
  padding: 1rem;
  width: 100%;
  background: #058C42;
  border-radius: 1rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s ease-out;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  max-width: 300px;
}
.MainButton:hover{
  background: #21aa58;
}

/* Media Queries */
@media (min-width: 768px) {
    
}

@media (min-width: 1024px) {
  
}
</style>