<template>
  <header class="main-header">
    <h1 class="main-header__title">Vue Mock for Testing</h1>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
.main-header {
  background-color: $c-primary--lightest;

  &__title {
    font-size: 2rem;
  }
}
</style>
