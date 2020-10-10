<template>
  <section class="app-detail">
    <h1>{{activeBreed.name}}</h1>
    <ul class="app-detail__group">
      <li v-for="(image, index) in activeBreed.images"
          :key="`app-detail-image-${index}`"
          class="app-detail__element">
        <img :src="image" :alt="`imagen of ${activeBreed.name} number ${index+1}`">
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'appDetail',
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-detail {
    &__group {
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
