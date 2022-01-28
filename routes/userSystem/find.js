const express = require('express')
const router = express.Router()

//! create get request
router.get('/', async (req,res)=>{
    console.log("Nice, you passed the middleware")
})
//! get the data from the token
//! display the data as a response

module.exports = router