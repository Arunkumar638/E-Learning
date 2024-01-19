const sendEmail = require("../services/resetEmail");
const subscriptionEmail = require("../services/subscribeMail");
const PurchaseSuccessEmail = require("../services/purchaseSuccessMail");
const Contact = require("../models/adminModels/contactModel");
const Courses = require("../models/adminModels/courseModel");
const Purchase = require("../models/userModels/purchaseModel");
const Category = require("../models/adminModels/categoryModel");
const SubCategory = require("../models/adminModels/subCategoryModel");
const Blogs = require("../models/adminModels/blogModel");
const Wishlist = require("../models/adminModels/wishlistModel");
const Cart = require("../models/userModels/cartModel");
const Address = require("../models/userModels/addressModel");
const Comment = require("../models/userModels/commentReplyModel");
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

exports.getCourseById = async (req, res) => {
  const { id } = req.body;
  try {
    const courses = await Courses.findById(id);
    res.status(200).json({data:courses,status:true});
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

exports.getAllCategories = async (req, res) => {
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

exports.getAllSubCategories = async (req, res) => {
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

exports.getPurchaseCourses = async (req, res) => {
  const {id} = req.body;
  console.log(id);
  try {
    const courseList = await Purchase.findById(
      { _id:id });
    if(courseList){
    const data = courseList.purchaseDetails;
    res.status(200).json({ data: data, status: true });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};

exports.getPurchaseId = async (req, res) => {

  try {
    const purchaseCourseList = await Purchase.find();
    if (!purchaseCourseList) {
      res.status(400).json({
        message: "Can't find the courses purchased",
        status: false,
      });
    }
    const data = purchaseCourseList[0]._id;

    res.status(200).json({ data: data, status: true });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};

exports.getCoursePurchased = async (req, res) => {
  const { id,courseId } = req.body;

  try {
    const coursePurchased = await Courses.findById({_id:courseId});
    if(coursePurchased){
     const title = coursePurchased.title;

     const Purchasedcourse = await Purchase.findOne(
      { _id: id },
      { _id: 0, purchaseDetails: { $elemMatch: { coursetitle: title } } }
    );
    console.log(Purchasedcourse);

     res.status(200).json({ data: Purchasedcourse, status: true });
    }
    else{
      return res.status(404).json({
        status: false,
        message: "Can't find the Course Purchased",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
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

exports.addPurchaseCourse = async (req, res) => {
  const {id,purchaseCourse} = req.body;

  try {
    const data = purchaseCourse[0];

    // const result = await Purchase.findOne(
    //   { _id: id },
    //   { _id: 0, purchaseDetails: { $elemMatch: { coursetitle: purchaseCourse[0].coursetitle } } }
    // );
    // if(result.coursetitle == purchaseCourse[0].coursetitle){
    //  return res.status(409).json({ message: 'Course Already Purchased', status: true });
    // }
    
    const coursePurchased = await Purchase.findOneAndUpdate(
      { _id: id },
      { $push: { purchaseDetails: purchaseCourse } },
      { new: true }
    );

    const courseDetails= await Purchase.findById({ _id: id });
    const purchased = () =>{
      let htmlmessage = ``;
    if(purchaseCourse.length == 2){
       htmlmessage = `<div>Dear&nbsp;${courseDetails.name},<br/><p>Congrats, Your Purchase with the course was Successful<br/><br/>
      Your order Id is ${id}<br/><br/>Purchased Courses:<br/>${purchaseCourse[0].coursetitle}<br/>${purchaseCourse[1].coursetitle}</p></div>`;
    }
    if(purchaseCourse.length > 2){
       htmlmessage = `<div>Dear&nbsp;${courseDetails.name},<br/><p>Congrats, Your Purchase with the course was Successful<br/><br/>
      Your order Id is ${id}<br/><br/>Purchased Courses:<br/>${purchaseCourse[0].coursetitle}<br/>${purchaseCourse[1].coursetitle}<br/>${purchaseCourse[2].coursetitle}</p></div>`
    }
    if(purchaseCourse.length < 2){
       htmlmessage = `<div>Dear&nbsp;${courseDetails.name},<br/><p>Congrats, Your Purchase with the course was Successful<br/><br/>
      Your order Id is ${id}<br/><br/>Purchased Courses:<br/>${purchaseCourse[0].coursetitle}</p></div>`
    }
    return htmlmessage;
  }
    const mailDetails = {
      email: courseDetails.email,
      subject: "Purchase Successful",
      message:`Congrats, Your Purchase with the course was Successful`,
      htmlmessage:purchased(),
    };
    PurchaseSuccessEmail(mailDetails);

    if(coursePurchased){
     const title = coursePurchased.title;
     const Purchasedcourse = await Purchase.findOne({ title });
     res.status(200).json({ message: 'Order Placed Successfully', status: true });
    }
    else{
      return res.status(404).json({
        status: false,
        message: "Can't find the Course Purchased",
      });
      
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get courses purchased",
      status: false,
      error: error.message,
    });
  }
};

exports.addCart = async (req, res) => {
  try {
    const { courseId, title, price, type, image, status } = req.body;

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
      type,
      price,
      image,
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

    const addressExists = await Address.find();
    if (addressExists) {
      const id = addressExists[0]._id;
      const deleteAddress = await Address.findByIdAndDelete({_id:id})
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
    const purchaseData = req.body;
    console.log(purchaseData);

    const newPurchase = new Purchase(purchaseData);
  
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

exports.deleteCart = async (req, res) => {

  try {
    const deleteCart = await Cart.deleteMany({});
    if (deleteCart) {
      res
        .status(200)
        .json({ status: true, message: "Cart cleared successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove cart details",
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
