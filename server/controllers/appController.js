const sendEmail = require("../services/resetEmail");
const Contact = require("../models/contactModel");
const User = require("../models/registerModel");

exports.contactDetails = async (req, res) => {
    try {
      const { name, email, phoneNo, subject, message } = req.body;
     
      const newContactDetails = new Contact({
        name,
        email,
        phoneNo,
        subject,
        message
      })
      
      const mailDetails = {
        email: email,
        subject: subject,
        name: name,
        message: message,
      }
  
      await sendEmail(mailDetails);
      await newContactDetails.save();
      res.status(201).json({
        status: true,
        message: "Message sent Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to send email",
        status: false,
        error: error.message,
      });
    }
  };