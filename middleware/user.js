const {Router} = require('express')
const route = Router()
const {body} = require('express-validator')
const {addUser} = require('../controllers/userControllers')

route.post('/user',
body('nombre').trim().notEmpty().withMessage('El nombre no puede esta vacio').isLength({min:3 , max:50}),
body('apellido').trim().notEmpty().withMessage('El apellido no puede esta vacio').isLength({min:3 , max:50}),
body('email').trim().notEmpty().withMessage('El email no puede esta vacio').isEmail().withMessage('el dato debe ser del tipo email').isLength({min:10 , max:50}),
body('clave').trim().notEmpty().withMessage('El clave no puede esta vacio').isLength({min:8 , max:50}).withMessage('Longitud minima de 8, maxima de 50'),
body('role').trim().notEmpty().withMessage('El role no puede esta vacio').isLength({min:4 , max:50}),
body('refreshToken').trim().notEmpty().withMessage('El refreshToken no puede esta vacio').isLength({min:4 , max:50}),
addUser)