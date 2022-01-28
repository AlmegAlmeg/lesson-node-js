const express = require('express')
const router = express.Router()

//!routes
const middlwareRouter = require('../middleware/authMiddleware')

const registerRouter = require('./userSystem/register')
const loginRouter = require('./userSystem/login')
const findRouter = require('./userSystem/find')

//! routes usage
router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/find', middlwareRouter, findRouter)

module.exports = router