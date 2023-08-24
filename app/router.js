const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');
const { controlWrapper:cw , errorNotFound } = require('./service/erroService')

const router = require('express').Router();

// Route des posts
/**
 * GET /posts
 * @summary Endpoint pour avoir la totalités des posts stockés en BDD
 * @property {integer} id - clé primaire lié à l'identification du post
 * @property {string} slug - description suscinte du post
 * @property {string} title - Titre du post
 * @property {string} excerpt - Extrait du post 
 * @property {string} content - Corps du texte composant le post
 * @property {integer} category_id - clé secondaire lié à la clé primaire de la category auquel appartient le post
 * @return {JSON} - les éléments des posts sont retournés sous format json
 */

router.get('/posts', cw(postController.sendAllPosts));

/**
 * GET /posts/:id
 * @summary Endpoint pour obtenir un post en particulier selon son id
 * @property {integer} id - clé primaire lié à l'identification du post
 * @property {string} slug - description suscinte du post
 * @property {string} title - Titre du post
 * @property {string} excerpt - Extrait du post 
 * @property {string} content - Corps du texte composant le post
 * @property {integer} category_id - clé secondaire lié à la clé primaire de la category auquel appartient le post
 * @return {JSON} - les éléments du post sont retournés sous format json
 */
router.get('/posts/:id(\\d+)', cw(postController.sendOnePost));

/**
 * GET /posts/category/:id
 * @summary Endpoint pour avoir les posts liés à une category en particulier selon l'id de la category
 * @property {integer} id - clé primaire lié à l'identification du post
 * @property {string} slug - description suscinte du post
 * @property {string} title - Titre du post
 * @property {string} excerpt - Extrait du post 
 * @property {string} content - Corps du texte composant le post
 * @property {integer} category_id - clé secondaire lié à la clé primaire de la category auquel appartient le post
 * @return {JSON} - les éléments des posts sont retournés sous format json
 */
router.get('/posts/category/:id(\\d+)', cw(postController.sendPostByCategory));

/**
 * POST /posts
 * @summary Endpoint pour importer un nouveau posts. Tous les paramètres sont obligatoires pour respecter l'architecture de la BDD
 * @param {slug.model} request.body
 * @param {title.model} request.body
 * @param {excerpt.model} request.body
 * @param {content.model} request.body
 * @param {category_id.model} request.body
 * @return {JSON} - les éléments des posts sont retournés sous format json
 */

router.post('/posts', cw(postController.addNewPost));

// Route des category

/**
 * GET /categories
 * @summary Endpoint pour avoir les posts liés à une category en particulier selon l'id de la category
 * @property {integer} id - clé primaire lié à l'identification de la catégorie
 * @property {string} route - route URL de la category
 * @property {string} label - nom de la catégorie
 * @return {JSON} - les éléments des catégories sont retournés sous format json
 */

router.get('/categories', cw(categoryController.sendAllCategories));

// Pour URL non reconnue erreur 404
router.use(errorNotFound);


module.exports = router;