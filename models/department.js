const dbConnection = require("../DatabaseConnection");
const DataTypes = require("sequelize");
const student = require("../models/student")
const department = dbConnection.define(
  "department",
  {
    // Model attributes are defined here

    id: {
      allowNull: false,
     primaryKey: true,
     type: DataTypes.UUID,
   },
   name: {
     type: DataTypes.STRING
   },
  },
  {
    timestamps: true,
  }
);
department.hasMany(student,{
onDelete:"CASCADE",
onUpdate:"CASCADE"
})
student.belongsTo(department);

module.exports = department;
