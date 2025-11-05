import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ItemDetails.css";

// ✅ Import category images
import soupImg from "../assets/soups.jpg";
import starterImg from "../assets/starters.jpeg";
import mainImg from "../assets/maincourse.jpg";
import dessertImg from "../assets/desserts.jpg";
import drinkImg from "../assets/drinks.jpg";

const ItemDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state?.item;

  if (!item) {
    return (
      <div className="item-details-container">
        <h2>Item Not Found</h2>
        <p>Return to the <span onClick={() => navigate("/menu")} style={{ color: "orange", cursor: "pointer" }}>Menu</span>.</p>
      </div>
    );
  }

  // ✅ Automatically choose category image based on ID range
  const getImageByCategory = (id) => {
    if (id >= 100 && id < 200) return soupImg;
    if (id >= 200 && id < 300) return starterImg;
    if (id >= 300 && id < 400) return mainImg;
    if (id >= 400 && id < 500) return dessertImg;
    if (id >= 500 && id < 600) return drinkImg;
    return dessertImg;
  };

  return (
    <div className="item-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="item-details-card">
        <div className="item-details-left">
          <img
            src={getImageByCategory(item.id)}
            alt={item.name}
            className="item-image"
          />
        </div>

        <div className="item-details-right">
          <h2>{item.name}</h2>
          <p><strong>Price:</strong> ₹{item.price}</p>
          <p><strong>Rating:</strong> ⭐ {item.rating}</p>
          <p><strong>Suggestion:</strong> {item.suggestion || "No suggestion available"}</p>
          <p><strong>Made By:</strong> {item.chef || "Chef information not available"}</p>
          <p>
            <strong>Main Ingredients:</strong>{" "}
            {item.ingredients && item.ingredients.length > 0
              ? item.ingredients.join(", ")
              : "Ingredients not available"}
          </p>


          <button
            className="add-btn"
            onClick={() => {
              alert(`${item.name} added to cart!`);
            }}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
