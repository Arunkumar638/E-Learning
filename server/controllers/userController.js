const User = require("../models/registerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const sendEmail = require("../services/resetEmail");
const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({
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

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      status: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to register user",
      error: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
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

    res
      .status(201)
      .json({ message: "Login successful", token, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Invalid Credentials", error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
  const { id, name, gender, department } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        gender,
        department,
      },
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email not registered", status: false });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
 
      const details = {
      mail:'support@spiegel.com',
      username:user.username
    }

    const message = `Hi ${details.username}\n\nWe have recieved a password reset request. Please click on the "Reset Password" shown below to reset your password\n\nIf you don’t want to reset your password, you can ignore this email. If you have any issues logging in with your new password, please contact us any time by email:${details.mail}`;
    const htmlMessage = `We have recieved a password reset request. Please use the below link to reset your password.<br/><br/>If you don’t want to reset your password, you can ignore this email. If you have any issues logging in with your new password, please contact us any time by email:${details.mail}`;
    const mailDetails = {
      email: email,
      subject: `Password reset request`,
      message: message,
      htmlmessage:htmlMessage,
      token:token,
      user:details.username
    }

    await sendEmail(mailDetails);
    return res
      .status(200)
      .json({ message: "Email sent successfully", status: true });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Unable to send email. Please try again later",
        error: error.message,
        status: false,
      });
  }
};

exports.verifyToken = async(req,res) =>{
  try {
    const { token } = req.body;

   jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Token verification failed (token is invalid or expired)
        return res.status(500).json({
          message: "Token Expired",
          status: false,
          error: err.message,
        });
      } else {
        // Token is valid
         console.log('Token decoded:', decoded);
      }

    });
  }catch (error) {
    res.status(500).json({
      message: "Failed to decode token",
      status: false,
      error: error.message,
    });
  }
}
exports.resetUserByEmail = async (req, res) => {
  try {
    const { token, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   let userId =  jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Token verification failed (token is invalid or expired)
        return res.status(500).json({
          message: "Token Expired",
          status: false,
          error: err.message,
        });
      } else {
        // Token is valid
         console.log('Token decoded:', decoded);
      }
      const id = decoded.userId;
      return id;
    });

    const register = await User.findByIdAndUpdate(
      userId,
      {
        password: hashedPassword,
      },
      {
        new: true,
      }
    );

    if (!register) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "Password updated successfully",
      status: true,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update password",
      status: false,
      error: error.message,
    });
  }
};


exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all users",
      status: false,
      error: error.message,
    });
  }
};

exports.loginStatus = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await Login.findOne({ token });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: false,
      });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all users",
      status: false,
      error: error.message,
    });
  }
};

exports.deleteUserByToken = async (req, res) => {

  try {
    const { token } = req.body;

   jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Token verification failed (token is invalid or expired)
        return res.status(500).json({
          message: "Token Expired",
          status: false,
          error: err.message,
        });
      } else {
        // Token is valid
         console.log('Token decoded:', decoded);
      }
    });
 
    res.json({
      message: "Logged out successfully",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get user",
      status: false,
      error: error.message,
    });
  }
};

