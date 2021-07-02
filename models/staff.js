const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")

const student = dbConnection.define('staff', {
  
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
    type: DataTypes.STRING
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
module.exports = student