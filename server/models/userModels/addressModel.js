const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone:{ type: String, required: true },
  country:{ type: String, required: true },
  city:{ type: String, required: true },
  state:{ type: String, required: true },
  street:{ type: String, required: true },
  pincode:{ type: String, required: true }

});

module.exports = mongoose.model('address', addressSchema);

