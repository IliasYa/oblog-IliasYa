const categoryDataMapper = require("../model/categoryDataMapper")


const categoryController = {
    async sendAllCategories(req,res){
        const allCategories = await categoryDataMapper.getAllCategories();
        res.json(allCategories);
    },
}

module.exports = categoryController;