'use strict'

const express = require("express");
const router = express.Router();

router.post("/saved_departments", require("../controllers/departmentController").saving_departments);

module.exports = router
