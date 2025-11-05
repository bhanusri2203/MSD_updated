import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title" onClick={() => navigate("/home")}>
          Crave Corner
        </h1>
      </div>

      <div className="nav-center">
        {isLoggedIn ? (
          <>
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
            <Link to="/help" className="nav-link">
              Help & Feedback
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
