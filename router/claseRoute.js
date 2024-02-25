const { Router } = require('express')
const route = Router()
const {addClase, addAlumnos, getClases} = require('../controllers/clasesController')


route.get('/clase',getClases)
route.post('/clase',addClase)
route.patch('/clase/:claseId',addAlumnos)

module.exports = route;