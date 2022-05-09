<template>
    <div>
        <Search />
        <section>
        <article class="mt-2" v-for="favorite in favorites" :key="favorite">
            <header class="d-flex">
                <h2>{{favorite.name}}</h2>
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
import {mapState} from 'vuex'
export default {
    data () {
        return {
            counts: [1, 2 ,3 ,4 ,5]
        }
    },
    computed: {
        ...mapState('search', ['favorites'])
    }
}
</script>

<style scoped>
section {
    width:1028px;
    padding:28px;
}
section article header {
    justify-content: space-between
}
</style>