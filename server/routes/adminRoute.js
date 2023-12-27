const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.post("/addcourse", adminController.addCourse);
router.post("/addblog", adminController.addBlog);
module.exports = router;