const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")

const student = dbConnection.define('student', {
  
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
    phoneNumber:{
    type:DataTypes.STRING,
    allowNull:false
  },

  RegistrationNumber: {
    type: DataTypes.STRING,
    allowNull:false
  },
  
}, {
 
  timestamps: true
});


module.exports = student