<template>
    <div class="input__group">
        <label :for="id">{{ label }}</label>
        <input
        :type="type"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        />
    </div>
</template>
  

<script>
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true, // Le label est obligatoire
    },
    type: {
      type: String,
      default: "text", // Par défaut, c'est un champ texte
    },
    name: {
      type: String,
      required: true, // Le name est obligatoire pour les formulaires
    },
    id: {
      type: String,
      required: true, // L'id est obligatoire pour lier au label
    },
    placeholder: {
      type: String,
      default: "", // Pas de placeholder par défaut
    },
    value: {
      type: String,
      default: "", // La valeur initiale est vide
    },
  },
};
</script>


<style scoped>
.input__group{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

label{
    text-align: left;
    width: 100%;
    max-width: 400px;
}

.input__group input[type = 'text'],
input[type = 'password'],
input[type = 'email']{
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    border-radius: 1rem;
    border: 1px solid #040705;
    font-size: 1rem;
}
</style>