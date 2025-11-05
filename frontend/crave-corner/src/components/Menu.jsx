import React, { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

// ✅ Import category images
import soupImg from "../assets/soups.jpg";
import starterImg from "../assets/starters.jpeg";
import mainImg from "../assets/maincourse.jpg";
import dessertImg from "../assets/desserts.jpg";
import drinkImg from "../assets/drinks.jpg";

const Menu = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Soups", image: soupImg },
    { id: 2, name: "Starters", image: starterImg },
    { id: 3, name: "Main Course", image: mainImg },
    { id: 4, name: "Desserts", image: dessertImg },
    { id: 5, name: "Drinks", image: drinkImg },
  ];

  // ✅ Menu items with Ratings + Health Suggestions
  const menuItems = {
  Soups: [
    { id: 101, name: "Tomato Soup", price: 120, rating: 4.6, suggestion: "Rich in antioxidants, helps boost immunity.", chef: "Chef Ananya Rao", ingredients: ["Tomato", "Garlic", "Basil", "Olive Oil", "Pepper"] },
    { id: 102, name: "Sweet Corn Soup", price: 130, rating: 4.4, suggestion: "Gentle on the stomach, good for digestion.", chef: "Chef Rohan Mehta", ingredients: ["Sweet Corn", "Carrot", "Spring Onion", "Corn Flour", "Salt"] },
    { id: 103, name: "Hot and Sour Soup", price: 140, rating: 4.5, suggestion: "Clears sinuses and helps with cold relief.", chef: "Chef Kavya Menon", ingredients: ["Soy Sauce", "Chili Sauce", "Vinegar", "Tofu", "Mushrooms"] },
    { id: 104, name: "Manchow Soup", price: 135, rating: 4.3, suggestion: "Spicy and tangy, great for throat comfort.", chef: "Chef Devendra Singh", ingredients: ["Garlic", "Ginger", "Carrot", "Cabbage", "Soy Sauce"] },
    { id: 105, name: "Mushroom Soup", price: 150, rating: 4.7, suggestion: "Rich in Vitamin D, supports bone health.", chef: "Chef Sneha Kapoor", ingredients: ["Mushrooms", "Cream", "Garlic", "Butter", "Onion"] },
    { id: 106, name: "Vegetable Clear Soup", price: 125, rating: 4.2, suggestion: "Light and hydrating, ideal for detox.", chef: "Chef Vikram Nair", ingredients: ["Carrot", "Beans", "Cabbage", "Celery", "Salt"] },
    { id: 107, name: "Cream of Broccoli Soup", price: 145, rating: 4.6, suggestion: "High in fiber and good for digestion.", chef: "Chef Priya Sharma", ingredients: ["Broccoli", "Milk", "Cream", "Onion", "Butter"] },
    { id: 108, name: "Lentil Soup", price: 110, rating: 4.5, suggestion: "Rich in protein and iron, great for energy.", chef: "Chef Aarav Patel", ingredients: ["Masoor Dal", "Cumin", "Garlic", "Ginger", "Coriander"] },
    { id: 109, name: "Chicken Soup", price: 160, rating: 4.9, suggestion: "Excellent for cold and flu recovery.", chef: "Chef Arjun Rao", ingredients: ["Chicken", "Garlic", "Pepper", "Onion", "Carrot"] },
    { id: 110, name: "Mutton Soup", price: 180, rating: 4.8, suggestion: "High in iron, improves stamina and recovery.", chef: "Chef Sameera Iyer", ingredients: ["Mutton Bones", "Pepper", "Garlic", "Coriander", "Onion"] },
  ],

  Starters: [
    { id: 201, name: "Paneer Tikka", price: 180, rating: 4.8, suggestion: "High in protein, good for muscle health.", chef: "Chef Ankit Sharma", ingredients: ["Paneer", "Yogurt", "Capsicum", "Onion", "Spices"] },
    { id: 202, name: "Chilli Paneer", price: 190, rating: 4.6, suggestion: "Rich in calcium, good for bones.", chef: "Chef Riya Bhatia", ingredients: ["Paneer", "Soy Sauce", "Capsicum", "Garlic", "Onion"] },
    { id: 203, name: "Veg Manchurian", price: 170, rating: 4.5, suggestion: "Tasty and energizing for evening cravings.", chef: "Chef Sandeep Nair", ingredients: ["Cabbage", "Carrot", "Corn Flour", "Soy Sauce", "Chili Sauce"] },
    { id: 204, name: "Spring Rolls", price: 160, rating: 4.3, suggestion: "Light appetizer, boosts energy quickly.", chef: "Chef Tanya Desai", ingredients: ["Cabbage", "Carrot", "Spring Roll Sheet", "Soy Sauce", "Pepper"] },
    { id: 205, name: "Crispy Corn", price: 150, rating: 4.4, suggestion: "Rich in fiber, helps in digestion.", chef: "Chef Rahul Verma", ingredients: ["Corn", "Flour", "Pepper", "Salt", "Oil"] },
    { id: 206, name: "Gobi 65", price: 140, rating: 4.2, suggestion: "Tasty fried snack, good for cheat days!", chef: "Chef Deepak Joshi", ingredients: ["Cauliflower", "Corn Flour", "Yogurt", "Red Chili", "Ginger"] },
    { id: 207, name: "Chicken 65", price: 200, rating: 4.7, suggestion: "High protein, boosts strength and energy.", chef: "Chef Abhinav Reddy", ingredients: ["Chicken", "Yogurt", "Garlic", "Chili", "Curry Leaves"] },
    { id: 208, name: "Chicken Lollipop", price: 210, rating: 4.8, suggestion: "Crispy delight, packed with protein.", chef: "Chef Pooja Iyer", ingredients: ["Chicken Drumettes", "Soy Sauce", "Garlic", "Flour", "Chili Sauce"] },
    { id: 209, name: "Chicken Tikka", price: 220, rating: 4.9, suggestion: "Low-fat grilled dish, rich in nutrients.", chef: "Chef Aryan Kapoor", ingredients: ["Chicken", "Yogurt", "Spices", "Lemon", "Butter"] },
    { id: 210, name: "Pepper Chicken", price: 230, rating: 4.8, suggestion: "Contains antioxidants, great for immunity.", chef: "Chef Krithi Rao", ingredients: ["Chicken", "Black Pepper", "Garlic", "Curry Leaves", "Onion"] },
    { id: 211, name: "Fish Fingers", price: 240, rating: 4.5, suggestion: "Omega-3 rich, supports heart health.", chef: "Chef Neel Gupta", ingredients: ["Fish Fillet", "Breadcrumbs", "Egg", "Salt", "Oil"] },
    { id: 212, name: "Apollo Fish", price: 250, rating: 4.6, suggestion: "Good for bones and nervous system.", chef: "Chef Swati Sharma", ingredients: ["Fish", "Corn Flour", "Ginger Garlic", "Soy Sauce", "Pepper"] },
    { id: 213, name: "Prawn Tempura", price: 260, rating: 4.7, suggestion: "High in selenium, supports thyroid health.", chef: "Chef Nikhil Mehta", ingredients: ["Prawns", "Flour", "Egg", "Salt", "Oil"] },
    { id: 214, name: "Chicken Wings", price: 215, rating: 4.4, suggestion: "Protein-rich, great with balanced meals.", chef: "Chef Divya Nair", ingredients: ["Chicken Wings", "Barbecue Sauce", "Garlic", "Pepper", "Salt"] },
    { id: 215, name: "Mutton Seekh Kebab", price: 270, rating: 4.9, suggestion: "Rich in iron, helps in blood circulation.", chef: "Chef Manoj Pillai", ingredients: ["Mutton", "Garam Masala", "Onion", "Chili", "Coriander"] },
  ],

  "Main Course": [
    { id: 301, name: "Butter Chicken", price: 250, rating: 4.9, suggestion: "Protein-rich, best served with naan.", chef: "Chef Harsha Nair", ingredients: ["Chicken", "Butter", "Cream", "Tomato", "Spices"] },
    { id: 302, name: "Veg Biryani", price: 220, rating: 4.7, suggestion: "Loaded with veggies, provides balanced nutrition.", chef: "Chef Aravind Iyer", ingredients: ["Rice", "Vegetables", "Spices", "Ghee", "Mint"] },
    { id: 303, name: "Chicken Biryani", price: 260, rating: 4.9, suggestion: "High protein, boosts energy and focus.", chef: "Chef Kavita Reddy", ingredients: ["Chicken", "Rice", "Yogurt", "Spices", "Mint"] },
    { id: 304, name: "Mutton Biryani", price: 300, rating: 4.8, suggestion: "High iron content, strengthens body.", chef: "Chef Santosh Mehra", ingredients: ["Mutton", "Basmati Rice", "Onion", "Garam Masala", "Mint"] },
    { id: 305, name: "Paneer Butter Masala", price: 230, rating: 4.8, suggestion: "Rich in calcium and vitamins.", chef: "Chef Ritu Verma", ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Cashew"] },
    { id: 306, name: "Kadai Paneer", price: 240, rating: 4.6, suggestion: "Contains capsicum antioxidants, aids digestion.", chef: "Chef Aarush Nambiar", ingredients: ["Paneer", "Capsicum", "Onion", "Spices", "Tomato"] },
    { id: 307, name: "Dal Makhani", price: 200, rating: 4.7, suggestion: "High in fiber and protein, aids heart health.", chef: "Chef Priya Menon", ingredients: ["Black Lentils", "Cream", "Tomato", "Butter", "Garlic"] },
    { id: 308, name: "Palak Paneer", price: 220, rating: 4.8, suggestion: "Rich in iron and calcium, strengthens bones.", chef: "Chef Rohit Shetty", ingredients: ["Spinach", "Paneer", "Garlic", "Cream", "Onion"] },
    { id: 309, name: "Chicken Curry", price: 250, rating: 4.7, suggestion: "Spiced for metabolism and energy.", chef: "Chef Divya Patel", ingredients: ["Chicken", "Tomato", "Coconut", "Garam Masala", "Coriander"] },
    { id: 310, name: "Mutton Rogan Josh", price: 310, rating: 4.9, suggestion: "Rich and flavorful, great for strength.", chef: "Chef Anand Krishnan", ingredients: ["Mutton", "Yogurt", "Tomato", "Spices", "Ginger"] },
    { id: 311, name: "Egg Curry", price: 190, rating: 4.6, suggestion: "Full of protein, improves stamina.", chef: "Chef Sneha Singh", ingredients: ["Egg", "Tomato", "Onion", "Ginger Garlic", "Spices"] },
    { id: 312, name: "Fish Curry", price: 270, rating: 4.8, suggestion: "Omega-3 source, supports brain function.", chef: "Chef Arjun Menon", ingredients: ["Fish", "Coconut", "Chili", "Curry Leaves", "Tamarind"] },
    { id: 313, name: "Prawn Masala", price: 290, rating: 4.9, suggestion: "Good for thyroid and metabolism.", chef: "Chef Sahana Rao", ingredients: ["Prawns", "Onion", "Tomato", "Coconut Milk", "Ginger"] },
    { id: 314, name: "Vegetable Fried Rice", price: 200, rating: 4.5, suggestion: "Light meal, packed with nutrients.", chef: "Chef Aditya Sharma", ingredients: ["Rice", "Carrot", "Beans", "Soy Sauce", "Spring Onion"] },
    { id: 315, name: "Chicken Fried Rice", price: 230, rating: 4.7, suggestion: "High in protein and energy content.", chef: "Chef Kiran Shetty", ingredients: ["Chicken", "Rice", "Egg", "Soy Sauce", "Pepper"] },
  ],

  Desserts: [
    { id: 402, name: "Chocolate Brownie", price: 150, rating: 4.9, suggestion: "Boosts mood and reduces stress.", chef: "Chef Roshni Desai", ingredients: ["Chocolate", "Flour", "Sugar", "Butter", "Cocoa Powder"] },
    { id: 403, name: "Butterscotch Ice Cream", price: 100, rating: 4.6, suggestion: "Good source of calcium and happiness!", chef: "Chef Rahul Kapoor", ingredients: ["Milk", "Sugar", "Butterscotch Chips", "Cream"] },
    { id: 404, name: "Vanilla Ice Cream", price: 80, rating: 4.4, suggestion: "Refreshing and soothing dessert.", chef: "Chef Naina Verma", ingredients: ["Milk", "Vanilla Extract", "Cream", "Sugar"] },
    { id: 405, name: "Chocolate Lava Cake", price: 160, rating: 4.9, suggestion: "Rich in antioxidants, boosts endorphins.", chef: "Chef Arpita Joshi", ingredients: ["Chocolate", "Egg", "Flour", "Butter", "Sugar"] },
    { id: 406, name: "Strawberry Pastry", price: 120, rating: 4.6, suggestion: "Vitamin C-rich, great for skin health.", chef: "Chef Neha Iyer", ingredients: ["Flour", "Strawberry", "Cream", "Sugar", "Egg"] },
    { id: 407, name: "Black Forest Cake", price: 140, rating: 4.8, suggestion: "Improves mood, relieves anxiety.", chef: "Chef Suraj Kumar", ingredients: ["Chocolate", "Cherry", "Cream", "Flour", "Sugar"] },
    { id: 408, name: "Cheesecake", price: 180, rating: 4.9, suggestion: "Rich in calcium, good for teeth and bones.", chef: "Chef Reema Nair", ingredients: ["Cream Cheese", "Sugar", "Biscuit Base", "Butter"] },
    { id: 409, name: "Brownie with Ice Cream", price: 170, rating: 4.9, suggestion: "Perfect for a happy sugar rush.", chef: "Chef Karthik Menon", ingredients: ["Chocolate", "Flour", "Vanilla Ice Cream", "Sugar"] },
    { id: 410, name: "Rasmalai", price: 130, rating: 4.7, suggestion: "Calcium-rich Indian dessert, cools the body.", chef: "Chef Meena Gupta", ingredients: ["Milk", "Paneer", "Saffron", "Sugar", "Cardamom"] },
    { id: 411, name: "Caramel Custard", price: 140, rating: 4.6, suggestion: "Rich in protein, aids digestion.", chef: "Chef Vinay Sharma", ingredients: ["Milk", "Egg", "Sugar", "Vanilla"] },
    { id: 412, name: "Fruit Salad with Ice Cream", price: 150, rating: 4.8, suggestion: "Boosts vitamins and hydration.", chef: "Chef Priya Reddy", ingredients: ["Banana", "Apple", "Mango", "Ice Cream"] },
    { id: 413, name: "Mango Mousse", price: 130, rating: 4.7, suggestion: "High in Vitamin A and C, improves vision.", chef: "Chef Akash Jain", ingredients: ["Mango", "Cream", "Sugar", "Gelatin"] },
    { id: 414, name: "Red Velvet Pastry", price: 160, rating: 4.8, suggestion: "Enhances energy, great celebration dessert.", chef: "Chef Tanya Iyer", ingredients: ["Cocoa", "Buttermilk", "Flour", "Cream Cheese"] },
    { id: 415, name: "Dry Fruit Halwa", price: 110, rating: 4.6, suggestion: "Iron-rich and boosts immunity.", chef: "Chef Shruti Menon", ingredients: ["Dry Fruits", "Ghee", "Sugar", "Cardamom"] },
  ],

  Drinks: [
    { id: 501, name: "Lemon Soda", price: 60, rating: 4.6, suggestion: "Good for digestion and hydration.", chef: "Chef Prakash Rao", ingredients: ["Lemon", "Soda", "Salt", "Sugar"] },
    { id: 502, name: "Cold Coffee", price: 100, rating: 4.8, suggestion: "Boosts alertness and focus.", chef: "Chef Bhavna Kapoor", ingredients: ["Coffee", "Milk", "Sugar", "Ice"] },
    { id: 503, name: "Iced Tea", price: 90, rating: 4.5, suggestion: "Rich in antioxidants, aids relaxation.", chef: "Chef Rajesh Patel", ingredients: ["Tea", "Lemon", "Sugar", "Ice Cubes"] },
    { id: 504, name: "Masala Chai", price: 50, rating: 4.9, suggestion: "Improves immunity and relieves stress.", chef: "Chef Jyothi Rao", ingredients: ["Tea", "Milk", "Ginger", "Cardamom", "Cloves"] },
    { id: 505, name: "Green Tea", price: 70, rating: 4.7, suggestion: "Boosts metabolism, burns fat.", chef: "Chef Sneha Arora", ingredients: ["Green Tea Leaves", "Lemon", "Honey"] },
    { id: 506, name: "Filter Coffee", price: 80, rating: 4.8, suggestion: "Increases energy and focus.", chef: "Chef Harish Menon", ingredients: ["Coffee", "Milk", "Sugar"] },
    { id: 507, name: "Mango Milkshake", price: 120, rating: 4.7, suggestion: "Rich in vitamins and antioxidants.", chef: "Chef Nisha Varma", ingredients: ["Mango", "Milk", "Sugar", "Ice Cream"] },
    { id: 508, name: "Chocolate Milkshake", price: 130, rating: 4.9, suggestion: "Good for brain and happy hormones.", chef: "Chef Deepa Reddy", ingredients: ["Chocolate", "Milk", "Ice Cream", "Sugar"] },
    { id: 509, name: "Strawberry Milkshake", price: 120, rating: 4.6, suggestion: "High in Vitamin C, boosts immunity.", chef: "Chef Arvind Nair", ingredients: ["Strawberry", "Milk", "Sugar", "Cream"] },
    { id: 510, name: "Butterscotch Milkshake", price: 130, rating: 4.8, suggestion: "Rich in calcium and energy.", chef: "Chef Malini Iyer", ingredients: ["Milk", "Butterscotch", "Ice Cream", "Sugar"] },
    { id: 511, name: "Fresh Lime Juice", price: 70, rating: 4.5, suggestion: "Vitamin C-rich, perfect for hydration.", chef: "Chef Ajay Rao", ingredients: ["Lemon", "Water", "Sugar", "Salt"] },
    { id: 512, name: "Watermelon Juice", price: 90, rating: 4.7, suggestion: "Cools the body, great for summers.", chef: "Chef Kritika Menon", ingredients: ["Watermelon", "Mint", "Sugar", "Salt"] },
    { id: 513, name: "Pineapple Juice", price: 100, rating: 4.8, suggestion: "Boosts digestion and immunity.", chef: "Chef Shankar Pillai", ingredients: ["Pineapple", "Sugar", "Mint"] },
    { id: 514, name: "Mango Juice", price: 90, rating: 4.6, suggestion: "Rich in Vitamin A, good for vision.", chef: "Chef Sneha Rao", ingredients: ["Mango", "Water", "Sugar"] },
    { id: 515, name: "Tender Coconut Water", price: 60, rating: 4.9, suggestion: "Hydrating and full of electrolytes.", chef: "Chef Deepak Iyer", ingredients: ["Tender Coconut", "Water"] },
  ],
};


 const [selectedCategory, setSelectedCategory] = useState(null);

  const handleItemClick = (item) => {
    // Go to /item/:id and pass the item data
    navigate(`/item/${item.id}`, { state: { item } });
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }
    setCartItems(updatedCart);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      {/* 🛒 Small Cart button below navbar */}
      <div className="top-right-cart">
        <button onClick={() => navigate("/cart")}>🛒</button>
      </div>

      <h2>Our Menu</h2>

      {!selectedCategory ? (
        <div className="categories">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => setSelectedCategory(cat.name)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: "220px",
                  height: "150px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
              <h3>{cat.name}</h3>
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="items-section">
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back
          </button>
          <h3>{selectedCategory}</h3>
          <div className="items-list">
            {menuItems[selectedCategory].map((item) => (
              <div
                key={item.id}
                className="item-card"
                onClick={() => handleItemClick(item)}
              >
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;