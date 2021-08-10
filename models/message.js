const dbConnection = require("../DatabaseConnection");
const DataTypes = require("sequelize");
const staff = require("../models/staff");

const message = dbConnection.define(
  "message",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
    message_body: {
      type: DataTypes.TEXT,
      allowNull: false,
      min: 4,
    },
    title: {
      type: DataTypes.TEXT,
      min: 5,
      max: 30,
      allowNull:true,
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

module.exports = message;
