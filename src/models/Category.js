// const { DataTypes } = require('sequelize');

// const Attributes = {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// };

// module.exports = (sequelize) => {
//   const Category = sequelize.define(
//     'Category',
//     Attributes,
//     {
//       timestamps: false,
//       tableName: 'categories',
//     },
//   );

//   return Category;
// };

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
  },
  {
      tableName: 'categories',
      underscored: true,
      timestamps: false
  });

  return Category;
};