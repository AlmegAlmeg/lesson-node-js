const Joi = require('joi')

const loginSkeleton = {
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    //?password: Joi.string().alphanum().min(3).max(30)
}

const registerSekelton = {
    userName: Joi.string().alphanum().min(2).max(20).required(),
    ...loginSkeleton,
    biz: Joi.boolean(),
    //? age: Joi.number().min(10).max(80)
}

const loginSchema = Joi.object(loginSkeleton)
const registerSchema = Joi.object(registerSekelton)

module.exports = {
    loginSchema,
    registerSchema
}