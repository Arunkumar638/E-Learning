const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  price:{ type: String, required: true },
  imagepath:{ type: String, required: true },
  status:{ type: String, required: true }
});

module.exports = mongoose.model('cart', cartSchema);