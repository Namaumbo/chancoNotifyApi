'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      message_body: {
        type: Sequelize.STRING,
        min:4
      },
      title: {
        type: DataTypes.TEXT,
        min: 5,
        max: 30,
        allowNull:true,
      },
      is_important: {
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false,
      },
      sent_at:{
       type:DataTypes.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      message_type:{
        type :DataTypes.STRING,
        allowNull:false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};