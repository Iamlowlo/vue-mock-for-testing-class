<template>
  <section class="breed">
    <h1>{{activeBreed.name}}</h1>
    <div v-if="activeBreed.subBreeds.length" class="breed__sub-breeds">
      <h2 class="breed__sub-breeds__title">Sub breeds:</h2>
      <ul class="breed__sub-breeds__list">
        <li v-for="(subbreed, subBreedIndex) in activeBreed.subBreeds"
            :key="`subbreed-element-${subBreedIndex}`"
            class="breed__sub-breeds__element"
            @click="goToSubBreed(subbreed)"
        >{{subbreed}}</li>
      </ul>
    </div>
    <ul class="breed__list">
      <li v-for="(image, index) in activeBreed.images"
          :key="`breed-image-${index}`"
          class="breed__element">
        <img :src="image" :alt="`imagen of ${activeBreed.name} number ${index+1}`">
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'breed',
    data: () => ({
      breed: {}
    }),
    created () {
      this.fetchData()
    },
    computed: {
      ...mapGetters(['activeBreed', 'getBreedByName'])
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      ...mapActions(['getBreedImages']),
      ...mapMutations(['setActiveBreed']),
      fetchData() {
        if (!(this.activeBreed && this.activeBreed.name)) {
          this.setActiveBreed({ name: this.$route.params.name })
        }
        this.getBreedImages({ name: this.activeBreed.name, amount: 3 })
      },
      goToSubBreed(subBreedName) {
        this.$router.push({ name: 'SubBreed', params: { breedName: this.activeBreed.name, subBreedName} })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .breed {
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
