const express = require('express')
const router = express.Router()

//!routes
const newArticleroute = require('./articleSystem/newArticle')

//!routes usage
router.use('/new', newArticleroute)

module.exports = router