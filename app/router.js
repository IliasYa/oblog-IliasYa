const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

const router = require('express').Router();

// Route des post
router.get('/posts', postController.sendAllPosts);
router.get('/posts/:id(\\d+)', postController.sendOnePost);
router.get('/posts/category/:id(\\d+)', postController.sendPostByCategory);
router.post('/posts', postController.addNewPost);

// Route des category
router.get('/categories', categoryController.sendAllCategories);

module.exports = router;