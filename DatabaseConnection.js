const {Sequelize} = require("sequelize")
require('dotenv').config()

const connection = new Sequelize(process.env.DATABASE_URL,{
    dialectOptions:{
      ssl:{
        required: true, 
        rejectUnauthorized:false,
      }
    }
  });
 connection.sync({force: true})

  module.exports = connection
  