const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.post("/contact", appController.contactDetails);
router.post("/wishlist", appController.addWishlist);
router.post("/cart", appController.addCart);
router.post("/subscribe", appController.Subscribe)
router.post("/comment",appController.Comment);
router.post("/saveaddress",appController.saveAddress);
router.post("/purchasecourse",appController.purchaseCourse);

router.get("/getcourses", appController.getAllCourses);
router.get("/getblogs", appController.getAllBlogs);
router.get("/getcart", appController.getCartDetails);
router.get("/getaddress", appController.getAddress);

router.delete("/deletecart", appController.deleteCartDetails);

module.exports = router;