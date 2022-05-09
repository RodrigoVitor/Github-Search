<template>
    <section>
        <article class="mt-2" v-for="repository in repositories" :key="repository.id">
            <header class="d-flex">
                <h2 @click="addFavorites(repository)" title="Clique aqui para favoritarr">{{repository.name}}</h2>
                <p ><b-img :src="star" alt="estrela" title="Clique aqui para favoritar"></b-img></p>
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
        ...mapMutations('search', ['ADD_FAVORITE']),
        addFavorites(value) {
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
    width:1028px;
    position:absolute;
    left: 328px;
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