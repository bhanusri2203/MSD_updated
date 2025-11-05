import React, { useEffect, useState } from "react";
import API from "../api";

function ProtectedPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const res = await API.get("/protected");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Access denied or token invalid");
      }
    };
    fetchProtected();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default ProtectedPage;
