const { User } = require('../database/models');

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(User);
  if (!email || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  next();
};

module.exports = loginValidation;