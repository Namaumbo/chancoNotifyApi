"use strict";

const { response } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const staff_model = require("../models/staff");
// const e = require("express");

exports.get_all_staffs = async (req, res, next) => {
  const staffs = staff_model.findAll({
    attributes: ["firstName", "lastName", "email", "password"],
  });

  staffs.then((response) => {
    if (response.length === 0 || response === null) {
      res.status(401).json({
        message: "there is no staff available",
      });
    } else {
      res.status(200).json({
        message: "list of staffs",
        staff: response,
      });
    }
  });
};

//sign up use case from the admin side
exports.sign_up_a_lecturer = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(req.body.password, salt);

  const staff = staff_model.findOne({
    where: { email },
  });

  staff
    .then((response) => {
      if (response) {
        res
          .status(409)
          .json({ message: `user already exists with Email ${email}` });
      } else {
        try {
          // changing the password into hashed password
          const new_staff = Object.assign(req.body, { password: hashed_password });
          if (firstName === "" || lastName === "" || email === "" || password === "") {
            res.status(400).json({ message: "invalid inputs" })
          }
          else {
            // saving into the staff model
            staff_model.create(new_staff).then(() => {
              res.status(201).json({ message: `successfully registered` });
            });
          }
        } catch (err) {
          if (res.status === 404) res.status(404).json({ message: err });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({ message: `Opps ${err.message}` });
      console.log(err);
    });
};

// login use case
exports.LoginAStaff = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.json({ message: "invalid inputs" });
  } else {

  // checking if email exists
    const staff_email = staff_model.findOne({ where: { email } })
    // const staff_password = staff_model.findOne({where:{ password}})

    if (staff_email != null) {

      const checkpassword = await bycrypt.compare(req.body.password, staff_email.password)



    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  }
};
