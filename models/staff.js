'use strict'
const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")
const message = require("../models/message.js");
const department = require("../models/department.js")
const Staff = dbConnection.define('Staffs', {
  
  // Model attributes are defined here

id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  } ,
    email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "administration_staff",
  },
  is_head_of_dep :{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false,
   },
password:{
  type: DataTypes.STRING,
  allowNull:false,
  unique:true
}
  
}, {

  timestamps: true
});

    /**************
     association of message and Staffs
     **************/
     Staff.hasMany(message,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE",
    })
    message.belongsTo(Staff)

        /**************
   association of department and Staffs
  **************/
    department.hasMany(Staff,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE",
    })
    Staff.belongsTo(department)
module.exports = Staff