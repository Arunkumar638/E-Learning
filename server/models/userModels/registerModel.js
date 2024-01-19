const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  username: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // registrationDate: {
  //   type: Date,
  //   default: Date.now
  // },
  status:{ type: String, required: true },
});

module.exports = mongoose.model('Register', registerSchema);