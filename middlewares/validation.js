"use strict"

const {check, validationResult} = require('express-validator');

exports.validateUser = [
    // check  first name
    check('firstName')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('User name can not be empty!')
      .bail()
      .isLength({min: 3})
      .withMessage('Minimum 3 characters required!')
      .bail(),  

      //checking last name
      check('lastName')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('User name can not be empty!')
      .bail()
      .isLength({min: 3})
      .withMessage('Minimum 3 characters required!')
      .bail(),  

      //checking email
      check('email')
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage('Invalid email address!')
      .bail(), 
      
      //checking password
      check('password')
      .not()
      .isEmpty()
      .withMessage('Password cannot be empty')
      .isLength({min: 6})
      .withMessage('Password must be more that 6 charecters'), 

  validate = (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];