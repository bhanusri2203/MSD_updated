// src/components/CategoryItems.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryItems.css";

const categoryData = {
  "veg-biryani": [
    { name: "Hyderabadi Veg Biryani", price: 220 },
    { name: "Paneer Biryani", price: 240 },
    { name: "Veg Dum Biryani", price: 210 },
    { name: "Mushroom Biryani", price: 230 },
    { name: "Baby Corn Biryani", price: 225 },
    { name: "Cashew Biryani", price: 250 },
    { name: "Soya Chunk Biryani", price: 220 },
    { name: "Mixed Veg Biryani", price: 200 },
    { name: "Jeera Veg Biryani", price: 190 },
    { name: "Veg Fried Rice", price: 180 },
  ],
  soups: [
    { name: "Tomato Soup", price: 120 },
    { name: "Sweet Corn Soup", price: 130 },
    { name: "Hot & Sour Soup", price: 140 },
  ],
  juices: [
    { name: "Mango Juice", price: 100 },
    { name: "Orange Juice", price: 90 },
    { name: "Lemon Soda", price: 80 },
  ],
  milkshakes: [
    { name: "Chocolate Shake", price: 150 },
    { name: "Strawberry Shake", price: 140 },
    { name: "Vanilla Shake", price: 130 },
  ],
  "tea-&-coffee": [
    { name: "Masala Tea", price: 40 },
    { name: "Filter Coffee", price: 50 },
    { name: "Black Tea", price: 30 },
  ],
};

function CategoryItems() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const items = categoryData[category] || [];

  const handleAddToCart = (item, quantity) => {
    const existing = cart.find((i) => i.name === item.name);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  return (
    <div className="category-container">
      <h1 className="category-title">
        {category.replace(/-/g, " ").toUpperCase()}'S
      </h1>

      <div className="items-grid">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <div className="item-actions">
              <select
                id={`qty-${index}`}
                defaultValue="1"
                className="qty-select"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <button
                className="add-btn"
                onClick={() =>
                  handleAddToCart(item, parseInt(document.getElementById(`qty-${index}`).value))
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-buttons">
        <button className="back-btn" onClick={() => navigate("/menu")}>
          Back
        </button>
        <button className="cart-btn">Go to Cart</button>
      </div>
    </div>
  );
}

export default CategoryItems;
