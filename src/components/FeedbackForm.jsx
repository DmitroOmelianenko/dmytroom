// FeedbackForm.jsx
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledForm = styled.form`
  --accent: #b41212;

  background: white;
  border: 1px solid rgba(18,19,23,.08);
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(18,19,23,.06);
  animation: ${fadeUp} .5s ease both;

  textarea {
    width: 100%;
    padding: 14px 14px;
    font-size: 15px;
    border: 1.5px solid rgba(18,19,23,.14);
    border-radius: 12px;
    resize: vertical;
    min-height: 120px;
    transition: border-color .18s ease, box-shadow .18s ease;
    outline: none;
  }

  textarea:focus {
    border-color: rgba(180,18,18,.55);
    box-shadow: 0 0 0 4px rgba(180,18,18,.12);
  }

  button {
    width: 100%;
    margin-top: 12px;
    border: 0;
    padding: 12px 16px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    color: white;
    background: linear-gradient(135deg, var(--accent), #8a0e0e);
    box-shadow: 0 10px 28px rgba(180,18,18,.24);
    transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(180,18,18,.32);
    filter: brightness(1.03);
  }

  button:active { transform: translateY(0); }
`;

export default function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    onSubmit(feedback.trim());
    setFeedback("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Напишіть свій відгук або коментар..."
        required
      />
      <button type="submit">Відправити відгук</button>
    </StyledForm>
  );
}