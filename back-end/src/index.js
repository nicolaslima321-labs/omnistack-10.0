const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

mongoose.connect('mongodb+srv://omnistack:omnistack@clusterlearning-83fyg.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
