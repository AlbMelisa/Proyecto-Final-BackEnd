const {model,Schema} = require('mongoose')

const user = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  clave: String,
  role:String,
  refreshToken: String
})
module.exports = model('user',user)