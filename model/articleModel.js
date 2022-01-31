const mongoose = require('mongoose')

//title, articleBody, createdBy, createdAt
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    articleBody:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now
    }
})

const Article = mongoose.model('banana', articleSchema)

const createArticle = (title, articleBody, createdBy, createdAt) =>{
    const newArcitle = new Article(title, articleBody, createdBy, createdAt)
    return newArcitle.save()
}

const findAtricleById = cardId =>{
    return Article.findById(cardId)
}

module.exports = {
    createArticle,
    findAtricleById
}