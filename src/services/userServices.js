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

module.exports = { createUser };