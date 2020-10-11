<template>
  <section class="home">
    <h1 class="home__title">Listado</h1>
    <ul class="home__list">
      <li v-for="(breed, index) in breeds"
          :key="`appList-${index}`"
          class="home__element"
          @click="selectBreed(breed.name)"
      >{{breed.name}}</li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'home',
    computed: {
      ...mapGetters(['breeds', 'getBreedByName'])
    },
    methods: {
      ...mapActions(['getAllBreeds']),
      ...mapMutations(['setActiveBreed']),
      selectBreed(breedName) {
        const selectedBreed = this.getBreedByName(breedName)
        this.setActiveBreed(selectedBreed)
        this.$router.push({ name: 'Breed', params: { name: breedName }})
      }
    },
    mounted() {
      this.getAllBreeds()
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      max-width: 800px;
      padding: 16px 0;
    }
    &__element {
      padding: 8px;
    }
  }
</style>
