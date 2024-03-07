require('dotenv').config()
const express = require('express')
const {corsOptions} = require('./config/corsOptions')
const cors = require('cors')
const app = express()
const credentials = require('./middleware/credentials')
const mongoose = require('mongoose')
const {connectionDB} = require('./database/planDB')
const addUserPlan = require('./router/planRoute')
const addProducto = require('./router/productosRoute')
const getProductos = require('./router/productosRoute')
const addUser = require('./router/userRoute')
const getAllUsers = require('./router/userRoute')
const addClase = require('./router/claseRoute')
const loginUser = require('./router/authRoute')
const refreshToken = require('./router/refreshRoute')
const handleLogout = require('./router/logoutRoute')
const deleteUser  = require('./router/userRoute')
const updateUser = require('./router/userRoute')
const addAlumnos = require('./router/claseRoute')
const getClases = require('./router/claseRoute')
const getPlan = require('./router/planRoute')
const deletePlan = require('./router/planRoute')
const deleteClase = require('./router/claseRoute')
const updateClase = require('./router/claseRoute')
const getFecha = require('./router/claseRoute')
const updatePlan = require('./router/planRoute')
const getUserPlan = require('./router/planRoute')
const cookieParser = require('cookie-parser')

app.use(credentials)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
//declaro app.(metodo)(ruta,funcion)

//User
app.use('/',addUser)
app.use('/',getAllUsers)
app.use('/',deleteUser)
app.use('/',updateUser)

//Clase
app.use('/',addClase)
app.use('/',getClases)
app.use('/',deleteClase)
app.use('/',updateClase)
app.use('/',addAlumnos)
app.use('/',getFecha)


//Plan
app.use('/',addUserPlan)
app.use('/',getPlan)
app.use('/',deletePlan)
app.use('/',updatePlan)
app.use('/',getUserPlan)


//Productos
app.use('/',addProducto)
app.use('/',getProductos)

//Token
app.use('/',loginUser)
app.use('/',refreshToken)
app.use('/',handleLogout)


app.listen(process.env.PORT,()=> console.log(`escuchando en el puerto ${process.env.PORT}`))