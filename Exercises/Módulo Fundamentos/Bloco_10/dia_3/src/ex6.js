const fecth = require('node-fetch')

const showPicutres = async () => {
    const response = await fecth('https://dog.ceo/api/breeds/image/random')
    const date = await response.json()
    return date
}
module.exports = { showPicutres }