<template>
    <div>
        <!-- Bouton pour ouvrir la modale -->
        <i @click="openModal" class="ri-shopping-cart-2-line"></i>

        <!-- Modale -->
        <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <button @click="closeModal" class="close-btn">X</button>
            <h3>Confirmation</h3>
            <h4> {{ itemName }} </h4>
            <p> J'ajoute à mon panier? </p>
            <div class="cart-items">
                <button @click="confirmItem" class="yes">Oui</button>
                <button @click="closeModal" class="non">Non</button>
            </div>
        </div>
        </div>
    </div>
</template> 
  
<script>
import MainButton from '../MainButton.vue';
import { EventBus } from '@/data/eventBus';

export default {
    name:'ConfirmView',
    props: {
        itemName: {
            type: String,
            required: true,
        },
        onConfirm: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            category: null,
            showModal: false,
            panier: [],       
        };
    },
    components:{
        MainButton
    },
    methods: {
        openModal() {
        this.showModal = true;
        },        
        closeModal() {
        this.showModal = false;
        },
        confirmItem() {
        this.onConfirm();
        EventBus.emit('add-to-cart', { name: this.itemName, quantity: 1, price: 700 }); // Example price
        this.closeModal();
        }
       
    },
};
</script>
  
<style scoped>
/* Style pour le bouton */
.open-cart-btn {
    background-color: none;
    color: #058C42;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
}

/* Styles de la modale */
.modal-overlay {
position: fixed;
top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    position: relative;
}
.close-btn {
    position: absolute;
    top: -10px;
    right: -10px;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    background-color: red;
    border-radius: 50%;
    width: 30px;
    color: #f3f3f3;
    padding: 0.6rem;
}

/* Responsiveness */
.cart-items {
    display: flex;
    justify-content:space-around;
    gap: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
    /*border: 1px solid #058C42;*/
}

.yes, .non{
    background-color: #058C42;
    color: white;
    border: none;
    padding: 0.6rem;
    cursor: pointer;
    border-radius: 1rem;
    width: 75px;
}

.non{
    background-color: gray;
}

i{
    font-size: 1.5rem;
    color: #058C42;
    cursor: pointer;
    transition: 0.4s ease-in-out;
}
i:hover{
    color: #058C42;
    cursor: pointer;
}
</style>