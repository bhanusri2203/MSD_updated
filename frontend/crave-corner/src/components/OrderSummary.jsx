import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const navigate = useNavigate();

  // ✅ Retrieve order details from localStorage
  let orderDetails = null;
  try {
    const storedData = localStorage.getItem("orderDetails");
    orderDetails = storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error("⚠️ Error parsing orderDetails:", error);
  }

  // ✅ Simulate saving order locally and redirect to feedback
  useEffect(() => {
    if (orderDetails) {
      console.log("🧾 Order saved locally:", orderDetails);
      setTimeout(() => navigate("/feedback"), 3000);
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) return <p>No order found!</p>;

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <p>Date: {orderDetails.date}</p>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.name} × {item.quantity} — ₹{item.price * item.quantity}
          </li>
        ))}
        <h3>Total: ₹{orderDetails.total}</h3>
      </ul>
      <p style={{ color: "#ff6b00", marginTop: "15px" }}>
        Saving your order... Redirecting to feedback shortly.
      </p>
    </div>
  );
};

export default OrderSummary;
