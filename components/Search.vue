<template>
    <main :class="!isSearch ? 'main-column' : 'main-row' ">
        <div>
            <h1 v-if="!title">Github</h1>
            <h2 class="ml-3" v-if="!title">Search</h2>
            <h2 v-if="title">{{title}}</h2>
        </div>
        <b-container>
            <b-form-input type="text" v-model="user"></b-form-input>
            <b-button @click="Search"><img src="/icon/search.png" alt="icon Pesquisa"></b-button> <br>
        </b-container>
        <div class="error">
            <p class="text-danger">{{msg}}</p>
        </div>
    </main>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
    data() {
        return {
            title: '',
            msg: ''
        }
    },
    methods: {
        ...mapActions('search', ['search_user']),
        ...mapMutations('search', ['CHANGE_USER_NAME']),
        Search () {
            if(!this.user)
            {
                this.msg = 'Usuario não encontrado'
                return setInterval(() => {this.msg = ''}, 3000)
            }
            this.search_user()
        }
    },
    computed: {
        ...mapState('search', ['isSearch', 'user_name']),
        user: {
            get() {
                return this.user_name
            },
            set(value) {
                this.CHANGE_USER_NAME(value)
            }
        }
    },
    mounted () {
        if(this.$router.app._route.name === "repositorio-favorito") 
            this.title = "Repositórios Favoritos"
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
    width:555px;
    display:flex;
    flex-direction: row;
    align-items: center;
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