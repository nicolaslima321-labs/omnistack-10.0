const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ..) ex: www.sample.com/users?search=nicolas
// Route Params: request.params (Identificar um recurso na alteração ou remoção) ex: www.sample.com/users/1
// Body: request.body (Dados para criação) 

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

routes.post('/devs', async (request, response) => {
	const { github_username, techs, latitude, longitude } = request.body
	
	const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
	
	const { name = login, avatar_url, bio } = apiResponse.data
	
	const techsArray = techs.split(',').map(tech => tech.trim())

	const location = {
		type: 'Point',
		coordinates: [longitude, latitude]
	}

	// Short syntax, same propertie and value name can be simplified
	const dev = await Dev.create({
		github_username: github_username,
		name,
		avatar_url,
		bio,
		techs: techsArray,
		location
	})

  return response.json({ dev })
})

module.exports = routes