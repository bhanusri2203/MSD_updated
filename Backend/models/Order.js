import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },

  // ✅ Add feedback fields
  feedback: {
    rating: { type: Number, default: null, min: 1, max: 5 },
    review: { type: String, default: "" },
    given: { type: Boolean, default: false },
  },
});

export default mongoose.model("Order", orderSchema);
