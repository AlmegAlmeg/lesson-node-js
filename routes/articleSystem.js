const express = require('express')
const router = express.Router()

//!routes
const newArticleRoute = require('./articleSystem/newArticle')
const findArticleRoute = require('./articleSystem/findArticle')
const listRoute = require('./articleSystem/list')

//!routes usage
router.use('/new', newArticleRoute)
router.use('/find', findArticleRoute)
router.use('/list', listRoute)

module.exports = router