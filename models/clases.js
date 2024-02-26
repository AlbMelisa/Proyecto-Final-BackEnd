const {model,Schema} = require('mongoose')

const clases = new Schema({
  descripcion: String,
  profesor: String,
  fecha: String,
  hora: Number,
  alumnos: [{
    nombre: String
  }]
})
module.exports = model('clases',clases)