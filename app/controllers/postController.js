const postDataMapper = require('../model/postDataMapper')

const postController = {
    async sendAllPosts(req, res){
        const allPosts = await postDataMapper.getAllPosts();
        res.json(allPosts)
    },

    async sendOnePost(req, res){
        const targetId = req.params.id;
        const postRequired = await postDataMapper.getOnePost(targetId);
        res.json(postRequired)
    },
    async sendPostByCategory(req, res){
        const targetCategoryId = req.params.id;
        const postsByCategory = await postDataMapper.getPostsByCategory(targetCategoryId);
        res.json(postsByCategory);
    }
}

module.exports = postController;