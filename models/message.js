const dbConnection = require("../DatabaseConnection");
const DataTypes = require("sequelize");

const Message = dbConnection.define(
  "Messages",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
    message_body: {
      type: DataTypes.STRING,
      length:2500,
      allowNull: false,
      min: 4,
    },
    title: {
      type: DataTypes.STRING,
      min: 5,
      max: 30,
      allowNull:true,
    },
    message_type:{
      type :DataTypes.STRING,
      allowNull:false,
    },
    is_important: {
      type:DataTypes.BOOLEAN,
      allowNull:true,
      defaultValue:false,
    },
    sent_at: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Message;
