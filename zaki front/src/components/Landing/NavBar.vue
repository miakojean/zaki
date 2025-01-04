<template>
    <nav>
      <div class="nav__logo"><a href="#">ZAKI</a></div>
      <ul class="nav__links" id="nav-links">
        <li class="link"><router-link to="/">Accueil</router-link></li>
        <li class="link"><router-link to="/product">Produits</router-link></li>
        <li class="link"><a href="#contact">Commander</a></li>
        <li class="link"><a href="newsletter.html">Newsletter</a></li>
      </ul>
      <div class="nav__log">
        <li class="link"><router-link to="/login">Connexion</router-link></li>
        <li id="member" class="link"><router-link to="/Registration">Devenir partenaire zaki</router-link></li>
      </div>
      <ComponentCart />
      <div class="nav__menu__btn" id="menu-btn">
        <span><i class="ri-menu-3-line"></i></span>
      </div>
    </nav>
</template>

<script>
import ComponentCart from '../ComponentCart.vue';

export default {
    name: "NavBar",
    mounted() {
        const menuBtn = this.$refs.menuBtn;
        const navLinks = this.$refs.navLinks;

        if (menuBtn && navLinks) {
            menuBtn.addEventListener("click", () => {
                navLinks.classList.toggle("open");
            });
        } else {
            console.error("Les références menuBtn ou navLinks sont manquantes.");
        }
    },
    components: {
        ComponentCart,
    },
};
</script>

<style>

nav {
position: fixed;
padding: 1rem;
top:0;
left: 0;
width: 100%;
display: flex;
justify-content: space-between;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-bottom: 1px solid gray;
background: white;
z-index: 1;
}

.nav__logo a {
font-size: 1.5rem;
font-weight: 800;
color: #058C42;
}

.nav__links {
  position: absolute;
  left: 0;
  top: 68px;
  padding: 2rem;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.5s;
  background-color: white;
}

.nav__log{
  display: none;
}

.nav__links.open {
  transform: scaleY(1);
}

.link a {
  font-weight: 400;
  transition: 0.3s;
  color:#040705;
}

.link i{
  font-size: 1.5rem;
  color: #058C42;
  cursor: pointer;
}

.link a:hover {
color: var(--text-dark);
}

.nav__links .link a {
opacity: 0;
}

.nav__links.open .link a {
opacity: 1;
}

.link__log{
list-style: none;
background: #058C42;
color: #040705;
padding: 10px;
border-radius: 5px;
}

.link__log a{
list-style: none;
text-align: center;
text-decoration: none;
color: #040705;
}

.nav__menu__btn {
font-size: 1.5rem;
color: #058C42;
cursor: pointer;
}

@media (width > 480px) {
  
}

@media (width > 768px) {

  
}


@media (width > 1024px) {

  nav {
    position: fixed;
    padding: 1rem;
    box-shadow: none;
    display: flex;
    align-items: center;
  }

  .nav__links {
    position: static;
    padding: 0;
    width: fit-content;
    flex-direction: row;
    transform: none;
  }

  .nav__links .link a {
    opacity: 1;
  }

  .nav__menu__btn {
    display: none;
  }

  .nav__log{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav__log .link{
    list-style: none;
  }

  .link a{
    position: relative;
  }

  .link{
    display: flex;
    align-items: center;
  }

  .nav__log .link a{
    color: black;
    background-color: var(--bice-blue);
    font-weight: 400;
    transition: 0.3s;
    font-weight: 500;
    background: var(--bice-blue);
    padding: 0.5rem;
  }

  .link__log{
    display: none;
  }

  .nav__links .link a::after {
    content:'';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #058C42;
    border-radius: 40px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .3s;
  }

  .nav__links .link a:hover::after{
    transform-origin: left;
    transform: scale(1);
  }

  #member{
    background: #058C42;
    color: #f3f3f3;
    border: 1px solid #058C42;
    border-radius: 1rem;
  }

  #member a{
    color: #f3f3f3;
  }
}


</style>
