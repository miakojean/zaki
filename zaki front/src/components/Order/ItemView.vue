<template>
    <div class="ItemView">
        <div class="pic">
            <h3>{{ itemName }}</h3>
            <i @click="removeItem" class="ri-delete-bin-6-line"></i>
        </div>
        <div class="details">
            <p>Prix : {{ itemPrice }} FCFA /Kg</p>
            <InputOrder 
                label="Quantité" 
                type="number" 
                name="quantity" 
                id="quantity" 
                placeholder="Quantité" 
                :modelValue="itemQuantity"
                @update:modelValue="updateQuantity"
                @remove-item="removeItem"
            />
        </div>
    </div>
</template>

<script>
import InputOrder from './inputOrder.vue';

export default {
    name: 'ItemView',
    props: {
        itemName: {
            type: String,
            required: true,
        },
        itemQuantity:{
            type: Number,
            required: true,
        },
        itemPrice: {
            type: Number,
            required: true,
        },
    },
    components:{
        InputOrder
    },
    methods: {
        updateQuantity(value) {
            this.$emit('update-quantity', Number(value));
        },
        removeItem() {
            this.$emit('remove-item');
        }
    },
    data() {
        return {
            category: null,
        }
    }
}
</script>

<style scoped>

.ItemView{
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: normal;
    gap: 0.2rem;
    border-bottom: 2px solid gray;
}

.pic{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

i{
    color: red;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    transition: 0.2s ease-in-out;
}

i:hover{
    color: red;
    transform: scaleY(1.5);
    cursor: pointer;
}

h3 {
    color: #058C42;
}

p{
    text-align: left;
}

.details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

</style>