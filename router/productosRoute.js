const {Router} = require('express')
const route = Router()

const { addProductos, getProductos } = require('../controllers/productosController')

route.post('/productos',addProductos)
route.get('/productos', getProductos)

module.exports = route