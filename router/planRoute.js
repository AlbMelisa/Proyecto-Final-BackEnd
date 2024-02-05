const { Router } = require('express')
const route = Router()
const {addUserPlan} = require('../controllers/planController')

//ruta , middleware , controlador
route.post('/plan',addUserPlan)


module.exports = route;