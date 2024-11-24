<template>
    <nav>
      <div class="nav__logo"><a href="#">ZAKI</a></div>
      <ul class="nav__links" id="nav-links">
        <li class="link"><a href="#home">Accueil</a></li>
        <li class="link"><a href="#about">À propos</a></li>
        <li class="link"><a href="#contact">Services</a></li>
        <li class="link"><a href="">Blog</a></li>
        <li class="link"><a href="newsletter.html">Newsletter</a></li>
      </ul>
      <div class="nav__log">
        <li class="link"><a href="login.html">Connexion</a></li>
        <li class="link"><a href="registration.html">Inscription</a></li>
      </div>
      <div class="nav__menu__btn" id="menu-btn">
        <span><i class="ri-menu-3-line"></i></span>
      </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    mounted() {
        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");

        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
 font-family: 'Inter', sans-serif;
}

:root{
    --primary--color: #139713;
    --secondary--color: #ffff00 ;
}

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
}

.nav__logo a {
font-size: 1.5rem;
font-weight: 800;
color: var(--primary--color);
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
background-color: rgba(255, 255, 255, 0.9);
}

.nav__log{
    display: none;
}

.nav__links.open {
transform: scaleY(1);
}

.link a {
font-weight: 400;
color: var(--text-light);
transition: 0.3s;
}

.link a:hover {
color: var(--text-dark);
}

.nav__links .link a {
color: var(--text-dark);
opacity: 0;
}

.nav__links.open .link a {
opacity: 1;
}

.link__log{
background: var(--bice-blue);
color: var(--white);
padding: 10px;
border-radius: 5px;
}

.link__log a{
text-align: center;
text-decoration: none;
color: var(--white);
}

.nav__menu__btn {
font-size: 1.5rem;
color: var(--text-dark);
cursor: pointer;
}

@media (width > 480px) {
  
}

@media (width > 768px) {
  
}

@media (width > 1024px) {

  
    
}

</style>
