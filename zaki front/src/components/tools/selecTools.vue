<template>
    <div class="select-tools">
      <label :for="id">{{ label }}</label>
      <select :name="name" :id="id" v-model="internalValue" @change="onChange">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
</template>
  
<script>
  export default {
    name: "SelectTools",
    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        default: () => [
          { value: "A la livraison", label: "A la livraison" },
          { value: "wave", label: "Wave" },{ value: "Orange Money", label:"Orange Money"},
          { value: "Mtn Money", label:"Mtn Money"},{ value: "Moov Money", label:"Moov Money"},
        ],
      },
      modelValue: {
        type: String,
        required: true,
      },
    },
    computed: {
      internalValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
</script>
  
  
<style scoped>
    .verification{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    }

    .verification p{
    font-weight: 500;
    }

    select{
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #058C42;
    width: 100%;
    font-size: 1rem;
    }

    select:focus{
        outline: none;
    }

    .select-tools{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>