const { Category, BlogPost, PostCategory } = require('../database/models');

const handleCategories = (title, content, categoriesArr) => {
  console.log('Deu certo');
  if (title.length === 0 || content.length === 0) {
    return {
     status: 400,
     result: { message: 'Some required fields are missing' },
    }; 
   }
  if (!categoriesArr || categoriesArr.length === 0) { 
    return { 
      status: 400,
      result: { message: '"categoryIds" not found' },
    };
  }
return [];
};

const handleCreatePostCategories = async (postId, categoryIds) => {
  const create = await Promise.all(categoryIds.map((item) => PostCategory.create({
      postId,
      categoryId: item,
    })));

  return create;
};

const handleCreatePost = async (title, content, categoryIds, id) => {
  const validate = await Promise.all(categoryIds
    .map((categId) => Category.findAndCountAll({ where: { id: categId } })));
  if (validate.every((item) => item.count > 0)) {
    const post = await BlogPost.create({
      title,
      content,
      userId: id,
      updated: new Date(),
      published: new Date(),
    });
    handleCreatePostCategories(post.id, categoryIds);
   
    return { status: 201, result: post };
  }
  return { status: 400, result: { message: '"categoryIds" not found' } };
};

module.exports = { handleCategories, handleCreatePost };