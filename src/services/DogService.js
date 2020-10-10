const axios = require('axios');

const getAll = async () => {
  try {
    const { message: breedList} = await axios.get('https://dog.ceo/api/breeds/list/all')
    return breedList
  } catch (e) {
    throw new Error('No se han encontrado perretes')
  }
}

const getBreedImages = async (breedName, quantity = 1) => {
  try {
    const { message: images} = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random/${quantity}`)
    return images
  } catch (e) {
    throw new Error('No se han encontrado perretes')
  }
}

const getSubBreedImages = async (breedName, subBreedName, quantity = 1) => {
  try {
    const { message: images} = await axios.get(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images/random/${quantity}`)
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
