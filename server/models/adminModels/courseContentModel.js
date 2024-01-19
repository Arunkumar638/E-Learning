const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  contenttitle: String,
  description: String,
  length: String,
  link: String,
  url: String,
});

const sectionSchema = new mongoose.Schema({
  title: String,
  contents: [contentSchema],
});

const courseContentSchema = new mongoose.Schema({
  coursetitle: String,
  title: String,
  sections: [sectionSchema],
});

module.exports = mongoose.model('coursecontent', courseContentSchema);

