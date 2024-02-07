const user = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = async(request,response)=>{
  try {
    const cookies = request.cookies
    if(!cookies?.refreshToken) return response.status(401).json({message: 'No autorizado'})

    const refreshToken = cookies.refreshToken
    const User = await user.findOne({refreshToken})

    if(!User) return response.status(403).json({message: 'Forbidden'})

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error,decoded)=>{
        if(error || User.email !== decoded.email) return response.status(403).json({message: 'Forbidden'})
        const accessToken = jwt.sign({
        email: decoded.email,
        id: decoded._id, 
        role: decoded.role, 
        nombre: decoded.nombre
      },process.env.ACCESS_TOKEN_SECRET,
      {expiresIn:'15m'})
      response.json({accessToken})
      }
    )
  } catch (error) {
    response.status(500).json(error)
  }
}
module.exports = {handleRefreshToken}