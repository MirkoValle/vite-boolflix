<script>
    import SearchBar from './SearchBar.vue';
    import { store } from '../store.js';
    import axios from "axios";

export default{
    data() {
        return{
            store,
            headerLinks:[
                {
                    id: 0,
                    name: "Home",
                    active: true,
                },
                {
                    id: 1,
                    name: "Film",
                    active: false,
                },
                {
                    id: 2,
                    name: "Serie TV",
                    active: false,
                },
                {
                    id: 3,
                    name: "Nuovi e popolari",
                    active: false,
                },
                {
                    id: 4,
                    name: "La mia lista",
                    active: false,
                }
            ],
            activeLink: 0,
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
        },

        changeIndex:function(index){
            this.activeLink = index;
            this.changeActive()
        },

        changeActive: function(){
            this.headerLinks.forEach((link, index) => {
                if (index == this.activeLink) {
                    link.active = 'true';
                } else {
                    link.active = 'false'
                }
            });
    },
}
}
</script>

<template>
    <section>
        <div class="logo">
            <img src="../assets/img/Logo.png" alt="">
            <nav>
                <ul>
                    <li v-for="(link, index) in headerLinks" :key="index" :class="(link.active == 'true') ? 'active' : ''" @click="changeIndex(index)">
                        {{ link.name }}
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <SearchBar @search="getFilms(); getTvSeries();"/>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user user"></i>
            <i class="fa-solid fa-caret-down"></i>
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

        div{
            display: flex;
            align-items: center;
            i{
                color: white;
                margin-right: 1rem;
                cursor: pointer;
            }
            i.user{
                color: white;
                margin-right: 1rem;
                background-color: #838383;
                padding: .6rem;
                border-radius: 50%;
                margin-right: .2rem;
            }
        }
        ul{
            display: flex;
            li{
                color: white;
                margin-left: 1rem;
                cursor: pointer;
                color: #b6b6b6;

                &.active{
                    color: white;
                    cursor: default;
                    &:hover{
                    color: white;
                    }   
                    
                }

                &:hover{
                    color: #838383;
                }
            }

        }
    }
</style>