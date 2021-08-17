const express = require("express");
const { messageValidator } = require("../middlewares/messageValidator.js");

const router = express.Router();

router.get("/broadcastMsg", require("../controllers/messageController").get_broadcast_messages);

router.get("/classroomMsg", require("../controllers/messageController").get_classroom_messages);

router.get("/departmentMsg", require("../controllers/messageController").get_department_messages);

router.get("/secretaryMsg", require("../controllers/messageController").get_secretary_messages);

router.get("/personalMsg", require("../controllers/messageController").get_personal_messages);

router.get("/scholarshipMsg", require("../controllers/messageController").get_scholarship_messages);





router.post("/sendMsg",messageValidator,require("../controllers/messageController").send_message)

module.exports = router;
