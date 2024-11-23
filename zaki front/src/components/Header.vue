<template>
  <header>
    <div class="header__container">
        <div class="head__img">
            <img :src="require('@/assets/rice-1594612_1280.jpg')" alt="">
        </div>
        <div class="head__text center_flex">
            <h2> Trouver vos produits vivriers ici à moindres coûts ici.</h2>
            <p>
                En Côte d'Ivoire, les cultures vivrières comme le riz, 
                le manioc et l'igname sont au cœur de l'alimentation. Avec l'application <span>ZAKI</span>,
                les consommateurs pourront comparer facilement les prix de ces produits essentiels selon les marchés, 
                favorisant ainsi des achats économiques et éclairés.
            </p>
            <div class="search">
                <form action="#">
                    <input type="text" placeholder="Trouver mon produits">
                    <button type="submit">Trouver</button>
                </form>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
 font-family: 'Inter', sans-serif;
}

:root{
    --primary--color: #104710;
    --secondary--color: #ffff00 ;
}

.center_flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

header {
    padding: 4rem 0.5rem 0.5rem 1rem;
}

.header__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.head__text{
    padding: 0;
}

h2{
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--primary--color);
    text-align: center;
}

p{
    font-size: 1rem;
}

form{
    display: flex;
    gap: 1rem;
}

input{
    padding: 0.5rem;
    font-family: 'inter', sans-serif;
    font-size: 1rem;
    border-radius: 1rem;
    border: 1px solid gray;
    color: gray;
}
input:focus{
    outline: 2px solid #5fd35f;
    border: none;
}

button{
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    background: #104710;
    color: white;
    border: none;
    border-radius: 1rem;
    font-weight: 500;
    padding: 0.8rem;
    transition: 0.4s ease-out;
}

button:hover{
    background: #408d40;
}

@media (width > 480px) {
  
}

@media (width > 768px) {
  
}

@media (width > 1024px) {

  
    
}
</style>