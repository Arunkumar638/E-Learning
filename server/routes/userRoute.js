const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const appController = require("../controllers/appController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/login-status", userController.loginStatus);
router.post("/forgot", userController.forgotPassword);
router.post("/verify", userController.verifyToken);
router.post("/contact", appController.contactDetails);
router.post("/wishlist", appController.addWishlist);
router.post("/subscribe", appController.Subscribe)
router.post("/comment",appController.Comment)

router.get("/getalluser", userController.getAllUser);
router.get("/getcourses", appController.getAllCourses);
router.get("/getblogs", appController.getAllBlogs);

router.put("/reset", userController.resetUserByEmail);

router.delete("/logout", userController.deleteUserByToken);

module.exports = router;
