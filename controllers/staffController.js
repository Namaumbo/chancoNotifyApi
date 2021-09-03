"use strict";

const { response } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const staff_model = require("../models/staff");
const department = require("../models/department.js")
// const e = require("express");

exports.get_all_staffs = async (req, res) => {
  const staffs = staff_model.findAll({
    attributes: [
      "id",
      "firstName",
      "lastName",
      "email",
      "password",
      "createdAt",
    ],
    include:{
      model: department,
      attributes: ["id","name"]
  }
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
exports.sign_up_a_lecturer = async (req, res) => {
  const { firstName, lastName, email, password,name,is_head_of_dep,role } = req.body;

  const salt = await bcrypt.genSalt(10);
  //hashing the user password
  const hashed_password = await bcrypt.hash(password, salt);
  // searchin department
  const departmentAvailable = await department.findOne({
    where: { name },
  });
  if (departmentAvailable === null) {
    res.status(401).json({ message: "no such department name" });
  } else {
   const staff = await staff_model.findOne({
      where: { email },
    })
    if (staff) {
      res.status(409).json({
        message: "staff available",
        detail: staff,
      });
    } else if (staff == null) {
      const newStaff = Object.assign(req.body, {
        password:hashed_password ,
        departmentId: departmentAvailable.id,
      });
      staff_model.create(newStaff)
        .then((response) => {
          res.status(201).json({
            message: "staff registered",
            staff: response,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "There has been an error",
            detail: err.errors[0].message,
          });
        });
    } else {
    }
  }
};

// login use case
exports.LoginAStaff = async (req, res, next) => {
  const { email, password } = req.body;
  // checking if email exists
  const staff_existential = await staff_model.findOne({ where: { email } });

  if (staff_existential) {
    const checkpassword = await bcrypt.compare(
      password,
      staff_existential.password
    );
    if (!checkpassword) {
      res.status(422).json({
        status: "login error",
        message: "wrong password please re-enter your password",
      });
      return false;
    } else {
      const token = jwt.sign({id:staff_existential.id},process.env.SECRETE_KEY, {
        expiresIn: 3600,
      });
      res.status(200).json({
        Status: "login successfully",
        staff_existential,
        accessToken : token,
      });
      return true;
    }
  } else if (!staff_existential) {
    res.status(422).json({
      status: "no user",
      message: "wrong email please re-enter your email",
    });
  } else {
    res
      .status(500)
      .json({ message: "opps errors were meant for humans encounter" });
  }
};
