<script>
import { store } from '../store.js'

export default{
    data() {
        return{
            store,
        }
    },
    methods:{
        scrollLeft() {
                this.$refs.scrollable.scrollBy({ left: -1800, behavior: 'smooth' });
        },

        scrollRight() {
                this.$refs.scrollable.scrollBy({ left: 1800, behavior: 'smooth' });
        }
    },
}
</script>

<template>
    <div v-if="store.searched.length > 0" class="container">
        <h1 v-if="store.Series.length > 0">Serie TV</h1>
        <h1 class="vuoto"  v-if="store.Series.length == 0 && store.searched.length > 0">Nessun risultato nelle Serie TV per la ricerca: {{ store.searched }} </h1>
        <button v-if="store.films.length > 9 && store.searched.length > 0" class="scroll left" @click="scrollLeft()"><i class="fa-solid fa-chevron-left "></i></button>
        <button v-if="store.films.length > 9 && store.searched.length > 0" class="scroll right" @click="scrollRight()"><i class="fa-solid fa-chevron-right "></i></button>
        <section ref="scrollable">
            <article  v-for="(serie, index) in store.Series">
                <div class="card">
                    <div class="cover">
                        <img v-if="serie.poster_path == null" src="../assets/img/placeholder.bmp" alt="">
                        <img v-else :src="'https://image.tmdb.org/t/p/w185' + serie.poster_path" alt="">
                    </div>
                    <div class="card__content">
                        <p class="card__title">{{ serie.name }}</p>
                        <p class="card__description">Titolo originale: <span>{{serie.original_name}}</span> </p>
                        <div class="bottom-info">
                            <p class="card__description"> <span> <img class="lang-icon" :class="'lang-icon-' + serie.original_language"></span> </p>
                            <p class="card__description"> 
                                <div>
                                    <i v-for="star in (Math.floor(serie.vote_average / 2))" class="fa-solid fa-star"></i>
                                    <i v-for="star in (5 - Math.floor(serie.vote_average / 2))" class="fa-regular fa-star"></i>
                                </div>
                            </p>
                        </div>
                        <p class="card__description"> Overview: <span class="overview">{{serie.overview}}</span> </p>
                    </div>
                </div>
            </article>
        </section>
        
    </div>

</template>

<style lang="scss" scoped>
@use "../../node_modules/@textabledev/langs-flags-list/lang-flags.css" as *;
@use "../styles/singleCards.scss" as *;

.lang-icon {
    background-image: url(../assets/img/lang-flags.png);
}
div.container{
position: relative;
    &:hover button{
        display: inline-block;
    }
}

button{
    display: none;
    cursor: pointer;
    position: absolute;
    font-size: 2rem;
    height: 18rem;
    top: 3.7rem;
    z-index: 1;
    padding: .5rem;
    background-color: rgba(70, 70, 70, 0.199);
    border: none;

    &:hover{
        background-color: rgba(122, 122, 122, 0.199);
        font-size: 2.5rem;
    }
    
    i{
        color: white;
    }
}

button.left{
    border-radius: 1.5rem 0  0 1.5rem;
    left: -1.8rem;
}

button.right{
    border-radius: 0 1.5rem 1.5rem 0;
    left: 109.5rem;
}

h1{
    color: white;
    padding-left: 1rem;
    padding-bottom: 1rem;
}
h1.vuoto{
        margin-top: 10rem;
    }

section{
    display: flex;
    overflow: scroll;
    margin-bottom: 2rem;
    scrollbar-width: none;
}

</style>