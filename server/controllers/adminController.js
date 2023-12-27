const Admin = require("../models/adminModel");
const Blog = require("../models/blogModel");
const Course = require("../models/courseModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const sendEmail = require("../services/resetEmail");
const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;

exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await Admin.findOne({
      email,
    });
    if (userExists) {
      return res.status(409).json({
        status: false,
        message: "Email already registered",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      status: true,
      message: "Admin registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to register admin",
      error: error.message,
    });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await Admin.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user && isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Email", status: false });
    }
    // Check if the password is correct

    if (!isPasswordCorrect && user) {
      return res
        .status(401)
        .json({ message: "Invalid password", status: false });
    }

    // Create and send a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(201).json({ message: "Login successful", token, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Invalid Credentials", error: error.message });
  }
};

exports.addCourse = async (req, res) => {
  const {
    title,
    duration,
    lectures,
    type,
    price,
    enrolled,
    language,
    deadline,
    instructor,
    description,
    requirements,
    contents,
  } = req.body;

  try {
    const newCourse = new Course({
      title,
      duration,
      lectures,
      type,
      price,
      enrolled,
      language,
      deadline,
      instructor,
      description,
      requirements,
      contents,
    });
    await newCourse.save();

    res
      .status(201)
      .json({ message: "Course Added Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add Course", error: error.message });
  }
};

exports.addBlog = async (req, res) => {
  const { title, usertype, date, views, description, about, goal } = req.body;

  try {
    const newBlog = new Blog({
      title,
      usertype,
      date,
      views,
      description,
      about,
      goal,
    });
    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog Added Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add Blog", error: error.message });
  }
};
