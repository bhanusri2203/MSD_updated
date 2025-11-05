import React from "react";

function Help() {
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
          🍽️ Help & Feedback
        </h1>

        <section style={{ marginBottom: "25px" }}>
          <h2 style={{ color: "#ff9800" }}>Need Assistance?</h2>
          <p>
            Welcome to <strong>Crave Corner Help Center!</strong> We’re here to make your
            food ordering experience smooth and satisfying. If you’re facing any issues,
            check out the common topics below:
          </p>
          <ul>
            <li>
              🍴 <strong>Menu Queries:</strong> Have questions about ingredients, allergens,
              or customization options? Our team will be happy to guide you.
            </li>
            <li>
             <strong>New Dish Suggestions:</strong> Have a favorite recipe or dish you’d
              love to see on our menu? Share your ideas — we’re always open to creativity!
            </li>
            
            
          </ul>
        </section>

        <section style={{ marginBottom: "25px" }}>
          <h2 style={{ color: "#ff9800" }}>💬 Feedback Matters!</h2>
          <p>
            We’d love to hear from you! Your feedback helps us improve and bring more
            delicious experiences your way.
          </p>
          <p>How to share feedback:</p>
          <ul>
            <li>⭐ Rate your recent order in the app.</li>
            <li>📝 Fill out the feedback form below.</li>
            <li>📧 Email us at <strong>support@cravecorner.com</strong> with your suggestions.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: "#ff9800" }}>📞 Contact Us</h2>
          <p>
            📧 <strong>Email:</strong> support@cravecorner.com <br />
            ☎️ <strong>Phone:</strong> +91-98765-43210 <br />
            🕓 <strong>Available:</strong> 9:00 AM – 10:00 PM (All Days)
          </p>
        </section>

      </div>
    </div>
  );
}

export default Help;
