<template>
    <aside>
        <div>
            <NuxtLink to="/repositorio-favorito"><b-img src="icon/yellow-star.png" alt="Repositório Favoritado"></b-img>Repositório Favoritado</NuxtLink>
        </div>
        <div class="mt-5">
            <NuxtLink to="/"><b-img src="icon/star.png" alt="Repositório Não Favoritado"></b-img>Repositório Não Favoritado </NuxtLink>
        </div>
    </aside>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

aside {
    position:absolute;
    right:28px;
    top:106px;
}
aside div a {
    text-decoration: none;
    font-size:18px;
    font-family: 'Rubik';
    color:#000;
    font-weight: lighter;
}
</style>