const { Router } = require('express')
const route = Router()
const {addUser, getAllUsers, getUser} = require('../controllers/userControllers')
const { verifyToken } = require('../middleware/tokenValidation')

route.post('/user',addUser)
route.get('/user',verifyToken,getAllUsers)

module.exports = route
