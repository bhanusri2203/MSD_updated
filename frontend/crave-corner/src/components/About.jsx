import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff8f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "800px",
          width: "100%",
          padding: "30px",
          color: "#333",
        }}
      >
        <h1
          style={{
            color: "#ff9800",
            textAlign: "center",
            marginBottom: "20px",
            borderBottom: "2px solid #ff9800",
            paddingBottom: "10px",
          }}
        >
          🍽️ About Crave Corner
        </h1>

        <p>
          Welcome to <strong>Crave Corner</strong> — your go-to destination for
          satisfying every craving, from spicy starters to delightful desserts!
        </p>
        <p>
          At Crave Corner, we believe that <strong>good food brings people
          together</strong>. Our mission is to deliver not just meals but
          memorable dining experiences, crafted with love, flavor, and
          freshness.
        </p>
        <p>
          We carefully curate every dish on our menu using{" "}
          <strong>high-quality ingredients</strong> and authentic recipes to
          ensure every bite feels like comfort and happiness. Whether you’re
          dining solo, with friends, or with family — Crave Corner makes every
          meal special.
        </p>

        <h2 style={{ color: "#ff9800", marginTop: "25px" }}>
          🌟 What Makes Us Special
        </h2>
        <ul style={{ lineHeight: "1.8", marginLeft: "25px" }}>
          <li>
            🍛 <strong>Wide Variety:</strong> From soups to sweets, explore
            dishes that suit every taste.
          </li>
          <li>
            🧑‍🍳 <strong>Fresh & Hygienic:</strong> Each dish is prepared with
            utmost care and cleanliness.
          </li>
          <li>
            🚀 <strong>Quick Service:</strong> Because your time (and hunger)
            matters to us.
          </li>
          <li>
            ❤️ <strong>Customer First:</strong> We value your feedback and
            continuously improve to serve you better.
          </li>
        </ul>

        <h2 style={{ color: "#ff9800", marginTop: "25px" }}>✨ Our Vision</h2>
        <p>
          To create a community where every food lover finds joy, comfort, and
          satisfaction — one delicious plate at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
