const express = require("express");
const { messageValidator } = require("../middlewares/messageValidator.js");
const { verifyToken } = require("../middlewares/studentDepartment");
const { staffVerications } = require("../middlewares/staffMessage.js");


const router = express.Router();

router.get(
  "/broadcastMsg",
  require("../controllers/messageController").get_broadcast_messages
);

router.get(
  "/classroomMsg",
  require("../controllers/messageController").get_classroom_messages
);

router.get(
  "/departmentMsg",
  verifyToken,
  require("../controllers/messageController").get_department_messages
);

router.get(
  "/secretaryMsg",
  require("../controllers/messageController").get_secretary_messages
);

router.get(
  "/personalMsg",
  require("../controllers/messageController").get_personal_messages
);

router.get(
  "/scholarshipMsg",
  require("../controllers/messageController").get_scholarship_messages
);

router.delete("/deleteMsg", require("../controllers/messageController").delete);

router.get("/", require("../controllers/messageController").getall);

router.post(
  "/sendMsg",
  [messageValidator, staffVerications],
  require("../controllers/messageController").send_message
);

module.exports = router;
