"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Staffs", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 3,
        max: 30,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "administration_staff",
      },
      is_head_of_dep: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 3,
        max: 30,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 10,
        max: 35,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Staffs");
  },
};
