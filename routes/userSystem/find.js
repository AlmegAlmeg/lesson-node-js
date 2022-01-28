const express = require('express')
const router = express.Router()

//! create get request
router.get('/', async (req,res)=>{
    //! get the data from the token
    console.log(req.tokenData)
})
//! display the data as a response

module.exports = router