import Vue from 'vue'
import Vuex from 'vuex'
import dogService from '@/services/DogService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    breeds: [],
    activeBreed: {
      name: '',
      images: [],
      subBreeds: []
    },
    activeSubBreed: {
      name: '',
      images: []
    }
  },
  actions: {
    getAllBreeds: async ({ commit }) => {
      const breeds = await dogService.getAll()
      commit('setBreeds', breeds)
    },
    getBreedImages: async ({ commit }, { breedName, amount }) => {
      const breedImages = await dogService.getBreedImages(breedName, amount)
      commit('setBreedImages', { images: breedImages })
    },
    getSubBreedImages: async ({ commit }, { breedName, subBreedName, amount }) => {
      const subBreedImages = await dogService.getSubBreedImages(breedName, subBreedName, amount)
      commit('setActiveSubBreed', { images: subBreedImages })
    },
  },
  mutations: {
    setBreeds: (state, breeds) => {
      state.breeds = [...breeds]
    },
    setActiveBreed: (state, {name, images, subBreeds}) => {
      if (name) {
        state.activeBreed.name = name
      }
      if (subBreeds) {
        state.activeBreed.subBreeds = subBreeds
      }
      if (images) {
        state.activeBreed.images = images
      }
    } ,
    setActiveSubBreed: (state, {name, images}) => {
      if (name) {
        state.activeBreed.name = name
      }
      if (images) {
        state.activeBreed.images = images
      }
    }
  },
  getters: {}
})
