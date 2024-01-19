const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  type:{ type: String, required: true },
  duration:{ type: String, required: true },
  language:{ type: String, required: true },
  price:{ type: String, required: true },
  categorytitle: { type: String, required: true },
  description:{ type: String, required: true },
  requirements:{ type: String, required: true },
  status:{ type: String, required: true },
  video: { type: String, required: true },
  image: { type: String, required: true },
  createdAt:{ type: String, required: true },
  contents:{ type: String, required: true }
});

module.exports = mongoose.model('course', courseSchema);