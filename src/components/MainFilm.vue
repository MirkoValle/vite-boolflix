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
                    <p class="card__description"> Overview: <span class="overview">{{film.overview}}</span> </p>
                    <div class="bottom-info">
                        <p class="card__description"> <span> <img :src="'https://flagsapi.com/' + film.original_language.toUpperCase() + '/flat/32.png'"></span> </p>
                        <p class="card__description"> 
                            <div>
                            <i v-for="star in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star"></i>
                            <i v-for="star in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                            </div>
                        </p>
                    </div>
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
h1.vuoto{
        margin-top: 10rem;
    }

section{
    display: flex;
    overflow: scroll;
}

.card {
    position: relative;
    width: 185px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: .5rem;
}

.card .cover {
    width: 100%;
    height: 281.5px;
    object-fit: cover;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    img{
        width: 100%;
        height: 281.5px;
    }
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000000d2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    transform: rotateX(0deg);
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #ffffff;
    font-weight: 700;
    max-height: 5.2rem;
    overflow: hidden;
}

.card:hover .cover {
    filter: blur(5px);
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #ffffff;
    line-height: 1.4;

    span{
        color: #afafaf;

        }
}
        
        span.overview{
            display: block;
            max-height: 1rem;
            overflow: hidden;
        }

div.bottom-info{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

i{
    color: orange;
}

</style>