const jwt = require('jsonwebtoken');

const JWT_SECRET = "chalhitsir"

const generateToken = (user) => {

    const payload = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }
    const secret = JWT_SECRET || "fallbacksecret"
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "30d"
    })
}

const validateToken = (token) => {
    const id = json.verify(token, JWT_SECRET)
    return id
}

module.exports = { generateToken, validateToken }
