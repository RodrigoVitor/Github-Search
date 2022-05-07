<template>
    <main class="main-row">
        <div>
            <h1>Github</h1>
            <h2>Search</h2>
        </div>
        <b-container>
            <b-form-input type="text"></b-form-input>
            <b-button @click="Search"><img src="/icon/search.png" alt="icon Pesquisa"></b-button>
        </b-container>
    </main>
</template>

<script>
import {mapMutations} from "vuex"
export default {
    methods: {
        ...mapMutations('search', ['CHANGE_SEARCH']),
        Search () {
            const main = document.querySelector("main")
            main.classList.remove("main-column")
            main.classList.add("main-row")
            this.CHANGE_SEARCH()
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');

main {
    padding:28px;
}

main .container button {
    background:#000;
    width:100px;
}

.main-row {
    display:flex;
    flex-direction: row;
}
.main-row div {
    width:311px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.main-row div h1, h2 {
    font-size:42px;
}
.main-row div h1, .main-column div h1 {
    font-family: 'Roboto Mono';
    color:#000;
    font-weight: bold;
}
.main-row div h2, .main-column div h2 {
    font-family: 'Rubik';
    color:#000;
    font-weight: lighter;
}
.main-row > .container, .main-column > .container {
    width:700px;
    height:50px;
    display:flex;
    flex-direction: row;
}

.main-column {
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-column div {
    display:flex;
    align-items: center;
}
.main-column div h1 {
    margin-right:20px;
    font-size:64px;
}
.main-column div h2 {
    font-size:64px;
}
</style>