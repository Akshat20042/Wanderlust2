// npm i joi
const Joi = require('joi');

listingSchema = Joi.object({
    listing : Joi.object({                              // listing object is required.. inside which following things are also required
        title: Joi.string().required(),
        disc : Joi.string().required(),
        loc: Joi.string().required(),
        ctry: Joi.string().required(),
        price: Joi.number().required().min(0),
        img: Joi.string().allow("",null),
    }).required()
})

reviewSchema = Joi.object({
    review : Joi.object({
        rate: Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),
    }).required()
})

module.exports={reviewSchema,listingSchema};