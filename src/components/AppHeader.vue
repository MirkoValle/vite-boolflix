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
            userLinks:[
                {
                    id: 0,
                    name: "Gestisci i profili",
                    icon: "fa-solid fa-pencil",
                },
                {
                    id: 1,
                    name: "Trasferisci profilo",
                    icon: "fa-regular fa-share-from-square",
                },
                {
                    id: 2,
                    name: "Account",
                    icon: "fa-regular fa-user",
                },
                {
                    id: 3,
                    name: "Centro assistenza",
                    icon: "fa-regular fa-circle-question",
                },
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


    },
    created(){
        this.changeIndex(0)
    },
}
</script>

<template>
    <section>
        <div class="logo">
            <img src="../assets/img/Logo.png" alt="">
            <nav>
                <ul class="header-nav">
                    <li v-for="(link, index) in headerLinks" :key="index" :class="(link.active == 'true') ? 'active' : ''" @click="changeIndex(index)">
                        {{ link.name }}
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <SearchBar @search="getFilms(); getTvSeries();"/>
            <i class="fa-solid fa-bell">
                <div class="dropdown">
                    <div class="text-area">
                        <p>Non ci sono notifiche</p>
                    </div>
                    <i class="fa-solid fa-caret-up"></i>
                </div>
            </i>
            <div class="user-section">
                <i class="fa-solid fa-user user"></i>
                <i class="fa-solid fa-caret-down down"></i>
                <div class="dropdown">
                    <div class="text-area">
                        <ul class="dropdown-list">
                            <li v-for="(link, index) in userLinks" :key="index">
                                <i :class=" link.icon "></i>
                                <p>{{ link.name }}</p>
                            </li>
                        </ul>
                        <p class="exit">Esci da Boolflix</p>
                    </div>
                    <i class="fa-solid fa-caret-up"></i>
                </div>
            </div>
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
                font-size: 1.5rem;
                color: white;
                margin-right: 1rem;
                cursor: pointer;
                position: relative;
                &:hover div.dropdown{
                    display: inline-block;
                }
                div.dropdown{
                    display: none;

                    div.text-area{
                        top: 3.35rem;
                        right: .19rem;
                        background-color: rgb(0, 0, 0);
                        border: 2px solid white;
                        position: absolute;
                        padding: 1rem;
                        width: 15rem;
                            p{
                                font-size: 1rem;
                                width: 100%;
                                text-align: center;
                                color: #838383;
                            }
                    }
                    i{
                        top: 2.5rem;
                        left: .2rem;
                        position: absolute;
                    }
                }
            }
            
            div.user-section{
                position: relative;
                &:hover div.dropdown{
                    display: inline-block;
                    position: absolute;
                }
                
                i.user{
                    color: white;
                    margin-right: 1rem;
                    background-color: #838383;
                    padding: .6rem;
                    border-radius: 50%;
                    margin-right: .2rem;
                }
                i.down{
                    transition: transform 0.3s;
                }
                &:hover i.down{
                    transform: rotate(180deg);
                }
                div.dropdown{
                        z-index: 1;
                        transition:  opacity 0.5s ease;
                        display: none;
                        height: 1.5rem;
                        width: 18rem;
                        position: absolute;
                        bottom: -1rem;
                        right: .1rem;
                        div.text-area{
                            top: 1.25rem;
                            right: 2.65rem;
                            background-color: rgb(0, 0, 0);
                            border: 2px solid white;
                            position: absolute;
                            width: 15rem;
                            display: flex;
                            flex-direction: column;
                                ul.dropdown-list{
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    width: 100%;
                                    padding: 2rem 2rem 1rem 2rem;
                                    li{
                                        width: 100%;
                                        margin: 0;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        margin-bottom: 1rem;
                                        cursor: pointer;

                                        &:hover p{
                                            text-decoration: underline;
                                        }

                                        i{
                                            position: relative;
                                            top: 0;
                                            left: 0;
                                            color: #b3b3b3;
                                            min-width: 27px;
                                        }
                                        p{
                                            font-size: 1rem;
                                            width: 100%;
                                            color: #ffffff;

                                        }
                                    }
                                }
                                p.exit{
                                    cursor: pointer;
                                    padding: 1rem 0;
                                    color: white;
                                    width: 100%;
                                    text-align: center;
                                    border-top: 1px solid white;
                                    &:hover {
                                            text-decoration: underline;
                                        }
                                }
                        }
                        i{
                            top: .4rem;
                            right: 1.7rem;
                            position: absolute;
                        }
                        
                    
            }
        }
    }
    div.logo{

        ul.header-nav{
            display: flex;
            li{
                color: white;
                margin-left: 3rem;
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
}
</style>