const express = require('express')
const router = express.Router()
const ArtcileModel = require('../../model/articleModel')

router.get('/', async (req,res)=>{
    try {
        const userId = req.tokenData.id
        const result = await ArtcileModel.findAllArticlesByUserId(userId)
        if(result.length == 0){
            throw "It seems like you don't have any articles yet"
        }
        res.json({ status: 200, msg: 'Found something', articles: result})
    } catch (err) {
        res.status(400).json({ status: 400, err:err })
    }
})

module.exports = router