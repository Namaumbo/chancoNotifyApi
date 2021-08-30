

///this middlewear checks registered student then department they come from
const jwt = require("jsonwebtoken")
const student = require("../models/student.js")

exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
    jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"    
        });
      }
      // console.log(decoded);
      req.RegistrationNumber = decoded.RegistrationNumber.RegistrationNumber;
      next();
    });
  };
