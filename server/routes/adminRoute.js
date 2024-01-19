const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const path = require('path');
// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

// Set up multer upload
const upload = multer({
  storage: storage,
  limits:{"fileSize":2000000}
  
});

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.post("/addcourse", adminController.addCourse);
router.post("/addcategory", adminController.addCategory);
router.post("/addsubcategory", adminController.addSubCategory);
router.post("/addblog", adminController.addBlog);
router.post('/upload', upload.single('image'), (req, res) => {
  console.log('Request received'); 
  console.log(req.body); 
  try {
    const ImageUrl = `${process.env.IMAGE_URL}/${req.file.filename}`

    return res.status(200).json({message:'File uploaded successfully',data:ImageUrl});
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
    console.log('Error')
  }
});

router.post('/uploadvideo', upload.single('video'), (req, res) => {
  console.log('Request received'); 
  console.log(req.body); 
  try {
    const ImageUrl = `${process.env.IMAGE_URL}/${req.file.filename}`

    return res.status(200).json({message:'File uploaded successfully',data:ImageUrl});
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
    console.log('Error')
  }
});

router.put("/updatestatus", adminController.updateStatus);
router.put("/updatecoursestatus", adminController.updateCourseStatus);
router.put("/updatecategory", adminController.updateCategory);
router.put("/updatesubcategory", adminController.updateSubCategory);

router.post("/getpurchasebyId",adminController.getPurchaseCourseById);
router.post("/getcoursebyId",adminController.getCourseById);
router.post("/sendpurchasestatus",adminController.sendPurchaseStatusMail);
router.post("/addcoursecontent",adminController.addCourseContent);

router.get("/getcontacts",adminController.getContacts);
router.get("/getcourses", adminController.getAllCourses);
router.get("/getwishlist",adminController.getWishlist);
router.get("/getadmin",adminController.getAdmin);
router.get("/getpurchasecourse",adminController.getPurchaseCourse);
router.get("/getcategory",adminController.getCategory);
router.get("/getsubcategory",adminController.getSubCategory);
router.get("/getusers",adminController.getAllUser);

router.delete("/deletecategory",adminController.deleteCategory);
router.delete("/deletesubcategory",adminController.deleteSubCategory);

module.exports = router;