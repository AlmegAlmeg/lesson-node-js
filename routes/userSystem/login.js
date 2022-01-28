const express = require('express')
const router = express.Router()
const UserVaidation = require('../../validation/userValidation')
const UsereModel = require('../../model/userModel')
const bcrypt = require('../../config/bcrypt')

//! create a post request
router.post('/', async (req,res)=>{
    try {   
        //! check if works and the body
        // console.log(req.body)
        //! validate to req.body
        const value = await UserVaidation.loginSchema.validateAsync(req.body, { abortEarly: false })
        //! check if email exists > what if not
        const userArr = await UsereModel.findUserByEmail(value.email)
        if(userArr.length != 0){
            //this is good
            //! compare the password to the hash > what if not
            const isPassOk = await bcrypt.compareHash(value.password, userArr[0].password)
            if(isPassOk === true){
                //this is good
                //! create token to the user


                //! write a response with the token
                res.json({ status: 200, msg: `Email and pass are ok, welcome back ${userArr[0].userName}`})
            }
            else{
                throw 'Wrong password'
            }
        }
        else{
            throw 'This email is not exists in our system'
        }
    } catch (err) {
        res.status(400).json({ status: 400, err:err})
    }
})

module.exports = router