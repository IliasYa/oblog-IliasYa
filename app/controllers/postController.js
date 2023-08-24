const { log } = require('console');
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
    },

    async addNewPost(req, res){
        const newPost = req.body;
        const addPost = await postDataMapper.insertNewPost(newPost);
        let informationReturned = "Ajout réalisé avec succès";
        if(!addPost===1){
            informationReturned = "Un problème est survenu lors de l'ajout";
        }
        res.json(informationReturned);
    },
}

module.exports = postController;