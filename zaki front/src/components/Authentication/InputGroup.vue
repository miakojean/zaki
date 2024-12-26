<template>
  <div class="input__group">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @blur="validate"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false, // Permet de rendre le champ obligatoire
    },
  },
  data() {
    return {
      error: "", // Message d'erreur à afficher
    };
  },
  methods: {
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    validate() {
      if (this.required && !this.modelValue) {
        this.error = `${this.label} est obligatoire.`;
      } else {
        this.error = "";
      }
    },
  },
};
</script>

<style scoped>
.input__group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
}

label {
  font-weight: 500;
  color: #333333;
}

.input__group input {
  padding: 0.8rem;
  width: 100%;
  max-width: 600px;
  border: none;
  border-bottom: 1px solid #177737;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input__group input:focus {
  outline: none;
  border-bottom: 2px solid #0e6223;
}

.error-message {
  color: red;
  font-size: 0.875rem;
}
</style>
