"use strict";

const message_model = require("../models/message.js");
// const staff_model  = require("../models/staff.js");

/************************ 
 sending a messages
*************************/

exports.send_message = async (req, res, next) => {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  const { title, message_body, is_important } = req.body;
  const message_details = Object.assign(req.body, {
    sent_at: time,
  });
  message_model
    .create(message_details)
    .then((response) => {
      res.status(200).json({
        message: "sent successfully",
        message_description: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};

/************************ 
 getting all messages
*************************/

exports.get_broadcast_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "BROADCAST" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};


exports.get_personal_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "PERSONAL" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};

exports.get_department_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "DEPARTMENT" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};


exports.get_scholarship_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "SCHOLARSHIP" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};


exports.get_classroom_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "CLASSROOM" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};

exports.get_secretary_messages = async (req, res, next) => {
 
  const BroadcastMessages = message_model.findAll({
    where: { message_type: "SECRETARY" },
    attributes: ["message_body", "sent_at", "staffId"],
  });
  BroadcastMessages.then((response) => {
    if (response.length === 0) {
      res.status(200).json({
        status: "No messages currently",
      });
    } else {
      res.status(200).json({
        message: response,
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: `there has been an error${error.message}`,
    });
  });
};

exports.delete = async(req,res,) => {

  message_model.destroy({where:{}}).then(() => {
    res.status(200).json("sussessfully deleted all messages")
  }).catch(err => {console.error(err);})

}