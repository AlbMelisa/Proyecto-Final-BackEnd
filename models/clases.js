const {model,Schema} = require('mongoose')

const clases = new Schema({
  nombre: String,
  descripcion: String,
  profesor: String,
  fecha: String,
  hora: Number,
  alumnos: [{
    nombre: String
  }]
})
module.exports = model('clases',clases)