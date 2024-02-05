const { Router } = require('express')
const route = Router()
const {addUser, getAllUsers} = require('../controllers/userControllers')

route.post('/user',addUser)
route.get('/user',getAllUsers)

module.exports = route
