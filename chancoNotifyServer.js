require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const logger = require("morgan");
const { sequelize } = require("./models");
const helmet = require("helmet");

app.use(logger("common"));
app.use(express.json());
app.use(helmet());




// const PORT = process.env.PORT || 8080;

app.post("/", (req, res) => {
//  const {, , ,} = req.body;
// trial database
  require("./models/student").create(
    {firstName:"John",
    lastName :"dfs",
    Department:"dsfsbf",
    phoneNumber:"09343",
    RegistrationNumber:"jniojbodsf"
  }
  ).then(response => {
   if(response){
     res.json({
       "munthuyo":response
     });
   }
 })
});

app.listen(4000, () => {
  console.log("your app is running on port ");
});
