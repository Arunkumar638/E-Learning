const Admin = require("../models/adminModels/adminModel");
const Blog = require("../models/adminModels/blogModel");
const Category = require("../models/adminModels/categoryModel");
const SubCategory = require("../models/adminModels/subCategoryModel");
const Course = require("../models/adminModels/courseModel");
const CourseContent = require("../models/adminModels/courseContentModel");
const Purchase = require("../models/userModels/purchaseModel");
const Contact = require("../models/adminModels/contactModel");
const Wishlist = require("../models/adminModels/wishlistModel");
const PurchaseStatusEmail = require("../services/purchaseStatusMail");
const User = require("../models/userModels/registerModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const sendEmail = require("../services/resetEmail");
const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;
const expirationTimestamp =
  Math.floor(Date.now() / 1000) + 3 * 30 * 24 * 60 * 60;

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
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: expirationTimestamp,
    });

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
    if (admin) {
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
    type,
    price,
    image,
    video,
    language,
    categorytitle,
    description,
    requirements,
    contents,
    status,
    createdAt
  } = req.body;

  try {
    const newCourse = new Course({
      title,
      duration,
      description,
      type,
      price,
      video,
      language,
      categorytitle,
      requirements,
      contents,
      status,
      createdAt,
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
  const { categorytitle, status, image, createdAt } = req.body;
  console.log(req.body);
  try {
    const newCategory = new Category({
      categorytitle,
      status,
      createdAt,
      image,
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

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ data: courses, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all courses",
      status: false,
      error: error.message,
    });
  }
};

exports.addSubCategory = async (req, res) => {
  const { categorytitle, subcategorytitle, status, image, createdAt } = req.body;

  try {
    const newsubCategory = new SubCategory({
      categorytitle,
      subcategorytitle,
      status,
      createdAt,
      image,
    });
    await newsubCategory.save();

    res
      .status(201)
      .json({ message: "SubCategory Added Successfully", status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add subcategory", error: error.message });
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

exports.addCourseContent = async (req, res) => {
  try {
    const courseData = req.body;
    console.log('Received course data:', courseData);

    const { coursetitle, title, sections } = courseData;

    // Extract and format nested values
    const formattedSections = (sections || []).map((section) => {
      const { title: sectionTitle, contents } = section;

      // Ensure contents is defined before mapping over it
      const formattedContents = (contents || []).map((content) => {
        const { contenttitle, description, length, link, url } = content;
        return {
          contenttitle,
          description,
          length,
          link,
          url,
        };
      });

      return {
        title: sectionTitle,
        contents: formattedContents,
      };
    });


    const newCourseContent = new CourseContent({
      coursetitle,
      title,
      sections: formattedSections,
    });

    // Save the instance to the database
    const savedCourseContent = await newCourseContent.save();

    res
      .status(201)
      .json({
        data: savedCourseContent,
        message: "Course Contents Saved Successfully",
        status: true,
      });
  } catch (error) {
    console.error("Error saving course:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    const userId = { _id: id };
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
        message: "Failed to update",
      });
    }
    const user = await User.find();
    res.status(201).json({
      message: "Status updated Successfully",
      data: user,
      status: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Status", error: error.message });
  }
};

exports.updateCourseStatus = async (req, res) => {
  const { id, status } = req.body;

  try {
    const courseId = { _id: id };
    const updateCourseStatus = await Course.findByIdAndUpdate(
      courseId,
      {
        status,
      },
      {
        new: true,
      }
    );
    if (!updateCourseStatus) {
      return res.status(409).json({
        message: "Failed to update",
      });
    }
    const purchase = await Purchase.find();
    res.status(201).json({
      message: "Status updated Successfully",
      data: purchase,
      status: true,
    });
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

exports.getSubCategory = async (req, res) => {
  try {
    const subcategories = await SubCategory.find();
    res.status(200).json({ data: subcategories, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};

exports.updateCategory = async (req, res) => {
  const { id, categorytitle, status, image } = req.body;

  try {
    const categoryId = { _id: id };
    const updateCategoryDetails = await Category.findByIdAndUpdate(
      categoryId,
      {
        categorytitle,
        status,
        image,
      },
      {
        new: true,
      }
    );

    if (!updateCategoryDetails) {
      return res.status(409).json({
        message: "Failed to update",
      });
    }
    const category = await Category.find();
    res.status(201).json({
      message: "Category updated Successfully",
      data: category,
      status: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Category", error: error.message });
  }
};

exports.updateSubCategory = async (req, res) => {
  const { id, categorytitle, subcategorytitle, image, status } = req.body;

  try {
    const subcategoryId = { _id: id };
    const updateCategoryDetails = await SubCategory.findByIdAndUpdate(
      subcategoryId,
      {
        categorytitle,
        subcategorytitle,
        image,
        status,
      },
      {
        new: true,
      }
    );

    if (!updateCategoryDetails) {
      return res.status(409).json({
        message: "Failed to update",
      });
    }
    const category = await SubCategory.find();
    res.status(201).json({
      message: "SubCategory updated Successfully",
      data: category,
      status: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Category", error: error.message });
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
    if(courseList){
      const combinedType = courseList.reduce((result, item, index) => {
        result["purchase"] = item.purchaseDetails;
        return result;
      }, {});
      const data = {
        id:courseList[0]._id,
        details:combinedType,
      }
    res.json({ data: data, status: true });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};

exports.getPurchaseCourseById = async (req, res) => {
  const { id, courseId } = req.body;

  try {
    const purchaseCourseList = await Purchase.findOne(
      { _id: id },
      { _id: 0, purchaseDetails: { $elemMatch: { _id: courseId } } }
    );
    if (!purchaseCourseList) {
      res.status(400).json({
        message: "Can't find the courses purchased",
        status: false,
      });
    }
    const data = purchaseCourseList.purchaseDetails;
    res.status(200).json({ data: data, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};

exports.getCourseById = async (req, res) => {
  const { id, courseId } = req.body;
  console.log(req.body);
  try {
    const CourseList = await Course.findById({ _id: id },);
    console.log(CourseList);
    if (!CourseList) {
      res.status(400).json({
        message: "Can't find the courses purchased",
        status: false,
      });
    }
    res.status(200).json({ data: CourseList, status: true });
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
  const { id } = req.body;
  try {
    const category = await Category.findByIdAndDelete(id);
    const categories = await Category.find();
    if (category) {
      res.status(200).json({
        message: "Category Deleted Successfully",
        data: categories,
        status: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const subcategory = await SubCategory.findByIdAndDelete(id);
    const subcategories = await SubCategory.find();
    if (subcategory) {
      res.status(200).json({
        message: "SubCategory Deleted Successfully",
        data: subcategories,
        status: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all contacts",
      status: false,
      error: error.message,
    });
  }
};

exports.sendPurchaseStatusMail = async (req, res) => {
  try {
    const {
      category,
      email,
      message,
      name,
      paymentType,
      price,
      status,
      _id,
      title,
      type,
    } = req.body;

    const mailDetails = {
      email: email,
      subject: "Course Activation Failed",
      name: name,
      message: message,
    };
    PurchaseStatusEmail(mailDetails);
    const id = {
      _id: _id,
    };
    const updateStatus = await Purchase.findByIdAndUpdate(
      id,
      {
        status,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
      status: true,
      message: "Email sent Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send Email",
      status: false,
      error: error.message,
    });
  }
};
