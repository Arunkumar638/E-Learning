const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');
const appRoutes = require('./routes/appRoute');
const bodyParser = require('body-parser');
require("dotenv").config();

const dbURI = "mongodb://localhost:27017/learning";
const port = process.env.PORT;
const app = express();

// Define database connection
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.statusCode || 500).json(err.message);
  }
  next();
});

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/app", appRoutes);
app.listen(port, () => console.log(`Server up and running on port ${port}`));
