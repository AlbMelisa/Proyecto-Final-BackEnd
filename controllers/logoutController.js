const user = require('../models/User')

const handleLogout = async(request,response) =>{
  try {
    const cookies = request.cookies;
    if(!cookies?.refreshToken) return response.status(204).json({message : 'Cookies no hay'})
    const refreshToken = cookies.refreshToken
    
    const User = await user.findOne({refreshToken})
    if(!User){
      response.clearCookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000})
      return response.status(200).json({message: 'Cookies limpias'})
    }
    User.refreshToken = ''
    await User.save()

    response.clearCookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000})
    return response.status(200).json({message: 'Cookies limpias'})

  } catch (error) {
    return response.status(500).json(error)
 
  }
}
module.exports = {handleLogout}