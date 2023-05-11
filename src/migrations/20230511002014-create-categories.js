'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,       
        primaryKey: true,
       
      },
      name: {
        type: Sequelize.STRING,       
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  },
};
