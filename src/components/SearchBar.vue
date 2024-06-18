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
    <div class="section">
        <input placeholder="Cerca" class="input" name="text" type="text" v-model="this.store.searched" @keyup="$emit('search')">
        <!-- WORK IN PROGRESS -->
        <!-- <div class="container" >
            <div class="line "></div>
            <div class="line "></div>
        </div> -->
        <i v-if="this.store.searched.length > 0" class="fa-solid fa-xmark" @click="this.store.searched=''"></i>
    </div>
</template>

<style lang="scss" scoped>
div.section{
    position: relative;
    display: flex;
    align-items: center; 
}

.input {
    margin: 30px;
    background: none;
    border: none;
    outline: none;
    max-width: 190px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 9999px;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
    color: #fff;
}

i{
    position: absolute;
    right: 3rem;
    cursor: pointer;
    color: #fff;
}

    // .container{
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    //     width: 6rem;
    //     height: 2rem;
    //     animation: animazione-container 5s linear infinite;
    //     position: absolute;
    //     right: 3rem;
    //     cursor: pointer;
    //     color: #fff;
    // }

    // .line{
    //     width: 50%;
    //     height: .2rem;
    //     background-color: white;
    //     border-radius: .25rem;

    //     &:first-child{
    //         animation: animazione-primo 5s linear infinite;
    //     }

    //     &:last-child{
    //         animation: animazione-secondo 5s linear infinite;
    //     }
    // }

    // @keyframes animazione-container{
    //     0%{
    //         justify-content: space-between;
    //         height: 2rem;
    //     }
    //     50%{
    //         justify-content: center;
    //         height: 6rem;
    //     }
    //     100%{
    //         justify-content: space-between;
    //         height: 2rem;
    //     }
    // }

    // @keyframes animazione-primo {
    //     0%{
    //         transform: rotate(0deg);
    //         margin-bottom: 0;
    //     }
    //     50%{
    //         transform: rotate(45deg);
    //         margin-bottom: -0.13rem;
    //     }
    //     100%{
    //         transform: rotate(0deg);
    //         margin-bottom: 0;
    //     }
    // }

    // @keyframes animazione-secondo{
    //     0%{
    //         transform: rotate(0deg);
    //     }
    //     50%{
    //         transform: rotate(-45deg);
    //     }
    //     100%{
    //         transform: rotate(0deg);
    //     }
    // }
</style>