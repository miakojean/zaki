<template>
  <button> Découvrir <i class="ri-arrow-right-line"></i> </button>
</template>

<script>
export default {

}
</script>

<style>
i {
    color: #345511ff;
    transition: color 0.3s ease; /* Animation pour un effet fluide */
}

button {
    background: none;
    color: #345511ff;
    display: flex;
    align-items: center; /* Centrer verticalement */
    justify-content: center;
    gap: 0.5rem; /* Espacement entre l'icône et le texte */
    border: 1px solid #345511ff;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem; /* Ajoute un peu d'espace intérieur */
    cursor: pointer; /* Changement du curseur au survol */
    transition: background 0.3s ease, color, border, 0.3s ease; /* Transition fluide */
}

button:hover {
    background: #345511ff;
    color: white; /* Change la couleur du texte */
}

button:hover i {
    color: white; /* Change également la couleur de l'icône */
}
</style>