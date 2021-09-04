"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //addcolumn("table name","foreign key")
    return await queryInterface
      .addColumn("Staffs", "DepartmentId", {
        type: DataTypes.UUID,
        references: {
          model: "Departments", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
      })
      .then(async () => {
        return await queryInterface.addColumn("Messages", "DepartmentId", {
          type: DataTypes.UUID,
          references: {
            model: "Departments", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      })
      .then(async () => {
        return await queryInterface.addColumn("Messages", "StaffId", {
          type: DataTypes.UUID,
          references: {
            model: "Staffs", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      })
      .then(async () => {
        return await queryInterface.addColumn("Students", "DepartmentId", {
          type: DataTypes.UUID,
          references: {
            model: "Departments", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      })
      .then(async () => {
        return await queryInterface.addColumn("Departments", "FacultId", {
          type: DataTypes.UUID,
          references: {
            model: "Faculties", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface
      .removeColumn("Staffs", "DepartmentId")
      .then(async () => {
        return await queryInterface.removeColumn("Messages", "DepartmentId");
      })
      .then(async () => {
        return await queryInterface.removeColumn("Students", "DepartmentId");
      })
      .then(async () => {
        return await queryInterface.removeColumn("Departments", "FacultId");
      });
  },
};
