require("dotenv").config();
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
// const { sequelize } = require("./models");
const helmet = require("helmet");

app.use(logger("common"));
app.use(express.json());

app.use(helmet());

app.use(cors());

// resgistering routes
// ********************************
// student routes
// *******************************
app.use("/students", require("./APIRoutes/studentsRoutes.js"));
// ********************************
// staff routes
// *******************************
app.use("/staffs", require("./APIRoutes/staffsRoutes.js"));
app.use("/message", require("./APIRoutes/messageRoutes.js"));
// ********************************
// message routes
// *******************************
// app.use("/messages",require("./APIRoutes/messageRoutes.js"));

// const PORT = process.env.PORT || 8080;
app.listen(4000, () => {
  console.log("your app is running on port ");
});
