const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    biz:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    }
})

const User = mongoose.model('schematMishtamesh', userSchema)

const createUser = (userName, email, password, biz, createdAt) =>{
    const newUser = new User({userName, email, password, biz, createdAt})
    return newUser.save()
}

const findUserByEmail = email =>{
    return User.find({ email: email})
}

module.exports = {
    createUser,
    findUserByEmail
}
