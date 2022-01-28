const express = require('express')
const router = express.Router()
const UserValidation = require('../../validation/userValidation')
const bcrypt = require('../../config/bcrypt')
const UserModel = require('../../model/userModel')

//! create the route
router.post('/', async (req,res)=>{
    try {    
        //!check if works and get the req.body
        // console.log(req.body)
        // console.log('It works')
        //!validation of the body
        const bakasha = await UserValidation.registerSchema.validateAsync(req.body, { abortEarly: false })
        //!hash to pass
        bakasha.password = await bcrypt.createHash(bakasha.password)
        //!check if the email is already exists => what if not
        const isEmailExistArr = await UserModel.findUserByEmail(bakasha.email)
        if(isEmailExistArr.length != 0){
            throw 'This email is already exists'
        }
        else{
            //!insert the user to the db
            await UserModel.createUser(bakasha.userName, bakasha.email, bakasha.password)
        }
        //!display a response to the user
        res.json({ 
            status: 200, msg: "All good!",
            response: bakasha
         })
    } catch (err) {
        res.status(400).json({ status: 400, err: err})
    }
})

module.exports = router