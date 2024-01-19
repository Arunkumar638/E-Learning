const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  categorytitle: { type: String, required: true },
  subcategorytitle:{ type: String, required: true },
  image:{ type: String, required: true },
  status:{ type: String, required: true },
  createdAt:{ type: Date, required: true }
});

module.exports = mongoose.model('subcategory', subCategorySchema);