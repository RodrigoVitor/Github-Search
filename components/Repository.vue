<template>
    <section>
        <article class="mt-2" v-for="repository in repositories" :key="repository.id">
            <header class="d-flex">
                <h2 title="Clique aqui para favoritarr">{{repository.name}}</h2>
                <p ><b-img :src="img_path" alt="estrela" title="Clique aqui para favoritar"></b-img></p>
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
import {mapState} from 'vuex'
export default {
    data () {
        return {
            img_path: "icon/star.png"
        }
    },
    computed: {
        ...mapState('search',['repositories'])
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