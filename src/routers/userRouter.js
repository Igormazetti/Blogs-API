const router = require('express').Router();
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

router
  .post('/', userController.createUser)
  .use(tokenValidation)
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUserById);

module.exports = router;