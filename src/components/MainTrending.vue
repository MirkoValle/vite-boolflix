<script>
import { store } from '../store.js'
export default{
    data() {
        return{
            store
        }
    },

    methods:{
        scrollLeft(index) {
            if(index == "top"){
                this.$refs.scrollableTop.scrollBy({ left: -1800, behavior: 'smooth' });
            } else{
                this.$refs.scrollableBot.scrollBy({ left: -1800, behavior: 'smooth' });
            }
        },

        scrollRight(index) {
            if(index == "top"){
                this.$refs.scrollableTop.scrollBy({ left: 1800, behavior: 'smooth' });
            } else {
                this.$refs.scrollableBot.scrollBy({ left: 1800, behavior: 'smooth' });
            }
        }
    },
    
}
</script>

<template>

    <!-- In tendenza -->
    <div class="container">
            <h1 v-if="store.searched.length == 0">In tendenza</h1>
            <button class="scroll left" @click="scrollLeft('top')"><i class="fa-solid fa-chevron-left "></i></button>
            <button class="scroll right" @click="scrollRight('top')"><i class="fa-solid fa-chevron-right "></i></button>
            <section v-if="store.searched.length == 0" ref="scrollableTop">
                <article v-for="(trending, index) in store.trending">
                    <div class="card">
                        <div class="cover">
                            <img v-if="trending.poster_path == null" src="../assets/img/placeholder.bmp" alt="">
                            <img v-else :src="'https://image.tmdb.org/t/p/w185' + trending.poster_path" alt="">
                        </div>
                        <div class="card__content">
                            <p class="card__title">{{ trending.title || trending.name}} </p>
                            <p class="card__description">Titolo originale: <span>{{trending.original_title || trending.original_name}}</span> </p>
                            <div class="bottom-info">
                                <p class="card__description"> <span> <img class="lang-icon" :class="'lang-icon-' + trending.original_language"></span> </p>
                                <p class="card__description"> 
                                    <div>
                                    <i v-for="star in (Math.floor(trending.vote_average / 2))" class="fa-solid fa-star"></i>
                                    <i v-for="star in (5 - Math.floor(trending.vote_average / 2))" class="fa-regular fa-star"></i>
                                    </div>
                                </p>
                            </div>
                            <p class="card__description"> Overview: <span class="overview">{{trending.overview}}</span> </p>
                        </div>
                    </div>
                </article>
            </section>

    </div>

    <!-- Scelti per te -->
            <div class="container">
                <h1 v-if="store.searched.length == 0">Scelti per te</h1>
                <button class="scroll left" @click="scrollLeft('bot')"><i class="fa-solid fa-chevron-left "></i></button>
                <button class="scroll right" @click="scrollRight('bot')"><i class="fa-solid fa-chevron-right "></i></button>
                <section v-if="store.searched.length == 0" ref="scrollableBot">
                    <article v-for="(trending, index) in store.trendingSecond">
                        <div class="card">
                            <div class="cover">
                                <img v-if="trending.poster_path == null" src="../assets/img/placeholder.bmp" alt="">
                                <img v-else :src="'https://image.tmdb.org/t/p/w185' + trending.poster_path" alt="">
                            </div>
                            <div class="card__content">
                                <p class="card__title">{{ trending.title || trending.name}} </p>
                                <p class="card__description">Titolo originale: <span>{{trending.original_title || trending.original_name}}</span> </p>
                                <div class="bottom-info">
                                    <p class="card__description"> <span> <img class="lang-icon" :class="'lang-icon-' + trending.original_language"></span> </p>
                                    <p class="card__description"> 
                                        <div>
                                        <i v-for="star in (Math.floor(trending.vote_average / 2))" class="fa-solid fa-star"></i>
                                        <i v-for="star in (5 - Math.floor(trending.vote_average / 2))" class="fa-regular fa-star"></i>
                                        </div>
                                    </p>
                                </div>
                                <p class="card__description"> Overview: <span class="overview">{{trending.overview}}</span> </p>
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