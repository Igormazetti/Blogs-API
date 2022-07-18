const router = require('express').Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

router
  .use(tokenValidation)
  .post('/', postController.createPost)
  .get('/', postController.getAllPosts)
  .get('/:id', postController.getPostById);

module.exports = router;