// module.exports = (sequelize) => {
//     const PostCategory = sequelize.define('PostCategory', {},
//       { timestamps: false, tableName: 'PostsCategories' });
  
//     PostCategory.associate = (models) => {
//       models.BlogPost.belongsToMany(models.Category, {
//         as: 'categories',
//         through: PostCategory,
//         foreignKey: 'postId',
//         otherKey: 'categoryId',
//       });
  
//       models.Category.belongsToMany(models.BlogPost, {
//         as: 'posts',
//         through: PostCategory,
//         foreignKey: 'categoryId',
//         otherKey: 'postId',
//       });
//     };
  
//     return PostCategory;
//   };

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPost',
        key: 'id',
      }, 
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categoryId',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'categoryId',
    });
  };
    
  return PostCategory;
};