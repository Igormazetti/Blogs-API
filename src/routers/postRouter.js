const router = require('express').Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

router
  .use(tokenValidation)
  .post('/', postController.createPost)
  .get('/', postController.getAllPosts)
  .get('/:id', postController.getPostById)
  .put('/:id', postController.updatePost)
  .delete('/:id', postController.deletePost);

module.exports = router;