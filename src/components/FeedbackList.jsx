// FeedbackList.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledFeedbackList = styled.div`
  --accent: #b41212;

  margin-top: 18px;

  h2 {
    font-size: 22px;
    margin: 0 0 14px;
    text-align: center;
    color: #121317;
    animation: ${fadeUp} .45s ease both;
  }

  .empty {
    text-align: center;
    color: rgba(18,19,23,.55);
    padding: 24px 12px;
    font-style: italic;
    background: rgba(255,255,255,.7);
    border: 1px solid rgba(18,19,23,.08);
    border-radius: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 12px;
  }

  li {
    background: white;
    border: 1px solid rgba(18,19,23,.08);
    border-left: 4px solid var(--accent);
    border-radius: 16px;
    padding: 14px 14px;
    box-shadow: 0 10px 26px rgba(18,19,23,.06);
    line-height: 1.6;
    color: #121317;
    animation: ${fadeUp} .45s ease both;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }

  li:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(180,18,18,.14);
    border-color: rgba(180,18,18,.20);
  }
`;

export default function FeedbackList({ feedbacks }) {
  return (
    <StyledFeedbackList>
      <h2>Отримані відгуки ({feedbacks.length})</h2>
      {feedbacks.length === 0 ? (
        <div className="empty">Наразі немає відгуків. Будьте першим!</div>
      ) : (
        <ul>
          {feedbacks.map((text, i) => (
            <li key={`${i}-${text.slice(0, 10)}`} style={{ animationDelay: `${i * 0.06}s` }}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </StyledFeedbackList>
  );
}