const userPlan = require('../models/planUnoModels')

const addUserPlan = async (request,response)=>{  
  try {
   const { nombre, apellido, telefono, email, infoUno, infoDos, infoTres , role}  = request.body
  
   const newUserPlan = new userPlan({
    nombre,
    apellido,
    telefono,
    email,
    infoUno,
    infoDos,
    infoTres,
    role
   })
  
   await newUserPlan.save()
   response.status(200).json({message:'Plan creado exitosamente'})
 } catch (error) {
  response.status(400).json({error})
 }
}
module.exports = { addUserPlan }