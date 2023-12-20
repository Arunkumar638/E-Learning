const sendEmail = require("../services/resetEmail");
const Contact = require("../models/contactModel");
const Courses = require("../models/courseModel");
const Blogs = require("../models/blogModel");
const Wishlist = require("../models/wishlistModel");
const jwt = require("jsonwebtoken");

const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;

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
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({
        message: "Failed to get all courses",
        status: false,
        error: error.message,
      });
    }
  };

  exports.getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blogs.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({
        message: "Failed to get all blogs",
        status: false,
        error: error.message,
      });
    }
  };

  exports.addWishlist = async (req, res) => {
    try {
      const { token, courseId, status } = req.body;
      console.log(req.body);
      
      const courseExists = await Wishlist.findOne({
        courseId,
      });
      if (courseExists) {
        return res.status(409).json({
          status: false,
          message: "Already added to wishlist",
        });
      }

      let userId =  jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          // Token verification failed (token is invalid or expired)
          return res.status(500).json({
            message: "Token Expired",
            status: false,
            error: err.message,
          });
        } else {
          // Token is valid
           console.log('Token decoded:', decoded);
        }
        const id = decoded.userId;
        return id;
      });

      const newWishlist = new Wishlist({
        userId,
        courseId,
        status
      });
      await newWishlist.save();
      res.status(201).json({
        status: true,
        message: "Added to wishlist successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to add to wishlist",
        status: false,
        error: error.message,
      });
    }
  };