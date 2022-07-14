const { Category } = require('../database/models');

const createCategory = async (category) => {
  const newCategory = await Category.create({ name: category });
  return {
    id: newCategory.id,
    name: newCategory.name,
  };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories.map((category) => ({
    id: category.id,
    name: category.name,
  }));
};

module.exports = { createCategory, getAllCategories };