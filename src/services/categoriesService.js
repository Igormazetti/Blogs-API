const { Category } = require('../database/models');

const createCategory = async (category) => {
  const newCategory = await Category.create({ name: category });
  return {
    id: newCategory.id,
    name: newCategory.name,
  };
};

module.exports = { createCategory };