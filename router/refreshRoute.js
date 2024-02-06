const { Router } = require('express')
const { handleRefreshToken } = require('../controllers/refreshTokenController')
const route = Router()

route.get('/refresh',handleRefreshToken)

module.exports = route