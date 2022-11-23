<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

  export default {
    components: {
      NavBar,
    },
  };
</script>

<style lang="scss">
  @import "./styles/stylesheet.scss";
</style>