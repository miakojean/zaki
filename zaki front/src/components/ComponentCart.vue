<template>
    <div>
        <!-- Bouton pour ouvrir la modale -->
        <i @click="openModal" class="ri-shopping-cart-2-line"><span>{{ itemLength }}</span></i>

        <!-- Modale -->
        <div v-if="showModal" class="modal-overlay" aria-hidden="false">
        <div class="modal-content">
            
            <div class="stepper-container">
                <div class="step">
                    <div class="circle"><i class="ri-shopping-cart-2-line"></i></div>
                    <div class="label">Étape 1</div>
                </div>
                <div class="line" v-show="step>1"></div>
                <div class="step" v-show="step>1">
                    <div class="circle"><i class="ri-truck-line"></i></div>
                    <div class="label">Étape 2</div>
                </div>
                <div class="line" v-show="step>2"></div>
                <div class="step" v-show="step>2">
                    <div class="circle"><i class="ri-check-double-line"></i></div>
                    <div class="label">Étape 3</div>
                </div>
            </div>

            <button @click="closeModal" class="close-btn">X</button>
            <h3 v-if="step===1">Votre Panier</h3>
            <p v-if="itemLength <= 0 && step !=3 "> Panier vide, ajouter des éléments.</p>
            <h3 v-if="step===2"> Vos informations de livraison</h3>

            <div class="cart-items" v-if="step === 1">
                <ItemView 
                    v-for="(item, index) in cartItems" 
                    :key="index" 
                    :itemName="item.name"
                    :itemQuantity = "item.quantity"
                    :itemPrice = "item.price"
                    @update-quantity="updateQuantity(index, $event)"
                    @remove-item="removeItem"
                />
            </div>

            <div class="cart-items" v-if="step === 2">
                <InputGroup
                    label="Prénoms"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Entrer votre prenom"
                    v-model="user_name"
                    
                />
                <InputGroup
                    label="Zone de livraison"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Entrer votre prenom"
                    v-model="delivery_local"
                    
                />
                <InputGroup
                    label="Votre numéro"
                    type="number"
                    id="numero"
                    name="number"
                    placeholder="Entrer votre numéro"
                    v-model="number"
                    
                />
                
                <SelecTools 
                    label="Choisir le mode de paiement"
                    name="paiement_method"
                    id="paiement_method"
                    v-model="paiement_method"
                />
                <div class="verification">
                    <i @click="prevStep" class="ri-arrow-left-line"> </i> 
                    <p>Vérifer ma commande</p>
                </div>
            </div>

            <div class="cart-items" v-if="step === 3">
                <DonePop 
                    title="Commande validée"
                    message="Merci pour votre achat."
                    warning="Ci-dessous le numéro de votre facture"
                    details="Ma commande"
                    :invoice="invoiceNumber"
                />

            </div>

            <div class="cart-summary" >
                <p>Total : {{ totalPrice }} FCFA</p>
            
            </div>

            <MoreButton v-if="step === 1 && itemLength > 0"
            label="Poursuivre"
            @click="nextStep"
            />

            <MainButton v-if="step === 2" 
            @click="submitOrder" 
            label="Passer commande" />

        </div>
        </div>
    </div>
</template>
  
<script>
import InputGroup from './Authentication/InputGroup.vue';
import MainButton from './MainButton.vue';
import MoreButton from './MoreButton.vue';
import ItemView from './Order/ItemView.vue';
import { EventBus } from '@/data/eventBus';
import axios from "axios";
import SelecTools from './tools/selecTools.vue';
import DonePop from './Order/DonePop.vue';
import Stepper from './tools/stepper.vue';

export default {
    data() {
        return {
        showModal: false,
        cartItems: [],
        step: 1,
        maxstep: 3,
        user_id: null,
        user_name: "",
        number: null,
        delivery_local: "",
        paiement_method: " A la livraison",
        invoiceNumber: null
    }
    },
    components:{
        MainButton,
        ItemView,
        InputGroup,
        MoreButton,
        SelecTools,
        DonePop,
        Stepper
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            this.cartItems.forEach(item => {
                totalPrice += item.quantity * item.price;
            });
            return parseFloat(totalPrice.toFixed(2));
        },
        itemLength() {
            return this.cartItems.length;
        }
    },

    created() {
        this.loadCartItems();
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
                existingItem.quantity += item.quantity; // Mise à jour de la quantité
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
            try {
                this.cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
                if (!Array.isArray(this.cartItems)) {
                    throw new Error("Invalid cartItems format");
                }
            } catch (error) {
                console.error("Erreur lors du chargement des articles du panier :", error);
                this.cartItems = [];
                localStorage.removeItem('cartItems'); // Nettoyez les données corrompues
            }
        },

        // About the different steps
        nextStep() {
            if (this.step < this.maxstep) {
                this.step++;
            } else if (this.step === this.maxstep) {
                this.submitOrder();
            }
        },
        prevStep() {
            if (this.step > 1) {
            this.step--;
            }
        },

        // About the submitOrder method

        async submitOrder() {
        // Construction du JSON
        const order = {
            user_name: this.user_name || null, // Fournir un nom si user_id est absent
            status: "pending", 
            paiement_method: this.paiement_method,
            number: this.number,
            delivery: this.delivery_local,
            total_price: parseFloat(this.totalPrice), // Convertir en nombre
            items: this.cartItems.map(item => ({
                product: item.id, // Assurez-vous que `item.id` existe
                quantity: item.quantity, // La quantité de l'article 
                total_price: parseFloat((item.quantity * item.price).toFixed(2))
            }))
        };

        try {
            // Envoi de la requête à l'API avec Axios
            const response = await axios.post("http://127.0.0.1:8000/zakiapi/orders/create/", order, {
                headers: {
                    "Content-Type": "application/json",
                    // Ajoutez un jeton si nécessaire
                    // "Authorization": `Bearer ${token}`
                },
            });
            
            const invoiceNumber = response.data["numero de commande"]; // Extraction du numéro de commande
            
            // Affichage ou stockage du numéro de facture
            this.invoiceNumber = invoiceNumber; // Sauvegarde dans une variable réactive


            console.log("Commande créée avec succès :", response.data, this.invoiceNumber);
            this.cartItems = []; // Vider le panier après une commande réussie
            this.saveCartItems(); // Mettre à jour le stockage local
            this.step = this.maxstep; // Afficher le message de confirmation
        } catch (error) {
            if (error.response) {
                console.error("Erreur API :", error.response.data);
            } else if (error.request) {
                console.error("Aucune réponse du serveur :", error.request);
            } else {
                console.error("Erreur inconnue :", error.message);
            }
        }
}

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

[aria-hidden="true"] {
    display: none;
}


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
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.modal-overlay[aria-hidden="false"] {
    opacity: 1;
    visibility: visible;
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
    transition: 0.2s ease-in-out;
    
    
}

.close-btn:hover{
    background-color: red;;
    color: #f3f3f3;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
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
    font-size: 0.6rem;
    color: white;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    padding: 0.1rem;
    border-radius: 50%;
}

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

.empty{
    font-size: 2rem;
    color: red;
}

.stepper-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
}

.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f9fafe;
    border: 2px solid #058C42;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #058C42;
}

.line {
    width: 50px;
    height: 4px;
    background-color: #058C42;
    margin: 0 5px;
    margin-bottom: 20px;
}

.label {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
}

.step.active .circle {
    background-color: #058C42;
    color: white;
}
</style>,