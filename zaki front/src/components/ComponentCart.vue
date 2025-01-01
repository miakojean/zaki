<template>
    <div>
        <!-- Bouton pour ouvrir la modale -->
        <i @click="openModal" class="ri-shopping-cart-2-line"></i>

        <!-- Modale -->
        <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <button @click="closeModal" class="close-btn">X</button>
            <h2>Votre Panier</h2>

            <div v-if="cartItems.length > 0" class="cart-items">
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                <div class="item-details">
                <p>{{ item.name }}</p>
                <p>{{ item.quantity }} x {{ item.price }} FCFA</p>
                </div>
                <button @click="removeItem(index)">Retirer</button>
            </div>
            </div>
            
            <div v-else class="empty-cart">
            <p>Votre panier est vide.</p>
            </div>

            <div class="cart-summary" v-if="cartItems.length > 0">
            <p>Total : {{ totalPrice }} €</p>
            <button @click="checkout">Passer commande</button>
            <MainButton label="Passer commande" />
            </div>
        </div>
        </div>
    </div>
</template>
  
<script>
import MainButton from './MainButton.vue';

export default {
    data() {
        return {
        showModal: false,
        cartItems: [
            { name: 'Lait entier', quantity: 2, price: 1.5 },
            { name: 'Basilic', quantity: 1, price: 0.8 },
        ],
        };
    },
    computed: {
        totalPrice() {
        return this.cartItems
            .reduce((total, item) => total + item.quantity * item.price, 0)
            .toFixed(2);
        },
    },
    components:{
        MainButton,
    },
    methods: {
        openModal() {
        this.showModal = true;
        },
        closeModal() {
        this.showModal = false;
        },
        removeItem(index) {
        this.cartItems.splice(index, 1);
        },
        checkout() {
        alert('Commande passée !');
        this.cartItems = [];
        this.closeModal();
        },
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
    gap: 1rem;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    position: relative;
}
.close-btn {
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
font-size: 1.2rem;
cursor: pointer;
}

/* Responsiveness */
.cart-item {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 0.5rem;
}
.item-details p {
margin: 0;
}
.empty-cart {
text-align: center;
color: #888;
}
.cart-summary {
text-align: center;
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