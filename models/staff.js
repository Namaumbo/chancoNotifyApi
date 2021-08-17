'use strict'
const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")
const message = require("../models/message.js");
const department = require("../models/department.js")
const staff = dbConnection.define('staff', {
  
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
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
     association of message and staff
     **************/
     staff.hasMany(message,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE",
    })
    message.belongsTo(staff)

        /**************
   association of department and staff
  **************/
    department.hasMany(staff,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE",
    })
    staff.belongsTo(department)
module.exports = staff