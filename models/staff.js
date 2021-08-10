const dbConnection = require("../DatabaseConnection")
const DataTypes = require("sequelize")
// const messages = require("../models/message");
const message = require("../models/message");

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


staff.hasMany(message,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE",
})
message.belongsTo(staff)


//staff.sync({force:true});
module.exports = staff