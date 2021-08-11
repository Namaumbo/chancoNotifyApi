"use strict";

const message_model = require("../models/message.js");

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
        message: "Opps there is a problem with the server",
      });
    });
};

/************************ 
 getting all messages
*************************/

exports.get_all_messages = async (req, res, next) => {
  const get_messages = message_model.findAll({
    attributes: ["message_body", "sent_at", "staffId"],
  });
  get_messages
    .then((response) => {
      if (response.length === 0) {
        res.status(200).json({
          status: "No messages currently",
        });
      } else {
        res.status(200).json({
          message: response,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: `there has been an error${error.message}`,
      });
    });
};
