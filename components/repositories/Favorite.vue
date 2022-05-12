<template>
    <div>
        <Search />
        <section>
            <article class="mt-2" v-for="favorite in favorites" :key="favorite.id">
                <header class="d-flex">
                    <h2 @click="remove_favorite(favorite.id)">{{favorite.name}}</h2>
                    <p ><b-img src="icon/yellow-star.png"></b-img></p>
                </header>
                <div>
                    <p>{{favorite.description}}</p>
                </div>
                <div>
                    <p><b-img src="icon/star.png" alt="Estrelas"></b-img> {{favorite.stargazers_count}}</p>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations('search', ['REMOVE_FAVORITE']),
        remove_favorite(value) {
            this.REMOVE_FAVORITE(value)
        }
    },
    computed: {
        ...mapState('search', ['favorites'])
    }
}
</script>

<style scoped>
section {
    width:80%;
    padding:28px;
    margin:auto
}
section article header {
    justify-content: space-between
}
section article header p, section article header h2 {
    cursor:pointer
}
</style>