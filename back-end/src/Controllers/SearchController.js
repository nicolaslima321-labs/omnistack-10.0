const axios = require('axios')
const Dev = require('../Models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index (request, response) {
    console.log('Funciona')
    console.log('pf')
    const { latitude, longitude, techs } = request.query
    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
      techs: {
        // Mongo operator
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000,
        },
      }
    })
    return response.json( devs )
  }
}
