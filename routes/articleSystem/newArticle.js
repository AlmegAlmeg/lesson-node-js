const express = require('express')
const router = express.Router()
const ArticleModel = require('../../model/articleModel')
const ArticleValidation = require('../../validation/articleValidation')

router.post('/', async (req,res)=>{
    try {
        const value = await ArticleValidation.articleSchema.validateAsync(req.body, { abortEarly: false })
        console.log(value)
    } catch (err) {
        res.status(400).json({ status: 400, err:err })
    }
})

module.exports = router