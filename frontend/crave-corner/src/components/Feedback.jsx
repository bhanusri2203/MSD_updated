import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

const Feedback = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false); // ✅ state to show thank-you message

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      rating,
      review,
    };

    // ✅ Save feedback locally
    localStorage.setItem("feedback", JSON.stringify(feedbackData));
    setSubmitted(true); // ✅ show thank-you message instead of form
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="feedback-container">
      {!submitted ? (
        <>
          <h2>We value your feedback!</h2>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "selected" : ""}`}
                onClick={() => handleRatingClick(star)}
              >
                ★
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Write your feedback here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </>
      ) : (
        // ✅ Thank-you message after feedback is submitted
        <div className="thank-you-section">
          <h2>🎉 Thank you for your feedback!</h2>
          <p>We appreciate your time and effort in helping us improve.</p>
          <button onClick={handleGoHome}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
