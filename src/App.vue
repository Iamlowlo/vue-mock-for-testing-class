<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Listado</router-link> |
      <router-link to="/form">Crear</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "appForm",
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/reset.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $c-secondary;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: $c-secondary;

      &.router-link-exact-active {
        color: $c-primary;
      }
    }
  }
</style>
