const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoriesService.createCategory(name);
  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoriesService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };