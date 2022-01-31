const express = require('express')
const router = express.Router()
const ArticleModel = require('../../model/articleModel')
const UserModel = require('../../model/userModel')
const ArticleValidation = require('../../validation/articleValidation')

router.post('/', async (req,res)=>{
    try {
        const value = await ArticleValidation.articleSchema.validateAsync(req.body, { abortEarly: false })
        console.log(value)
        console.log(req.tokenData)
        const findCreator = await UserModel.findUserbyId(req.tokenData.id)
        console.log(findCreator)
        const newArticle = await ArticleModel.createArticle({
            title: value.title,
            articleBody: value.articleBody,
            createdBy: findCreator.id,
        })
        res.json({ status: 200, article: newArticle})
    } catch (err) {
        res.status(400).json({ status: 400, err: err })
    }
})

module.exports = router