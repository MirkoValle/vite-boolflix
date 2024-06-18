<script>
import { store } from '../store.js'

export default{
    data() {
        return{
            store,
        }
    }
}
</script>

<template>

    <h1 v-if="store.films.length > 0">Film</h1>
    <h1 class="vuoto"  v-if="store.films.length == 0 && store.searched.length > 0">Nessun risultato nei Film per la ricerca: {{ store.searched }} </h1>
    <section>
        <article v-for="(film, index) in store.films">
            <div class="card">
                <div class="cover">
                    <img v-if="film.poster_path == null" src="../assets/img/placeholder.bmp" alt="">
                    <img v-else :src="'https://image.tmdb.org/t/p/w185' + film.poster_path" alt="">
                </div>
                <div class="card__content">
                    <p class="card__title">{{ film.title }}</p>
                    <p class="card__description">Titolo originale: <span>{{film.original_title}}</span> </p>
                    <div class="bottom-info">
                        <p class="card__description"> <span> <img class="lang-icon" :class="'lang-icon-' + film.original_language"></span> </p>
                        <p class="card__description"> 
                            <div>
                            <i v-for="star in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star"></i>
                            <i v-for="star in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                            </div>
                        </p>
                    </div>
                    <p class="card__description"> Overview: <span class="overview">{{film.overview}}</span> </p>
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
}
section:first-child{
    margin-bottom: 2rem;
}

</style>