const axios = require('axios');

const getAll = async () => {
  try {
    const { data: { message: breedList }}= await axios.get('https://dog.ceo/api/breeds/list/all')
    const formattedBreeds = Object.keys(breedList).map(breedName => ({
      name: breedName,
      subBreeds: breedList[breedName]
    }))
    return formattedBreeds
  } catch (e) {
    throw new Error('No se han encontrado perretes')
  }
}

const getBreedImages = async (breedName, quantity = 1) => {
  try {
    const { data: { message: images } } = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random/${quantity}`)
    return images
  } catch (e) {
    throw new Error('No se han encontrado perretes')
  }
}

const getSubBreedImages = async (breedName, subBreedName, quantity = 1) => {
  try {
    const { data: { message: images } } = await axios.get(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images/random/${quantity}`)
    return images
  } catch (e) {
    throw new Error('No se han encontrado perretes')
  }
}

export default {
  getAll,
  getBreedImages,
  getSubBreedImages
}
