"use strict";

const { check, validationResult } = require("express-validator");
exports.singUpValidator = [
  check("firstName")
    .not()
    .isEmpty()
    .isAlpha()
    .trim()
    .withMessage("first name cannot be blank")
    .bail(),

  check("lastName")
    .not()
    .isEmpty()
    .isAlpha()
    .trim()
    .withMessage("last name cannot be blank")
    .bail(),

  check("email")
    .not()
    .isEmpty()
    .normalizeEmail()
    .trim()
    .withMessage(" invalid email")
    .bail(),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 6 })
    .withMessage("Password must be more that 6 charecters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    // next();
  },
];
