const productos = require('../models/productos')

const addProductos = async(request,response) => {
  try {
    const {nombre,precio,imagen,descripcion,id} = request.body

    const newProduct = new productos({
      nombre,
      precio,
      imagen,
      descripcion,
      id
    })

    await newProduct.save()
    response.status(200).json({message:'Producto creado exitosamente'})
  } catch (error) {
    response.status(400).json({error})
  }
}
const getProductos = async (request,response) => {
  try {
    const producto = await productos.find({})
    response.status(200).json(producto)
  } catch (error) {
    response.status(400).json({message:'no se puedieron encontrar productos'})
  }
}
module.exports = { addProductos, getProductos }