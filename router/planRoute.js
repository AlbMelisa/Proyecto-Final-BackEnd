const { Router } = require('express')
const route = Router()
const {addUserPlan ,getPlan, deletePlan,updatePlan} = require('../controllers/planController')

//ruta , middleware , controlador
route.post('/plan',addUserPlan)
route.get('/plan',getPlan)
route.patch('/plan/:id',updatePlan)
route.delete('/plan/:id',deletePlan)

module.exports = route;