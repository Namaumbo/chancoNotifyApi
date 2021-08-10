const express = require("express");
const { messageValidator } = require("../middlewares/messageValidator");

const router = express.Router();

router.get("/", require("../controllers/messageController").get_all_messages);



module.exports = router;
