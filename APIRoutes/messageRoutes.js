const express = require("express");
const { messageValidator } = require("../middlewares/messageValidator.js");

const router = express.Router();

router.get("/", require("../controllers/messageController").get_all_messages);

router.post("/sendMsg",messageValidator,require("../controllers/messageController").send_message)

module.exports = router;
