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
    <h1  v-if="store.films.length == 0 && store.searched.length > 0">Nessun risultato nei Film per la ricerca: {{ store.searched }} </h1>
    <section>
        <article v-for="(film, index) in store.films">
            <div class="cover">
                <img v-if="film.poster_path == null" src="../assets/img/placeholder.bmp" alt="">
                <img v-else :src="'https://image.tmdb.org/t/p/w185' + film.poster_path" alt="">
            </div>
            <div class="info">
                <p> Titolo: <span>{{ film.title }}</span></p>
                <p> Titolo originale: <span>{{film.original_title}}</span> </p>
                <p> Overview: <span class="overview">{{film.overview}}</span> </p>
                <span> <img :src="'https://flagsapi.com/' + film.original_language.toUpperCase() + '/flat/32.png'"></span>
                <div>
                    <i v-for="star in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star"></i>
                    <i v-for="star in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                </div>
            </div>
        </article>
    </section>

</template>

<style lang="scss" scoped>

h1{
    color: white;
    padding-left: 1rem;
    padding-bottom: 1rem;
}
section {
    display: flex;
    overflow: scroll;
    margin-bottom: 3rem;

    article{
        margin: .3rem;
        position: relative;

        div.cover{
            width: 185px;
            height: 281.5px;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        div.info{
            display: none;
            padding: 1rem .5rem;
            position: absolute;
            top: 0;
            z-index: 1;
            background-color:rgba(0, 0, 0, 0.856);
            height: 100%;
            width: 100%;
            


            p{
                color: white;
                span{
                    color: gray;
                }
                span.overview{
                    display: block;
                    max-height: 2rem;
                    overflow: scroll;
                }
            }
            i{
                color: rgb(255, 153, 0);
            }

        }
        &:hover{
            div.cover{
                filter: blur(2px);
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                box-shadow: 0 0 5px rgb(255, 255, 255);
            }
        }
    }
}
</style>