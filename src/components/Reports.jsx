// Reports.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledReports = styled.section`
  --bg: #f6f6f8;

  padding: 72px 20px;
  background: radial-gradient(900px 450px at 10% 0%, rgba(180,18,18,.10), transparent 55%),
              var(--bg);

  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 18px;
    text-align: center;
    font-size: clamp(26px, 3vw, 42px);
    color: #121317;
    animation: ${fadeUp} .6s ease both;
  }
`;

export default function Reports() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem("feedbacks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <StyledReports id="reports">
      <div className="container">
        <h1>Відгуки</h1>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </StyledReports>
  );
}