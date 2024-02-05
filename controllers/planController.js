const userPlan = require('../models/Plan')

const addUserPlan = async (request,response) => {  
  try {
   const { nombre, apellido, telefono, email, infoUno, infoDos, infoTres }  = request.body
  
   const newUserPlan = new userPlan({
    nombre,
    apellido,
    telefono,
    email,
    infoUno,
    infoDos,
    infoTres
   })
  
   await newUserPlan.save()
   response.status(200).json({message:'Plan creado exitosamente'})
 } catch (error) {
  response.status(400).json({error})
 }
}
module.exports = { addUserPlan }