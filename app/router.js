const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');
const { controlWrapper:cw , errorNotFound } = require('./service/erroService')

const router = require('express').Router();

// Route des post
router.get('/posts', cw(postController.sendAllPosts));
router.get('/posts/:id(\\d+)', cw(postController.sendOnePost));
router.get('/posts/category/:id(\\d+)', cw(postController.sendPostByCategory));
router.post('/posts', cw(postController.addNewPost));

// Route des category
router.get('/categories', cw(categoryController.sendAllCategories));

// Pour URL non reconnue erreur 404
router.use(errorNotFound);


module.exports = router;