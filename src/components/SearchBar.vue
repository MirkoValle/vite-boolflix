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

    <input placeholder="Cerca" class="input" name="text" type="text" v-model="this.store.searched" @keyup="$emit('search')">
</template>

<style lang="scss" scoped>
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
</style>