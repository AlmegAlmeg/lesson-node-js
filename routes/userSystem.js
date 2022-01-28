const express = require('express')
const router = express.Router()

//!routes
const registerRouter = require('./userSystem/register')
const loginRouter = require('./userSystem/login')
const findRouter = require('./userSystem/find')

//! routes usage
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/find', findRouter)

module.exports = router