const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.post("/contact", appController.contactDetails);
router.post("/wishlist", appController.addWishlist);
router.post("/subscribe", appController.Subscribe)
router.post("/comment",appController.Comment);

router.get("/getcourses", appController.getAllCourses);
router.get("/getblogs", appController.getAllBlogs);

module.exports = router;