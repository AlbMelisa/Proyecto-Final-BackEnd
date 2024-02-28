const { Router } = require('express')
const route = Router()
const {addClase, addAlumnos, getClases, deleteClase,updateClase} = require('../controllers/clasesController')


route.get('/clase',getClases)
route.post('/clase',addClase)
route.patch('/clase/:claseId',addAlumnos)
route.put('/clase/modificar/:id',updateClase)
route.delete('/clase/:id',deleteClase)


module.exports = route;