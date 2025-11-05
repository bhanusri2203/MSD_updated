import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      // ✅ Use environment variable or fallback to your Render backend URL
      const apiUrl = process.env.REACT_APP_API_URL || "https://msd-full.onrender.com";

      const response = await fetch(`${apiUrl}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login now.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;
