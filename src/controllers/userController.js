const userServices = require('../services/userServices');
const { createToken } = require('../services/jwt.service');

const createUser = async (req, res) => {
  const data = req.body;
  const newUser = await userServices.createUser(data);
  if (newUser === 'ok') {
    const token = createToken(data.email);
    return res.status(201).json({ token });
  }
  return res.status(newUser.status).json({ message: newUser.message });
};

module.exports = { createUser };
