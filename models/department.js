'use strict'
const dbConnection = require("../DatabaseConnection");
const DataTypes = require("sequelize");
const student = require("../models/student.js");
const faculty = require("../models/faculty.js")
const message = require("../models/message.js")

const Department = dbConnection.define(
  "Departments",
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
     association of student and Department
     **************/
     Department.hasMany(student,{

      onDelete:"CASCADE",
      onUpdate:"CASCADE"
      })
      student.belongsTo(Department);
      
      faculty.hasMany(Department,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      })
      Department.belongsTo(faculty)

      Department.hasMany(message,{
        onDelete:"NO ACTION",
        onUpdate:"CASCADE",
      })
      message.belongsTo(Department)
module.exports = Department;