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

const getAllUsers = async (_req, res) => {
  const users = await userServices.getAllUsers();
  return res.status(200).json(users);
};

module.exports = { createUser, getAllUsers };
