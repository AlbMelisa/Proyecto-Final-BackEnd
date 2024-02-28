const userPlan = require('../models/Plan')

const addUserPlan = async (request,response) => {  
  try {
   const { nombre, apellido, telefono, email, infoUno, infoDos, infoTres, plan }  = request.body
  
   const newUserPlan = new userPlan({
    nombre,
    apellido,
    telefono,
    email,
    infoUno,
    infoDos,
    infoTres,
    plan
   })
  
   await newUserPlan.save()
   response.status(200).json({message:'Plan creado exitosamente'})
 } catch (error) {
  response.status(400).json({error})
 }
}
const getPlan = async (request,response) => {
  try {
    const user = await userPlan.find({})
    response.status(200).json(user)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar usuarios'})
  }
}
const deletePlan = async (req, res) => {
  const {id} = req.params

  try {
      const User = await userPlan.findByIdAndDelete(id);
  
      if (!User) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ message: 'Usuario eliminado correctamente',User});
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };

  const updatePlan = async (request, response) => {
    const {id} = request.params;
    const { nombre, apellido, telefono, email, infoUno, infoDos, infoTres ,plan} = request.body;
    
    try {
      const UserPlan = await userPlan.findById(id);
      
      if (!UserPlan) {
        return response.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      if (nombre) UserPlan.nombre = nombre;
      if (apellido) UserPlan.apellido = apellido;
      if (telefono) UserPlan.telefono = telefono;
      if (email) UserPlan.email = email;
      if (infoUno) UserPlan.infoUno = infoUno;
      if (infoDos) UserPlan.infoDos = infoDos;
      if (infoTres) UserPlan.infoTres = infoTres;
      if (plan) UserPlan.plan = infoTres;

      await UserPlan.save();
  
      response.status(200).json({ message: 'Clase actualizada correctamente' });
    } catch (error) {
      response.status(500).json(error);
    }
  };


module.exports = { addUserPlan ,getPlan,deletePlan,updatePlan}