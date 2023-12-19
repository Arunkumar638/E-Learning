const sendEmail = require("../services/resetEmail");
const Contact = require("../models/contactModel");
const Courses = require("../models/courseModel");

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
        message: "Message sent successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to send email",
        status: false,
        error: error.message,
      });
    }
  };

  exports.getAllCourses = async (req, res) => {
    try {
      const courses = await Courses.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({
        message: "Failed to get all courses",
        status: false,
        error: error.message,
      });
    }
  };