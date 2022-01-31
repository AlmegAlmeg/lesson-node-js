const express = require('express')
const router = express.Router()
const ArticleModel = require('../../model/articleModel')

router.get('/:id', async (req,res)=>{
    try {
        const result = await ArticleModel.findAtricleById(req.params.id)
        console.log(result)
        res.json({ status: 200, msg: 'Article found!', article: result})
    } catch (err) {
        res.status(400).json({ status: 400, msg: 'No article found with this id'})
    }
})

module.exports = router