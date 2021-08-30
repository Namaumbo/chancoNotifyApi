'use strict'
const dbConnection = require("../DatabaseConnection");
const DataTypes = require("sequelize");
const student = require("../models/student.js");
const faculty = require("../models/faculty.js")
const message = require("../models/message.js")

const department = dbConnection.define(
  "department",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
   name: {
     type: DataTypes.STRING
   },
  },
  {
    timestamps: true,
  }
);


      /**************
     association of student and department
     **************/
     department.hasMany(student,{

      onDelete:"CASCADE",
      onUpdate:"CASCADE"
      })
      student.belongsTo(department);
      
      faculty.hasMany(department,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
      department.belongsTo(faculty)

      department.hasMany(message,{
        onDelete:"NO ACTION",
        onUpdate:"CASCADE",
      })
      message.belongsTo(department)

module.exports = department;