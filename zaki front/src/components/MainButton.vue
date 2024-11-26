<template>
  <button class="MainButton" type="submit">{{ label }} 
    <i v-if="icon" class="ri-arrow-right-line"></i>
  </button>
</template>

<script>
export default {
  props: {
    label: {
    type: String,
    default: "Souscrire", // Texte par défaut
    },
    icon: {
      type:String,
      default:null, // Pas d'icone par défaut
    },
  },
}
</script>

<style>
.MainButton{
  padding: 1rem;
  width: 100%;
  max-width: 400px;
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