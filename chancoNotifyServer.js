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

// *******************************
// message routes
// ******************************
app.use("/message", require("./APIRoutes/messageRoutes.js"));
// ********************************
// department routes
// ******************************
// temporaly route for saving departments
app.use("/department",require("./APIRoutes/DepartmentalRoutes.js"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("your app is running on port 4000 ");
});

// exports.get_classroom_messages = async (req, res, next) => {
//   const studentAvailable = await student.findOne({
//     where: { RegistrationNumber: req.RegistrationNumber },
//   }).catch(err=>{
//     console.error(err);
//   });
//   if (!studentAvailable){
//     return res.status(404).json({message:"hmm there seems to be an error"});
//   }
//   const messages = await message_model
//     .findAll({
//       where: { message_type: "GOOGLE CLASSROOM" },
//       attributes: ["message_body", "sent_at", "staffId"],
//       include: {
//         model: staff,
//         attributes: ["firstName", "lastName", "role", "departmentId"],
//         include: { model: department, attributes: ["name", "id"] },
//       },
//     }).catch(err=>console.error(err));

//     if (messages.length === 0) {
//       res.status(404).json({
//         status: "No messages currently",
//       });
//     } 
//     const idsHolder = [];
//       messages.forEach((message) => {
//         const id = message.staff.department.id;
//         idsHolder.push(id);
//       })
//     idsHolder.forEach(async (messageId) => {
//           if (studentAvailable.departmentId === messageId) {
//            const msg = await  message_model.findAll({
//               where: { departmentId: messageId },
//             }).catch(err=>{
//               console.log(err)
//             }); 
//              res.status(200).json({ messages: msg });
//           }
//         });
// };