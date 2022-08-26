<template>
  <div class="app-menu">
    <header-menu />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
    components: {
        HeaderMenu
    }
};
</script>

<style>
  .app-menu{
    text-align: center;
  }
  a{
    text-decoration-line: none;
    color: black;
  }
</style>