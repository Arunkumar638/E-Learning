const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  courseId: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  price:{ type: String, required: true },
  image:{ type: String, required: true },
  status:{ type: String, required: true }
});

module.exports = mongoose.model('cart', cartSchema);