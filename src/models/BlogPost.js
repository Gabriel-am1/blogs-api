// const { DataTypes } = require('sequelize');

// const Attributes = {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   content: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   published: {
//     type: DataTypes.DATE,
//   },
//   updated: {
//     type: DataTypes.DATE,
//   },
// };

// module.exports = (sequelize) => {
//   const BlogPost = sequelize.define(
//     'BlogPost',
//     Attributes,
//     {
//       timestamps: true,
//       tableName: 'BlogPosts',
//       createdAt: 'published',
//       updatedAt: 'updated',
//     },
//   );

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(
//       models.User,
//     { foreingKey: 'userId', as: 'user' },
//     );
//   };

//   return BlogPost;
// };

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString()
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date().toISOString()
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
  };

  return BlogPost;
};