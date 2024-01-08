const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Wishlist', wishlistSchema);