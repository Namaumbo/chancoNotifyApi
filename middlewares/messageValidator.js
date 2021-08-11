"use strict"

const {check, validationResult} = require('express-validator');
exports.messageValidator = [
  check('message_body')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('send non empty message')
    .bail(),
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({errors: errors.array()});
  next();
  },
];