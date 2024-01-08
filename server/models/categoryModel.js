const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categorytitle: { type: String, required: true },
  subcategorytitle:{ type: String, required: false }
});

module.exports = mongoose.model('category', categorySchema);