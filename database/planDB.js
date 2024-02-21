const mongoose = require('mongoose')
require('dotenv').config()

const connectionDB = async()=>{
  try {
    await mongoose.connect(process.env.DB_CONNECTION)
    console.log('conexion exitosa')
  } catch (error) {
    console.log('Hay un error ',error)
  }
}

connectionDB()


module.exports ={connectionDB}