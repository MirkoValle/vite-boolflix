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
        <input type="text" placeholder="Cerca un film" v-model="this.store.searched">
        <button @click="getFilms(); getTvSeries();">Cerca</button>
    </div>

    <section class="risultati">
        <ul v-for="(film, index) in store.films">
            <li> {{ film.title }}</li>
            <li> {{film.original_title}} </li>
            <li> {{ film.original_language }} </li>
            <img :src="'https://flagsapi.com/' + film.original_language.toUpperCase() + '/flat/32.png'">
            <li> {{ film.vote_average }} </li>
        </ul>
        <ul v-for="(tvSerie, index) in store.tvSeries">
            <li> {{ tvSerie.name }}</li>
            <li> {{ tvSerie.original_name}} </li>
            <li> {{ tvSerie.original_language }} </li>
            <img :src="'https://flagsapi.com/' + tvSerie.original_language.toUpperCase() + '/flat/32.png'">
            
            <li> {{ tvSerie.vote_average }} </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>

</style>