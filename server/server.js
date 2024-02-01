require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {connectionDB} = require('../database/planUnoDB')
const addUserPlan = require('../router/planUnoRoute')

app.use(express.json())

//declaro app.(metodo)(ruta,funcion)
app.use('/',addUserPlan)




app.listen(process.env.PORT,()=> console.log(`escuchando en el puerto ${process.env.PORT}`))