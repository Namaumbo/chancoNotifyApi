"use strict";

const department = require("../models/department.js");

exports.saving_departments = async (req, res, next) => {
  const { name } = req.body;
  department.create(req.body)
    .then((data) => {
      if (data === null) {
        res
          .status(400)
          .json({ message: "there is a problem with the internet" });
      } else {
        res.status(201).json({ message: data });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
