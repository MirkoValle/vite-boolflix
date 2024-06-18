<script>
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  import "@fontsource/roboto";

  export default{
    components:{
      AppMain,
      AppHeader,
    }
  }
</script>

<template>
  <div class="container-main">
    <AppHeader />
    <AppMain />
  </div>

</template>

<style lang="scss">
@use "./styles/general.scss";

.container-main {
  width: 100vw;
  height: 100vh;
  background-color: #111111;
  background-image: linear-gradient(
    32deg,
    rgba(8, 8, 8, 0.74) 30px,
    transparent
  );
  background-size: 60px 60px;
  background-position: -5px -5px;
}

</style>