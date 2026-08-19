import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .top {
    margin-bottom: 40px;
  }

  .top span {
    color: #818CF8;
    font-size: 14px;
    font-weight: 600;
  }

  .top h2 {
    margin: 16px 0 0;
    font-size: 52px;
    letter-spacing: -2px;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .item {
    padding: 14px 18px;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--line);
    color: var(--muted);
    font-size: 14px;
    font-weight: 500;
  }
`;

export default function Technologies() {
  const items = [
    "React",
    "JavaScript",
    "Styled Components",
    "REST API",
    "Responsive Design",
    "HTML5",
    "CSS3",
    "Git",
    "Figma",
    "Vite",
    "Parcel"
  ];

  return (
    <Section id="technologies">
      <div className="container">
        <div className="top">
          <span>ТЕХНОЛОГІЇ</span>
          <h2>Мій стек</h2>
        </div>
        <div className="grid">
          {items.map(item => (
            <div key={item} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
