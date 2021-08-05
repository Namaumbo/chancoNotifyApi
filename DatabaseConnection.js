const {Sequelize} = require("sequelize")
require('dotenv').config()

const connection = new Sequelize("chancoNotify","postgres","spikker6!",{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
  });

  //connection.sync({force:true})

  module.exports = connection