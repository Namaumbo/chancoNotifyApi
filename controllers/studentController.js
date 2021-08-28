"use strict";

const { response } = require("express");
const department_model = require("../models/department.js");
const Student  = require("../models/student")



// getting all the students
exports.getRegisteredStudents = async (req, res, next) => {
  const students = Student.findAll({
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
    RegistrationNumber,
    phoneNumber,
    name,
  } = req.body;

  const department = await department_model.findOne({
    where: { name },
  });
  if (department === null) {
    res.status(401).json({ message: "no such department name" });
  } else {
    const student = await Student.findOne({
      where: {
        RegistrationNumber,
      },
    });
    if (student) {
      res.status(409).json({
        message: "student available",
        detail: student,
      });
    } else if (student == null) {
      const newStudent = Object.assign(req.body, {
        departmentId: department.id,
      });
      Student
        .create(newStudent)
        .then((response) => {
          res.status(201).json({
            message: "student registered",
            student: response,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "There has been an error",
            detail: err.message,
          });
        });
    } else {
    }
  }
};


// login student 

exports.loginStudent  = async (req, res, next) => {
  
  const {RegistrationNumber}= req.body;
  const studentRegistrationNumber = await Student.findOne({where:{RegistrationNumber}});

  if (!studentRegistrationNumber){
    res.status(404).send("wrong registration number");
  }
  else{
    res.status(200).json({studentName:studentRegistrationNumber})
  }


};