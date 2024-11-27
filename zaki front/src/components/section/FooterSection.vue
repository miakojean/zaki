<template>
  <footer>
    <div class="footer__container">
        <h2 class="footer_font">
            Zaki
        </h2> 
        <div class="footer__cards">
            <h3 class="footer_font">
               Navigation 
            </h3>
            <ul class="footer_ul">
                <li class="footer_li"><a href="#home">Accueil</a></li>
                <li class="footer_li"><a href="#about">Nos produits</a></li>
                <li class="footer_li"><a href="#contact">Commander</a></li>
                <li class="footer_li"><a href="">Devenir partenaire</a></li>
                <li class="footer_li"><a href="newsletter.html">Newsletter</a></li>
                <li class="footer_li">Connexion</li>
                <li class="footer_li">Inscription</li>
            </ul>
        </div>
        <div class="footer__cards">
            <h3 class="footer_font">
               Mentions légales
            </h3>
            <ul>
                <li class="footer_li">Conditions générales</li>
                <li class="footer_li">Politique de confidentialité</li>
                <li class="footer_li">Droits d'auteurs</li>
            </ul>
        </div>
        <div class="footer__cards">
            <h3 class="footer_font">
               Nous contacter
            </h3>
            <ul>
                <li class="footer_li">Tel: <a href="tel:+2250103926375">+225 0103926375</a></li>
                <li class="footer_li">Cel: <a href="tel:+2250586070612">+225 0586070612</a></li>
                <li class="footer_li">Whatsapp: <a href="tel:+2250586070612">+225 0586070612</a></li>
            </ul>
        </div>
        <div class="footer__cards">
            <h3 class="footer_font">
               Nous suivre
            </h3>
            <ul>
                <li class="footer_li"><i class="ri-facebook-circle-fill"></i></li>
                <li class="footer_li"><i class="ri-instagram-line"></i></li>
                <li class="footer_li"><i class="ri-twitter-x-line"></i></li>
            </ul>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

footer{
    background: #058C42;
    padding: 1rem;
}
.footer_font{
    color: white;
}

.footer__container{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 1rem;
}

.footer__cards{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer_li{
    list-style: none;
    color:#f1f1f1;
    line-height: 1.75;
    font-weight: 300;
}

.footer_li a{
    list-style: none;
    color:#f1f1f1;
    line-height: 1.5;
    font-weight: 300;
}

/* Media Queries */
@media (min-width: 768px) {

.footer__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

}

@media (min-width: 1024px) {
    .footer__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>