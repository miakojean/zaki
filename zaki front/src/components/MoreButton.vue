<template>
<button>
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
:root{
    /* CSS HEX */
  --tea-green: #c6ebbeff;
  --celadon: #a9dbb8ff;
  --air-superiority-blue: #7ca5b8ff;
  --secondary--color: #38369aff;
  --resolution-blue: #1d1f91ff;
  --primary--color: #020887ff;
  --resolution-blue-2: #191e92ff;
}

i {
    color: var(--secondary--color);
    transition: color 0.3s ease; /* Animation pour un effet fluide */
}

button {
    background: none;
    color: var(--secondary--color);
    display: flex;
    align-items: center; /* Centrer verticalement */
    justify-content: center;
    gap: 0.5rem; /* Espacement entre l'icône et le texte */
    border: 1px solid #7ca5b8ff;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem; /* Ajoute un peu d'espace intérieur */
    cursor: pointer; /* Changement du curseur au survol */
    transition: background 0.3s ease, color, border, 0.3s ease; /* Transition fluide */
    max-width: 400px;
}

button:hover {
    background: var(--secondary--color);
    color: white; /* Change la couleur du texte */
}

button:hover i {
    color: white; /* Change également la couleur de l'icône */
}
</style>
