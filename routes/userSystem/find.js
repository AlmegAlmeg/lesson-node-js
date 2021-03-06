const express = require('express')
const router = express.Router()
const UserModel = require('../../model/userModel')

router.get('/', async (req,res)=>{
    try {
        console.log(req.tokenData)
        //?This way is for email manipulation
        const userArr = await UserModel.findUserByEmail(req.tokenData.email)
        res.json({ 
            status: 200, 
            msg: 'User found', 
            name: userArr[0].userName,
            email: userArr[0].email,
            biz: userArr[0].biz,
        })
        //?This way is for id manipulation
        // const user = await UserModel.findUserbyId(req.tokenData.id)
        // console.log(user)
        // res.json({ 
        //     status: 200, 
        //     msg: 'User found', 
        //     name: user.userName,
        //     email: user.email,
        //     biz: user.biz,
        // })
    } catch (err) {
        res.status(401).json({ status: 401, msg: err})
    }
})

module.exports = router