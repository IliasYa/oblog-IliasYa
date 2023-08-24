const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');

const router = require('express').Router();

// Route des post
router.get('/posts', postController.sendAllPosts);
router.get('/posts/:id', postController.sendOnePost);
router.get('/posts/category/:id', postController.sendPostByCategory);
// router.post('/posts');

// Route des category
router.get('/categories', categoryController.sendAllCategories);

module.exports = router;