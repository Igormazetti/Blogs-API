const postService = require('../services/postService');

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const data = req.body;
  const create = await postService.createPost(authorization, data);
  // console.log(create);
  res.status(create.status).json(create.result);
};

const getAllPosts = async (req, res) => {
  const { authorization } = req.headers;
  const posts = await postService.getAllPosts(authorization);
  return res.status(200).json(posts);
};

module.exports = { createPost, getAllPosts };