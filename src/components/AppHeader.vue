<script>
    import SearchBar from './SearchBar.vue';
    import { store } from '../store.js';
    import axios from "axios";

export default{
    data() {
        return{
            store,
        }
    },
    components:{
    SearchBar,
    },
    methods:{
        getFilms(){
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&query=" + this.store.searched)
            .then((response) => {
                this.store.films = response.data.results
            })
        },

        getTvSeries(){
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&query=" + this.store.searched)
            .then((response) => {
                this.store.Series = response.data.results
            })
        }
    },
}
</script>

<template>
    <section>
        <div class="logo">
            <img src="../assets/img/Logo.png" alt="">
        </div>
        <div>
            <SearchBar @search="getFilms(); getTvSeries();"/>
        </div>

    </section>
</template>

<style lang="scss" scoped>
    section{
        background-color: #212121;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5rem 0 2rem;

    }
</style>