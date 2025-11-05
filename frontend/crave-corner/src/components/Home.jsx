import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/food1.jpg";
export default function Home({ user }) {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:  `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#0f0f0fff",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <section className="home-hero">
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Welcome to Crave Corner
        </h1>
        <p style={{ fontSize: "18px" }}>Hii!! Satisfy your cravings here.</p>
        <div style={{ marginTop: 20 }}>
          <Link
            to="/menu"
            className="btn"
            style={{
              width: 180,
              display: "inline-block",
              backgroundColor: "#ff9800",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Browse Menu
          </Link>
        </div>
      </section>

    </div>
  );
}
