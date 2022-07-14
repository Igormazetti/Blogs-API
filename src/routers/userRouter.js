const router = require('express').Router();
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/', userController.createUser);
router.get('/', tokenValidation, userController.getAllUsers);

module.exports = router;