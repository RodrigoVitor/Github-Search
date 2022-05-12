<template>
    <div id="user" v-if="user">
        <aside class="user">
            <figure>
                <b-img :src="user.avatar_url" width="200" alt="Uma imagem impressionante"></b-img>
                <header>
                    <p>{{user.login}} <small>{{user.bio}}</small> </p>
                    <!-- <p></p> -->
                </header>
            </figure>
            <div>
                <p v-if="user.company"><b-img src="/icon/union.png" fluid alt="localização"></b-img> {{user.company}}</p>
                <p v-if="user.location"><b-img src="/icon/location.png" fluid alt="localização"></b-img> {{user.location}}</p>
                <p><b-img src="/icon/star.png" fluid alt="estrelas"></b-img> 0</p>
                <p><b-img src="/icon/repository.png" fluid alt="repositorios"></b-img>{{user.public_repos}}</p>
                <p><b-img src="/icon/followers.png" fluid alt="seguidores"></b-img>14</p>
            </div>
        </aside>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('search', ['user'])
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

#user {
    padding:0px 28px;
    width:20%;
}
aside figure header p {
    font-size:36px;
    font-family: 'Rubik';
    color:#000;
    font-weight: lighter;
}
aside figure header p > small{
    font-size:24px;
    display:block;
    margin-bottom:72px;
}
aside div p {
    font-size:20px;
    text-align: left;
    font-family: 'Rubik';
    color:#000;
    font-weight: lighter;
}

aside div p img {
    margin-right:10px;  
}

</style>