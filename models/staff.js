const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")
const department = require("../models/department");
const message = require("../models/message");
const faculty = require("../models/faculty");

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
staff.hasOne(department,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE",
})
department.belongsTo(staff)

/**************
 association of faculty and staff
**************/
staff.hasOne(faculty,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE",
})
faculty.belongsTo(staff)
module.exports = staff