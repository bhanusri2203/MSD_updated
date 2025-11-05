import express from "express";
import Order from "../models/Order.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // ✅ Only one import

const router = express.Router();

// ✅ POST: Create a new order (protected route)
router.post("/", verifyToken, async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items provided" });
    }

    const newOrder = new Order({
      username: req.user.username,
      items,
      totalPrice,
    });

    const savedOrder = await newOrder.save();

    // ✅ Return full saved order object (so frontend gets order._id)
    res.status(201).json({
      message: "Order saved successfully!",
      order: savedOrder,
    });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ message: "Server error while saving order." });
  }
});

// ✅ PATCH: Add feedback to an existing order (protected)
router.patch("/feedback/:orderId", verifyToken, async (req, res) => {
  try {
    const { rating, review } = req.body;
    const { orderId } = req.params;

    if (!rating || !review) {
      return res.status(400).json({ message: "Rating and review are required." });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    // ✅ Prevent duplicate feedback
    if (order.feedback && order.feedback.given) {
      return res.status(400).json({ message: "Feedback already submitted for this order." });
    }

    // ✅ Ensure only order owner can review
    if (order.username !== req.user.username) {
      return res.status(403).json({ message: "Not authorized to update this order." });
    }

    // ✅ Save feedback
    order.feedback = {
      rating,
      review,
      given: true,
    };

    await order.save();

    res.status(200).json({
      message: "Feedback added successfully!",
      order,
    });
  } catch (error) {
    console.error("❌ Error adding feedback:", error);
    res.status(500).json({ message: "Server error while saving feedback." });
  }
});

export default router;
