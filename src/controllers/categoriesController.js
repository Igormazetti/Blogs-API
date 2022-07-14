const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoriesService.createCategory(name);
  res.status(201).json(newCategory);
};

module.exports = { createCategory };