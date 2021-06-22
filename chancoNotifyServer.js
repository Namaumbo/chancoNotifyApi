const express = require('express')
const app = express();
require('dotenv').config();
const logger = require("morgan")
const {sequelize} = require('./models')
const helmet = require("helmet");





app.use(logger("common"))
app.use(express.json())
app.use(helmet())

// const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
  res.send("hsdhsh")
});


app.listen(5000,()=>{
    console.log("your app is running on port 5000")
})
