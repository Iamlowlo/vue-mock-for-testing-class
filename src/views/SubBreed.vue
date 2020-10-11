<template>
  <section class="sub-breed">
    <h1 class="sub-breed__title">{{activeBreed.name}} - {{activeSubBreed.name}}</h1>
    <ul class="sub-breed__list">
      <li v-for="(subBreedImage, index) in activeSubBreed.images"
          :key="`subBreed-${index}`"
          class="sub-breed__element">
        <img :src="subBreedImage"
             :alt="`Sub-breed image number ${index}`"
             class="sub-breed__image"></li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'SubBreed',
    created () {
      this.fetchData()
    },
    computed: {
      ...mapGetters(['activeBreed', 'activeSubBreed'])
    },
    methods: {
      ...mapActions(['getSubBreedImages']),
      ...mapMutations(['setActiveBreed', 'setActiveSubBreed']),
      fetchData() {
        if (!(this.activeBreed && this.activeBreed.name)) {
          this.setActiveBreed({ name: this.$route.params.breedName })
        }
        if (!(this.activeSubBreed && this.activeSubBreed.name)) {
          this.setActiveSubBreed({ name: this.$route.params.subBreedName })
        }
        this.getSubBreedImages({ breedName: this.activeBreed.name, subBreedName: this.activeSubBreed.name, amount: 3 })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .sub-breed {
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
