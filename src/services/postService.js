const { validateToken } = require('./jwt.service');
const { User } = require('../database/models');
const { handleCategories, handleCreatePost } = require('../helpers/postHelpers');

const createPost = async (token, data) => {
  const user = validateToken(token);
  const { title, content, categoryIds } = data;
  const { id } = await User.findOne({ where: { email: user } });
  const result = handleCategories(title, content, categoryIds);
  if (result.status) return result;
  const validate = handleCreatePost(title, content, categoryIds, id);
  return validate;
};

module.exports = { createPost };