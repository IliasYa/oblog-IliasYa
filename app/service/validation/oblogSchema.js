const Joi = require('joi');
const categoryDataMapper = require("../../model/categoryDataMapper");

// async function numberOfCategories(){
//     const allCategories = await categoryDataMapper.getAllCategories();
//     return allCategories.length;
// }

// const nbMaxCat = numberOfCategories();

const schema = Joi.object({
    category_id : Joi.number().min(1).max(5).required(), 
    slug : Joi.string().required(),
    title : Joi.string().required(),
    excerpt : Joi.string().required(),
    content : Joi.string().required(),
}).required()

module.exports = schema;