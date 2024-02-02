const {model,Schema} = require('mongoose')

const userPlanSchema = new Schema({
  nombre: String,
  apellido: String,
  telefono: String,
  email: String, 
  infoUno: String,
  infoDos: String,
  infoTres: String
})
module.exports = model('userPlan',userPlanSchema)