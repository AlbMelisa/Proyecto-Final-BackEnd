const { Router } = require('express')
const route = Router()
const {addUser, getAllUsers, getUser} = require('../controllers/userControllers')
const {body} = require('express-validator')
const { verifyToken } = require('../middleware/tokenValidation')
const {deleteUser} = require('../controllers/userControllers')

route.post('/user',
body('nombre').trim().notEmpty().withMessage('El nombre no puede esta vacio').isLength({min:3 , max:50}),
body('apellido').trim().notEmpty().withMessage('El apellido no puede esta vacio').isLength({min:3 , max:50}),
body('email').trim().notEmpty().withMessage('El email no puede esta vacio').isEmail().withMessage('el dato debe ser del tipo email').isLength({min:10 , max:50}),
body('clave').trim().notEmpty().withMessage('El clave no puede esta vacio').isLength({min:8 , max:50}).withMessage('Longitud minima de 8, maxima de 50'),
body('role').trim().notEmpty().withMessage('El role no puede esta vacio').isLength({min:4 , max:50}),
body('refreshToken').trim().notEmpty().withMessage('El refreshToken no puede esta vacio').isLength({min:4 , max:50}),
addUser)

route.get('/user',verifyToken,getAllUsers)
route.delete('/user',deleteUser)

module.exports = route
