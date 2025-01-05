<template>
    <div>
        <!-- Bouton pour ouvrir la modale -->
        <i @click="openModal" class="ri-shopping-cart-2-line"><span>{{ itemLength }}</span></i>

        <!-- Modale -->
        <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <button @click="closeModal" class="close-btn">X</button>
            <h3>Votre Panier</h3>

            <div class="cart-items">
                <ItemView 
                    v-for="(item, index) in cartItems" 
                    :key="index" 
                    :itemName="item.name"
                    :itemQuantity = "item.quantity"
                    :itemPrice = "item.price"
                    @update-quantity="updateQuantity(index, $event)"
                    @remove-item="removeItem(index)"
                />
            </div>

            <div class="cart-summary" >
                <p>Total : {{ totalPrice }} FCFA</p>
            
            </div>
            
            <MainButton label="Passer commande" />

        </div>
        </div>
    </div>
</template>
  
<script>
import MainButton from './MainButton.vue';
import ItemView from './Order/ItemView.vue';
import { EventBus } from '@/data/eventBus';

export default {
    data() {
        return {
        showModal: false,
        cartItems: [],
        };
    },
    components:{
        MainButton,
        ItemView,
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            this.cartItems.forEach(item => {
                totalPrice += item.quantity * item.price;
            });
            return totalPrice.toFixed(2);
        },
        itemLength() {
            return this.cartItems.length;
        }
    },

    created() {
        EventBus.on('add-to-cart', this.addToCart);
    },
    beforeDestroy () {
        EventBus.off('add-to-cart', this.addToCart);
    },
    methods: {
        openModal() {
        this.showModal = true;
        this.loadCartItems();
        },
        closeModal() {
        this.showModal = false;
        },
        addToCart(item) {
            const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                this.cartItems.push()
            } else {
                this.cartItems.push(item);
            }
            this.saveCartItems();
        },
        removeItem(index) {
            this.cartItems.splice(index, 1);
            this.saveCartItems();
        },
        updateQuantity(index, quantity) {
            this.cartItems[index].quantity = quantity;
            this.saveCartItems();
        },
        saveCartItems() {
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        },
        loadCartItems() {
            const savedCartItems = localStorage.getItem('cartItems');
            if (savedCartItems) {
                this.cartItems = JSON.parse(savedCartItems);
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadCartItems();
        });
    },
    beforeRouteUpdate(to, from, next) {
        this.loadCartItems();
        next();
    },
};
</script>
  
<style scoped>
/* Style pour le bouton */
.open-cart-btn {
    background-color: none;
    color: #058C42;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
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
    border-radius: 5%;
    width: 30px;
    color: #f3f3f3;
    padding: 0.4rem;
}

/* Responsiveness */
.cart-items {
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
    /*border: 1px solid #058C42;*/
}

.cart-items{
    margin: 0;
    padding: 0;
}

.items{
    display: flex;
    border: 1px solid #058C42;
    width: 100%;
}

span {
    display: flex;
    flex-direction: column;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: #058C42;
    cursor: pointer;
    transition: 0.4s ease-in-out;
}
i:hover{
    color: #058C42;
    cursor: pointer;
}

i span{
    background: red;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    padding: 0.1rem;
    border-radius: 50%;
}
</style>,