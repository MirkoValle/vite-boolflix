<script>

import axios from "axios";
import { store } from '../store.js'

export default{
    data() {
        return{
            store,
            searchedFilm: "",
        }
    },
    methods:{
        getFilms(){
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&query=" + this.searchedFilm)
            .then((response) => {
                this.store.films = response.data.results
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
        <input type="text" placeholder="Cerca un film" v-model="searchedFilm">
        <button @click="getFilms">Cerca</button>
    </div>

    <div class="risultati">
        <ul v-for="(film, index) in store.films">
            <li> {{ film.title }}</li>
            <li> {{film.original_title}} </li>
            <li> {{ film.original_language }} </li>
            <li> {{ film.vote_average }} </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>