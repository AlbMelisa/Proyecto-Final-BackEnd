const user = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken') 
require('dotenv').config()

const addUser = async(request,response) =>{
  try {
    const {nombre,apellido,email,clave,role, refreshToken} = request.body

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return response.status(400).json({ message: 'El usuario ya existe' });
    }
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
      response.status(400).json({message:'No se creo correctamente'})

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
const deleteUser = async (req, res) => {
  
  const {id} = req.params
  try {
      const User = await user.findByIdAndDelete(id);
  
      if (!User) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ message: 'Usuario eliminado correctamente',User});
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };
  const updateUser = async (request, response) => {
    const {id} = request.params;
    const { nombre, apellido, email, clave, role } = request.body;

    try {
      const User = await user.findById(id);
      
      if (!User) {
        return response.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      if (nombre) User.nombre = nombre;
      if (apellido) User.apellido = apellido;
      if (email) User.email = email;
      if (clave) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        User.clave = hash;
      }
      if (role) User.role = role;
  
      await User.save();
  
      response.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
      response.status(500).json(error);
    }
  };




module.exports = {addUser, getAllUsers, deleteUser, updateUser}