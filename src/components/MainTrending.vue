<script>
import { store } from '../store.js'
export default{
    data() {
        return{
            store
        }
    },
}
</script>

<template>
    
    <!-- In tendenza -->
    <h1 v-if="store.searched.length == 0">In tendenza</h1>
    <section v-if="store.searched.length == 0">
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

    <!-- Scelti per te -->
    <h1 v-if="store.searched.length == 0">Scelti per te</h1>
    <section v-if="store.searched.length == 0">
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
</template>

<style lang="scss" scoped>
@use "../../node_modules/@textabledev/langs-flags-list/lang-flags.css" as *;
@use "../styles/singleCards.scss" as *;

.lang-icon {
    background-image: url(../assets/img/lang-flags.png);
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
}

</style>