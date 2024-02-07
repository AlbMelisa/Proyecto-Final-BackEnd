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
    const users = await user.find({})
    response.status(200).json(users)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar usuarios'})
  }
}
const deleteUser = async (request, res) => {
  try {
    const User = await user.findById(req.params.id);
  
    if (User === null) {
      res.status(404);
      return res.json({ message: "Usuario no encontrado" });
    }
  
    const idUser = req.params.id;
  
    const filters = { idUser };
    await alumno.deleteOne(filters);
    
    response.status(200).json({message:'Usuario eliminado con exito encontrar usuarios'})
  } catch (error) {
    response.status(400).json({message:'no se pudo encontrar el usuario'})
  }
};
const actualizarUsuario = async (req, res) => {

  const usuario = await Alumno.findById(req.params.id);

  if (!usuario) {
    res.status(404);
    return res.json({ message: "Usuario no encontrado" });
  }

  

 
};



module.exports = {addUser,getAllUsers,deleteUser}