const user = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken') 
require('dotenv').config()

const addUser = async(request,response) =>{
  try {
    const {nombre,apellido,email,clave,role, refreshToken} = request.body

    const newUser = new user({
      nombre,
      apellido,
      email,
      clave,
      role,
      refreshToken
    })
     const saltRounds = 10
     const salt = bcrypt.genSaltSync(saltRounds)
     const hash = bcrypt.hashSync(clave,salt)
     newUser.clave = hash 
    
     await newUser.save()
     response.status(200).json({message:'Usuario creado exitosamente'})
    } catch (error) {
      response.status(400).json({message:'No se creo'})

  }
}
const getAllUsers = async (request,response) => {
  try {
    const users = user.find({})
    response.status(200).json(users)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar usuarios'})
  }
}

module.exports = {addUser,getAllUsers}