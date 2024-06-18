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
    <div>
        <input placeholder="Cerca" class="input" name="text" type="text" v-model="this.store.searched" @keyup="$emit('search')">
        <i v-if="this.store.searched.length > 0" class="fa-solid fa-xmark" @click="this.store.searched=''"></i>
    </div>
</template>

<style lang="scss" scoped>
div{
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
</style>