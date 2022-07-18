const { validateToken } = require('./jwt.service');
const { User, Category, BlogPost } = require('../database/models');
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

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: {} },
    ],
  });
  return result;
};

module.exports = { createPost, getAllPosts };