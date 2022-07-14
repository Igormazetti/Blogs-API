// const encryptPassword = require('../services/password.service');
const { createToken } = require('../services/jwt.service');

const logIn = async (req, res) => {
  const { email } = req.body;
  // const newPassword = encryptPassword(password);

  const token = createToken(email);
  
  res.status(200).json({ token });
};

module.exports = { logIn };