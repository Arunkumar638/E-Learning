const sendEmail = require("../services/resetEmail");
const subscriptionEmail = require("../services/subscribeMail");
const Contact = require("../models/contactModel");
const Courses = require("../models/courseModel");
const Purchase = require("../models/purchaseModel");
const Blogs = require("../models/blogModel");
const Wishlist = require("../models/wishlistModel");
const Cart = require("../models/cartModel");
const Address = require("../models/addressModel");
const Comment = require("../models/commentReplyModel");
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
      message,
    });

    const mailDetails = {
      email: email,
      subject: subject,
      name: name,
      message: message,
    };

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

exports.Subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const mailDetails = {
      email: email,
      subject: "Subscription Confirmation",
      name: "Learner",
    };
    subscriptionEmail(mailDetails);
    res.status(201).json({
      status: true,
      message: "You're now subscribed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send Mail",
      status: false,
      error: error.message,
    });
  }
};

exports.Comment = async (req, res) => {
  try {
    const { name, email, website, comment } = req.body;
    const newComment = new Comment({
      name,
      email,
      website,
      comment,
    });

    await newComment.save();
    res.status(201).json({
      status: true,
      message: "Comment posted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save Comment",
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

exports.getCartDetails = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get cart details",
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

    let userId = jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Token verification failed (token is invalid or expired)
        return res.status(500).json({
          message: "Token Expired",
          status: false,
          error: err.message,
        });
      } else {
        // Token is valid
        console.log("Token decoded:", decoded);
      }
      const id = decoded.userId;
      return id;
    });

    const newWishlist = new Wishlist({
      userId,
      courseId,
      status,
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

exports.addCart = async (req, res) => {
  try {
    const { courseId, title, price, imagepath, status } = req.body;

    const courseExists = await Cart.findOne({
      courseId,
    });
    if (courseExists) {
      return res.status(409).json({
        status: false,
        message: "Already added to cart",
      });
    }

    const newCart = new Cart({
      courseId,
      title,
      price,
      imagepath,
      status,
    });
    await newCart.save();
    res.status(201).json({
      status: true,
      message: "Added to cart successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add to cart",
      status: false,
      error: error.message,
    });
  }
};

exports.saveAddress = async (req, res) => {
  try {
    const { name, email, phone, country, city, state, street, pincode } = req.body;

    const addressExists = await Address.findOne({
      email,
    });
    if (addressExists) {
      return res.status(409).json({
        status: false,
        message: "Address already exists",
      });
    }

    const newAddress = new Address({
      name,
      email,
      phone,
      country,
      city,
      state,
      street,
      pincode,
    });
    await newAddress.save();
    res.status(201).json({
      status: true,
      message: "Address saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save address",
      status: false,
      error: error.message,
    });
  }
};

exports.purchaseCourse = async (req, res) => {
  try {
    const { name, email, courseId, payment } = req.body;

    const courseDetails = await Courses.findById({"_id":courseId});

    const newPurchase = new Purchase({
      name,
      email,
      title:courseDetails.title,
      type:courseDetails.type,
      price:"$"+courseDetails.price,
      paymentType:payment,
      status:"Deactive"
    });
    await newPurchase.save();
    res.status(201).json({
      status: true,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to place order",
      status: false,
      error: error.message,
    });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await Address.find();
    res.json({ data: address, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all users",
      status: false,
      error: error.message,
    });
  }
};

exports.deleteCartDetails = async (req, res) => {
  const { courseId } = req.body;
  try {
    const cart = await Cart.findOne({ courseId });
    const id = cart._id;
    const deleteCart = await Cart.findByIdAndDelete(id);
    if (deleteCart) {
      res
        .status(200)
        .json({ status: true, message: "Removed from cart successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove cart details",
      status: false,
      error: error.message,
    });
  }
};
