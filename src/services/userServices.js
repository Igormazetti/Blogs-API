const { User } = require('../database/models');
const createUserSchema = require('../schemas/createUserSchema');

const createUser = async (data) => {
  const { error } = createUserSchema.validate(data);
  const verify = await User.findOne({ where: { email: data.email } });
  if (error) {
    return { status: 400, message: error.message };
  }
  if (verify) {
    return { status: 409, message: 'User already registered' };
  }
  await User.create({
    displayName: data.displayName,
    email: data.email,
    password: data.password,
    image: data.image,
  });
  return 'ok';
};

const getAllUsers = async () => {
  const users = await User.findAll();
  const result = users.map((user) => ({
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  }));
  return result;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return { status: 404, message: 'User does not exist' };
  }
  return {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    image: user.image,
  };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById, 
};