const router = require('express').Router();
const tokenValidation = require('../middlewares/tokenValidation');

const categoriesController = require('../controllers/categoriesController');

router.use(tokenValidation)
  .post('/', categoriesController.createCategory);

module.exports = router;