const {model,Schema} = require('mongoose')

const productos = new Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  descripcion: String
})
module.exports = model('productos',productos)