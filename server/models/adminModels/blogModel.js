const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  usertype:{ type: String, required: true },
  date:{ type: String, required: true },
  imagepath: { type: String, required: true },
  views:{ type: String, required: true },
  description:{ type: String, required: true },
  about:{ type: String, required: true },
  goal:{ type: String, required: true }
});

module.exports = mongoose.model('blog', blogSchema);