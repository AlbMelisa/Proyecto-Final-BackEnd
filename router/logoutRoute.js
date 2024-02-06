const { Router } = require('express')
const { handleLogout } = require('../controllers/logoutController')

const route = Router()

route.get('/logout',handleLogout)

module.exports = route