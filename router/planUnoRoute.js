const {Router} = require('express')
const route = Router()
const {addUserPlan} = require('../controllers/planUnoController')

//ruta , middleware , controlador
route.post('/planUno',addUserPlan)


module.exports = route;