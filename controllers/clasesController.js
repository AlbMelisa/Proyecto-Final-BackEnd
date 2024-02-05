const nuevaClase = require('../models/clases')

const addClase = async (request,response) => {  
  try {
   const { descripcion, profesor, fecha, hora , id}  = request.body
  
   const clase = new nuevaClase({
    descripcion,
    profesor,
    fecha,
    hora,
    id
   })
  
   await clase.save()
   response.status(200).json({message:'Clase creado exitosamente'})
 } catch (error) {
  response.status(400).json({error})
 }
}
const getClases = async (request,response) => {
  try {
    const clase = nuevaclase.find({})
    response.status(200).json(clase)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar las clases'})
  }
}
module.exports = { addClase }