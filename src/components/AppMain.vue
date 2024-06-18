<script>
import MainFilm from './MainFilm.vue';
import MainTvSeries from './MainTvSeries.vue';
import MainTrending from './MainTrending.vue';
import { store } from '../store.js';
import axios from "axios";


export default{
    data() {
        return{
            store,
        }
    },
    components:{
        MainFilm,
        MainTvSeries,
        MainTrending,
    },
    methods: {
        getTrending(){
            axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it")
            .then((response) => {
                this.store.trending = response.data.results
            })
        },
        getTrendingSecond(){
            axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=905fa6d4e23e042c6b367f07ef9be9ce&language=it&page=2")
            .then((response) => {
                this.store.trendingSecond = response.data.results
            })
        },
    },
    created(){
        this.getTrending();
        this.getTrendingSecond();
    }
}
</script>

<template>
<main>
    <MainTrending />
    <MainFilm />
    <MainTvSeries />

</main>

</template>

<style lang="scss" scoped>
    main{
        height: calc(100vh - 99px);
        padding: 2rem 5rem;
        position: relative;
    }

</style>