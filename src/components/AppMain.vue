<script>
import MainFilm from './MainFilm.vue';
import MainTvSeries from './MainTvSeries.vue';

export default{
    data() {
        return{
 
        }
    },
    components:{
        MainFilm,
        MainTvSeries,
    },
}
</script>

<template>
<main>
    <MainFilm />
    <MainTvSeries />

</main>

</template>

<style lang="scss" scoped>
    main{
        background-color: #212121;
        height: calc(100vh - 99px);
        padding: 2rem 5rem;
    }

</style>