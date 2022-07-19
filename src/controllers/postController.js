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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (!post || post.length === 0) {
    return res.status(404).json({ message: 'Post does not exist' }); 
  }
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { authorization } = req.headers;
  const update = await postService.updatePost(authorization, id, data);
  if (update === 'Not authorized') return res.status(401).json({ message: 'Unauthorized user' });
  if (!update) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return res.status(200).json(update);
};

module.exports = { createPost, getAllPosts, getPostById, updatePost };