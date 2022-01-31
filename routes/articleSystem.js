const express = require('express')
const router = express.Router()

//!routes
const newArticleRoute = require('./articleSystem/newArticle')
const findArticleRoute = require('./articleSystem/findArticle')

//!routes usage
router.use('/new', newArticleRoute)
router.use('/find', findArticleRoute)

module.exports = router