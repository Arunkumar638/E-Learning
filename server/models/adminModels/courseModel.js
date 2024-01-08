const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: { type: String, required: true },
  type:{ type: String, required: true },
  duration:{ type: String, required: true },
  lectures:{ type: String, required: true },
  enrolled:{ type: String, required: true },
  instructor:{ type: String, required: true },
  language:{ type: String, required: true },
  price:{ type: String, required: true },
  deadline:{ type: String, required: true },
  description:{ type: String, required: true },
  requirements:{ type: String, required: true },
  image: { type: String, required: true },
  contents:{ type: String, required: true }
});

module.exports = mongoose.model('course', courseSchema);