const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/login-status", userController.loginStatus);
router.post("/forgot", userController.forgotPassword);
router.post("/verify", userController.verifyToken);

router.get("/getalluser", userController.getAllUser);

router.put("/reset", userController.resetUserByEmail);

router.delete("/logout", userController.deleteUserByToken);

module.exports = router;
