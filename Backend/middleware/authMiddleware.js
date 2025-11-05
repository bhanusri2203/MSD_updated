// Backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Extract Bearer token

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.user = decoded; // attach user data (id, username)
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired, please log in again." });
    }
    return res.status(403).json({ message: "Invalid token" });
  }
};
