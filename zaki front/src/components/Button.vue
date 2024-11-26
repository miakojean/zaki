<template>
  <button type="submit">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
    type: String,
    default: "Trouver", // Texte par défaut
    },
},
}
</script>

<style>
button{
  cursor: pointer;
  font-size: 1rem;
  background: #191e92ff;
  color: white;
  border: none;
  border-radius: 1rem;
  font-weight: 500;
  padding: 0.8rem;
  transition: 0.4s ease-out;
}

button:hover{
    background: #38369aff;
}
</style>