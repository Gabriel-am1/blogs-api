const { Category } = require('../models');

module.exports = {
  async getAll() {
    const categories = await Category.findAll();
    return categories;
  },

  async create({ name }) {   
    const duplicatedCategory = await Category.findOne({ where: { name } });
    if (duplicatedCategory) { 
      return { status: 409, message: { message: 'Category already registered' } }; 
    }
       
    const newCategory = await Category.create({ name });    
    return { status: 201, message: newCategory };
  }, 
};