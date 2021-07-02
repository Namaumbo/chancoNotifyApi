"use strict";

const { response } = require("express");

// getting all the students
exports.getRegisteredStudents = async (req, res, next) => {
  const students = require("../models/student").findAll({
    attributes: ["firstName", "lastName", "RegistrationNumber"],
  });

  students
    .then((response) => {
      if (response.length === 0) {
        res.status(200).json({
          message: "You have no students",
        });
      } else {
        res.status(200).json({
          message: "here is the list of students",
          description: response,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// adding a student to the database
exports.RegisterAStudent = async (req, res, next) => {
const {
  firstName,
  lastName,
  Department,
  RegistrationNumber,
  phoneNumber
} = req.body

  const student = await require("../models/student").findOne({
    where:{
      RegistrationNumber
    }
  });

  if (student) {
    res.status(409).json({
      message: "student available",
      detail: student,
    });
  }
  else if(student==null) {
    require("../models/student")
      .create(req.body)
      .then((response) => {
        res.status(201).json({
          message: "student registered",
          student: response,
        });
      }).catch((err) => {
        res.status(500).json({
          message:"There has been an error",
          detail : err.message
        })
      });
  }
  else{
    
  }
};
