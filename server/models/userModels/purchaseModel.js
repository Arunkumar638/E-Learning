const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  coursetitle:{ type: String, required: true },
  paymentType:{ type: String, required: true },
  purchasedAt:{ type: String, required: true },
  type:{ type: String, required: true },
  price:{ type: String, required: true },
  status:{ type: String, required: true }
});

const purchaseCourseSchema = new Schema({
  name: { type: String, required: true },
  email:{ type: String, required: true },
  purchaseDetails: [purchaseSchema],
});
module.exports = mongoose.model('purchase', purchaseCourseSchema);