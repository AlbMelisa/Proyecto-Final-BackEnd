const {model,Schema} = require('mongoose')

const productos = new Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  descripcion: String,
  id: Number
})
module.exports = model('productos',productos)