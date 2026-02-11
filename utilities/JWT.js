var jwt = require('jsonwebtoken');

function createJWT(data) {
    try{
      let token = jwt.sign(data, 'alamin-vai');
      return { token }
    }catch(err){
      return { error: err.message }
    }
}

function decodeJWT(data) {
    try{
      let decoded = jwt.verify(data, 'alamin-vai');
      return { data: decoded }
    }catch(err){
      return {
        error: err.message
      }
    }
}


module.exports = {
    createJWT, decodeJWT
}