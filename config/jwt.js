const jwt = require('jsonwebtoken')

const createToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, "kajhSKJDF@(824A1!#@$HA", { expiresIn: '7d' } , (err,token)=>{
            if(err) rej(err)
            else res(token)
        })
    })
}

const verifyToken

module.exports = {
    createToken,
    verifyToken
}