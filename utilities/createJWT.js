var jwt = require('jsonwebtoken');

function createJWT(data) {
    let token = jwt.sign(data, 'alamin-vai');
    return token
}

function matchJWT(data) {
    var decoded = jwt.verify(data, 'alamin-vai');
    console.log(decoded.foo) // bar
}


module.exports = {
    createJWT, matchJWT
}