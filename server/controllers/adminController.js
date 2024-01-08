const Admin = require("../models/adminModel");
const Blog = require("../models/blogModel");
const Category = require("../models/categoryModel");
const Course = require("../models/courseModel");
const Purchase = require("../models/purchaseModel");
const Contact = require("../models/contactModel");
const Wishlist = require("../models/wishlistModel");
const User = require("../models/registerModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const sendEmail = require("../services/resetEmail");
const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;
const expirationTimestamp = Math.floor(Date.now() / 1000) + (3 * 30 * 24 * 60 * 60); 

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
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: expirationTimestamp });

    res.status(201).json({ message: "Login successful", token, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Invalid Credentials", error: error.message });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const { token } = req.body;

    let adminId = jwt.verify(token, secretKey, (err, decoded) => {
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

    const admin = Admin.findById(id);
    if(admin){
    res.status(201).json({ data: admin, status: true });
  }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get admin",
      status: false,
      error: error.message,
    });
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
  const image = req.file ? req.file.filename : null;
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
      image,
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

exports.addCategory = async (req, res) => {
  const {
    categorytitle,
  } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const newCategory = new Category({
      categorytitle,
      image
    });
    await newCategory.save();

    res
      .status(201)
      .json({ message: "Category Added Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add category", error: error.message });
  }
};

exports.addBlog = async (req, res) => {
  const { title, usertype, date, views, description, about, goal } = req.body;
  const image = req.file ? req.file.filename : null;
  try {
    const newBlog = new Blog({
      title,
      usertype,
      date,
      views,
      description,
      about,
      goal,
      image,
    });
    await newBlog.save();

    res.status(201).json({ message: "Blog Added Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add Blog", error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    const userId = {"_id":id}
    const updateUserStatus = await User.findByIdAndUpdate(
      userId,
      {
        status,
      },
      {
        new: true,
      }
    );
    if (!updateUserStatus) {
      return res.status(409).json({
        message: 'Failed to update'
      });
    }
    const user = await User.find();
    res.status(201).json({ message: "Status updated Successfully",data:user, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Status", error: error.message });
  }
};

exports.updateCourseStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    const purchaseId = {"_id":id}
    const updateCourseStatus = await User.findByIdAndUpdate(
      purchaseId,
      {
        status,
      },
      {
        new: true,
      }
    );
    if (!updateCourseStatus) {
      return res.status(409).json({
        message: 'Failed to update'
      });
    }
    const purchase = await Purchase.find();
    res.status(201).json({ message: "Status updated Successfully",data:purchase, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Status", error: error.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ data: contacts, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ data: categories, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find();

    const getData = async (userId, courseId, status) => {
      // console.log(userId,courseId);
      const user = await User.findById({ _id: userId });
      const course = await Course.findById({ _id: courseId });
      const data = {
        user: user.username,
        course: course.title,
        status: "Deactive",
      };
      return data;
      // return res.status(200).json({ data: data, status: true });
    };
    let finishArr = wishlist.map(async (list) => {
      const userId = list.userId;
      const courseId = list.courseId;
      const status = list.status;
      return await getData(userId, courseId, list);
    });

    return Promise.all(finishArr)
      .then((resolvedValues) => {
        return res.status(200).json({ data: resolvedValues, status: true });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get wishlist",
      status: false,
      error: error.message,
    });
  }
};

exports.getPurchaseCourse = async (req, res) => {
  try {
    const courseList = await Purchase.find();
    res.json({ data: courseList, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};


exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json({ data: user, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all users",
      status: false,
      error: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.body
  try {
    const category = await Category.findByIdAndDelete(id);
    if(category){
    res.status(200).json({ message: "Category Deleted Successfully", status: true });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};