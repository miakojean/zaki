<template>
<button class="ButtonMore">
    {{ label }} <i class="ri-arrow-right-line"></i>
</button>
</template>
  
<script>
export default {
props: {
    label: {
    type: String,
    default: "Découvrir", // Texte par défaut
    },
},
};
</script>
  
<style>
.ButtonMore{
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    border: 1px solid #058C42;
    background: none;
    color: #058C42;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
}

.ButtonMore i{
    font-size: 1.5rem;
    font-weight: 700;
}
</style>
