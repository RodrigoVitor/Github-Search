<template>
    <div id="user">
        <aside class="user">
            <figure>
                <b-img src="https://avatars.githubusercontent.com/u/77356444?v=4" alt="Uma imagem impressionante"></b-img>
                <header>
                    <p>Rodrigo Vitor <small>Rodrigo Vitor</small> </p>
                    <!-- <p></p> -->
                </header>
            </figure>
            <div>
                <p><b-img src="/icon/union.png" fluid alt="localização"></b-img> Lux One</p>
                <p><b-img src="/icon/location.png" fluid alt="localização"></b-img> Localização</p>
                <p><b-img src="/icon/star.png" fluid alt="estrelas"></b-img> 0</p>
                <p><b-img src="/icon/repository.png" fluid alt="repositorios"></b-img>1</p>
                <p><b-img src="/icon/followers.png" fluid alt="seguidores"></b-img>14</p>
            </div>
        </aside>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap');

#user {
    padding:0px 28px;
    width:300px;
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
    line-height: 10px;
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