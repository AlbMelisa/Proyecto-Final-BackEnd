const clases = require('../models/clases')

const addClase = async (request,response) => {  
  try {
   const { nombre,descripcion, profesor, fecha, hora , alumnos}  = request.body
   const alumnosArray = alumnos.map(alumno => ({ nombre: alumno.nombre }));

   const clase = new clases({
    nombre,
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
    const clase = await clases.findById(claseId);

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
    return response.status(500).json({ message: 'Error interno del servidor'+error });
  }
}
const getClases = async (request,response) => {
  try {
    const clase = await clases.find({})
    if(!clase){
      return response.status(404).json({message: "error al ver las clases"})
    }
    response.status(200).json(clase)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar las clases',error})
  }
}
const deleteClase = async (req, res) => {
  const {id} = req.params

  try {
      const User = await clases.findByIdAndDelete(id);
  
      if (!User) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.status(200).json({ message: 'Usuario eliminado correctamente',User});
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };

  const updateClase = async (request, response) => {
    const {id} = request.params;
    const {  nombre, descripcion, profesor, fecha, hora, alumnos} = request.body;
    
    try {
      const clase = await clases.findById(id);
      
      if (!clase) {
        return response.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      if (nombre) clase.nombre = nombre;
      if (descripcion) clase.descripcion = descripcion;
      if (fecha) clase.fecha = fecha;
      if (profesor) clase.profesor = profesor;
      if (hora) clase.hora = hora;
      if (alumnos) clase.alumnos = alumnos;

      await clase.save();
  
      response.status(200).json({ message: 'Usuario actualizado correctamente', reload: true });
    } catch (error) {
      response.status(500).json(error);
    }
  };
  const getFecha = async(request,response) => {
    try {
      const {fecha} = request.params;
      const clase = await clases.find({ fecha: fecha });

      response.status(200).json(clase);
    } catch (error) {
      response.status(500).json({ error: 'Error al obtener las clases.'});
    }
  }

module.exports = { addClase , addAlumnos , getClases, deleteClase, updateClase , getFecha}