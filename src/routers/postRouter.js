const router = require('express').Router();
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

router
  .use(tokenValidation)
  .post('/', postController.createPost)
  .get('/', postController.getAllPosts);

module.exports = router;