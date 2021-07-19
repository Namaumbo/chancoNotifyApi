const express = require("express");
const { loginValidation } = require("../middlewares/loginvalidation");
const { singUpValidator } = require("../middlewares/signUpValidator");

const router = express.Router();

// getting all registered students
router.get("/", require("../controllers/staffController").get_all_staffs);

// with log in middle ware
//loging in a staff
router.post(
  "/LoginAStaff",
  loginValidation,
  require("../controllers/staffController").LoginAStaff
);

router.post(
  "/signUpAStaff",
  singUpValidator,
  require("../controllers/staffController").sign_up_a_lecturer
);

module.exports = router;
