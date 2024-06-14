<script>

import axios from "axios";
import { store } from '../store.js'

export default{
    data() {
        return{
            store,
        }
    },
    methods:{
        getFilms(){
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&query=" + this.store.searched)
            .then((response) => {
                this.store.films = response.data.results
                console.log(response.data.results)
            })
        },

        getTvSeries(){
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&query=" + this.store.searched)
            .then((response) => {
                this.store.tvSeries = response.data.results
                console.log(response.data.results)
            })
        }
    },
    created(){

    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Cerca un film" @keyup.enter="getFilms(); getTvSeries();" v-model="this.store.searched">
        <button @click="getFilms(); getTvSeries();">Cerca</button>
    </div>

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