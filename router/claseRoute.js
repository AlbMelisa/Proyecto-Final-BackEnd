const { Router } = require('express')
const route = Router()
const {addClase} = require('../controllers/clasesController')


route.post('/clase',addClase)


module.exports = route;