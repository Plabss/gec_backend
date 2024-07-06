const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

module.exports = Cart;
