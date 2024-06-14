<script>
import MainFilm from './MainFilm.vue';
import MainTvSeries from './MainTvSeries.vue';

import { store } from '../store.js'

export default{
    data() {
        return{
            store,
        }
    },
    components:{
        MainFilm,
        MainTvSeries,
    },
}
</script>

<template>

    <section class="risultati">
        <ul v-for="(film, index) in store.films">
            <img :src="'https://image.tmdb.org/t/p/w154' + film.poster_path" alt="">
            <li> {{ film.title }}</li>
            <li> {{film.original_title}} </li>
            <li> {{ film.original_language }} </li>
            <img :src="'https://flagsapi.com/' + film.original_language.toUpperCase() + '/flat/32.png'">
            <div>
                <i v-for="star in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
            </div>
        </ul>
        <ul v-for="(tvSerie, index) in store.tvSeries">
            <img :src="'https://image.tmdb.org/t/p/w154' + tvSerie.poster_path" alt="">
            <li> {{ tvSerie.name }}</li>
            <li> {{ tvSerie.original_name}} </li>
            <li> {{ tvSerie.original_language }} </li>
            <img :src="'https://flagsapi.com/' + tvSerie.original_language.toUpperCase() + '/flat/32.png'">
            <div>
                <i v-for="star in (Math.floor(tvSerie.vote_average / 2))" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - Math.floor(tvSerie.vote_average / 2))" class="fa-regular fa-star"></i>
            </div>
        </ul>
    </section>
</template>

<style lang="scss" scoped>

</style>