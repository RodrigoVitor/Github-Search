<template>
    <section>
        <article class="mt-5" v-for="repository in repositories" :key="repository.id">
            <header class="d-flex">
                <h2 @click="addFavorites(repository)" title="Clique aqui para favoritarr">{{repository.name}}</h2>
                <p v-if="favorites.includes(repository)">
                    <b-img  :src="yellow_star" :id="repository.id" alt="estrela" title="Clique aqui para favoritar"></b-img>
                </p>
                <p v-else  @click="addFavorites(repository)">
                    <b-img :src="star" :id="repository.id" alt="estrela" title="Clique aqui para favoritar"></b-img>
                </p>
            </header>
            <div>
                <p>{{repository.description}}</p>
            </div>
            <div>
                <p><b-img src="icon/star.png" alt="Estrelas"></b-img> {{repository.stargazers_count}}</p>
            </div>
        </article>
    </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data () {
        return {
            star: "icon/star.png",
            yellow_star: "icon/yellow-star.png"
        }
    },
    methods: {
        ...mapMutations('search', ['ADD_FAVORITE', 'REMOVE_FAVORITE']),
        addFavorites(value) {
            let img = document.getElementById(value.id)
            img.src = this.yellow_star
            
            this.ADD_FAVORITE(value)
        }
    },
    computed: {
        ...mapState('search',['repositories', 'favorites'])
    }
}
</script>

<style scoped>
section {
    width:55%;
    position:absolute;
    left: 25%;
    top:106px;
}
section article header {
    justify-content: space-between
}
section article header p, section article header h2 {
    cursor:pointer
}

@media screen and (max-width:800px) {
    section {position: relative; width:100%; left:0; padding:28px;}
}
</style>