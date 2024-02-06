const user = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const loginUser = async (request,response) => {
  try {
   const {email, clave} = request.body

   const findUser = await user.findOne({email}) 
   if(!findUser) return response.status(400).json({message: 'El usuario no existe'})
 
   const isMatch = bcrypt.compareSync(clave, findUser.clave)
   if(!isMatch) return response.status(400).json({message: 'La clave no es correcta'})
 
   const accessToken = jwt.sign({
    email: findUser.email,
    id: findUser._id, 
    role: findUser.role, 
    nombre: findUser.nombre
  }, process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: '30s'
     })

     const refreshToken = jwt.sign({
      email: findUser.email,
      id: findUser._id, 
      role: findUser.role, 
      nombre: findUser.nombre
     },process.env.REFRESH_TOKEN_SECRET,{
      expiresIn: '1d'
     })
     findUser.refreshToken = refreshToken

     await findUser.save()

     response.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000})
    response.status(200).json({accessToken})

  } catch (error) {
   response.status(500).json(error)
 
  }
 }
 module.exports = {loginUser}