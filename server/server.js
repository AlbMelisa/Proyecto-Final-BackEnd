require('dotenv').config()
const express = require('express')
const {corsOptions} = require('../config/corsOptions')
const cors = require('cors')
const app = express()
const credentials = require('../middleware/credentials')
const mongoose = require('mongoose')
const {connectionDB} = require('../database/planUnoDB')
const addUserPlan = require('../router/planUnoRoute')

app.use(credentials)
app.use(cors(corsOptions))
app.use(express.json())

//declaro app.(metodo)(ruta,funcion)
app.use('/',addUserPlan)




app.listen(process.env.PORT,()=> console.log(`escuchando en el puerto ${process.env.PORT}`))