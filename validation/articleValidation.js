const Joi = require('joi')

const articleSkeleton = {
    title: Joi.string().min(2).max(50).required(),
    articleBody: Joi.string().required(),
}

const articleSchema = Joi.object(articleSkeleton)

module.exports = {
    articleSchema
}