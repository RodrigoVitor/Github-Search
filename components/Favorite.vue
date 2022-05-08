<template>
    <div>
        <Search />
        <section>
        <article class="mt-2" v-for="count in counts" :key="count">
            <header class="d-flex">
                <h2>Angular-AdminLTE</h2>
                <p ><b-img src="icon/yellow-star.png"></b-img></p>
            </header>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat soluta fugit qui nemo hic, quasi perspiciatis molestiae suscipit vitae sequi tenetur temporibus laudantium, assumenda rem adipisci voluptatem voluptatibus debitis!</p>
            </div>
            <div>
                <p><b-img src="icon/star.png" alt="Estrelas"></b-img> 150</p>
            </div>
        </article>
    </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            counts: [1, 2 ,3 ,4 ,5]
        }
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