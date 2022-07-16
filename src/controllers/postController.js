const postService = require('../services/postService');

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const data = req.body;
  const create = await postService.createPost(authorization, data);
  // console.log(create);
  res.status(create.status).json(create.result);
};

module.exports = { createPost };