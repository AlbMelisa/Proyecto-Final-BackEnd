const clasesModel = require('../models/clases')

const addClase = async (request,response) => {  
  try {
   const { descripcion, profesor, fecha, hora , alumnos}  = request.body
   const alumnosArray = alumnos.map(alumno => ({ nombre: alumno.nombre }));

   const clase = new clasesModel({
    descripcion,
    profesor,
    fecha,
    hora,
    alumnos : alumnosArray//Este es el array 
   })
  
   await clase.save()
   response.status(200).json({message:'Clase creado exitosamente'})
 } catch (error) {
  response.status(400).json({error})
 }
}
const addAlumnos = async (request,response)=>{
  const { claseId } = request.params;
  const { alumnos } = request.body; 
  
  try {
    const clase = await clasesModel.findById(claseId);

    if (!clase) {
      return response.status(404).json({ message: 'La clase no existe' });
    }

    // Agregar los nuevos alumnos al array de alumnos de la clase
    clase.alumnos.push(...alumnos);

    // Guardar los cambios en la base de datos
    await clase.save();

    return response.status(200).json({ message: 'Alumnos agregados correctamente', clase });
  } catch (error) {
    console.error('Error al agregar alumnos a la clase:', error);
    return response.status(500).json({ message: 'Error interno del servidor' });
  }
}
const getClases = async (request,response) => {
  try {
    const clase = clasesModel.find({})
    if(!clase){
      return response.status(404).json({message: "error al ver las clases"})
    }
    response.status(200).json(clase)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar las clases',error})
  }
}
module.exports = { addClase , addAlumnos , getClases}