'use strict';
const {DataTypes} = require("sequelize")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        unique:true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
      },

      RegistrationNumber: {
        type: DataTypes.STRING,
        allowNull:false
      },
    
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  }
};