const { Sequelize } = require("sequelize");
require("dotenv").config();

// const connection = new Sequelize(process.env.DATABASE_URL,{
//     dialectOptions:{
//       ssl:{
//         required: true,
//         rejectUnauthorized:false,
//       }
//     }
//   });


const connection = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      idle: 10000,
      max: 30,
      min: 1,
      acquire: 30000,
    },
  }

);

// connection.sync({force: true});
module.exports = connection;
