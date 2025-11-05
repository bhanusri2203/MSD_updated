import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // ✅ Correct backend URL
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || "https://msd-full-stack.onrender.com"}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);

        alert("Login successful!");
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        alert(data.message || "Invalid credentials!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
