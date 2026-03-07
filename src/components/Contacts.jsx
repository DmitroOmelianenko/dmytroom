// Contacts.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledContacts = styled.section`
  --accent: #b41212;
  --bg: #f6f6f8;
  --text: #121317;
  --muted: #5c626b;

  padding: 72px 20px;
  background: radial-gradient(900px 450px at 10% 0%, rgba(180,18,18,.10), transparent 55%),
              var(--bg);

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 28px;
    text-align: center;
    font-size: clamp(26px, 3vw, 42px);
    color: var(--text);
    animation: ${fadeUp} .6s ease both;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }

  .card {
    grid-column: span 4;
    display: block;
    text-decoration: none;
    background: white;
    border: 1px solid rgba(18,19,23,.08);
    border-radius: 16px;
    padding: 20px 18px;
    box-shadow: 0 10px 28px rgba(18,19,23,.06);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    animation: ${fadeUp} .55s ease both;
    color: inherit;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 42px rgba(180,18,18,.14);
    border-color: rgba(180,18,18,.22);
  }

  .top {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  .icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: rgba(180,18,18,.10);
    border: 1px solid rgba(180,18,18,.18);
    font-size: 22px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: var(--text);
  }

  .value {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    line-height: 1.5;
    word-break: break-word;
  }

  .hint {
    margin-top: 12px;
    font-size: 13px;
    color: rgba(92,98,107,.9);
  }

  @media (max-width: 900px) {
    padding: 56px 16px;
    .card { grid-column: span 6; }
  }

  @media (max-width: 560px) {
    .card { grid-column: span 12; }
  }
`;

export default function Contacts() {
  const items = [
    {
      icon: "📧",
      title: "Email",
      value: "dmitroomelianenko@gmail.com",
      href: "mailto:dmitroomelianenko@gmail.com",
      hint: "Натисніть, щоб написати"
    },
    {
      icon: "📱",
      title: "Телефон",
      value: "+380 66 951 23 99",
      href: "tel:+380669512399",
      hint: "Натисніть, щоб зателефонувати"
    },
    {
      icon: "💬",
      title: "Соцмережі",
      value: "GitHub • LinkedIn",
      href: "https://github.com/DmitroOmelianenko",
      hint: "Відкрити профіль"
    }
  ];

  return (
    <StyledContacts id="contacts">
  <div className="container">
    <h2>Контакти</h2>

    <div className="grid">
      {items.map((it, i) => {
        const isSocial = it.title === "Соцмережі";

        const content = (
          <>
            <div className="top">
              <div className="icon" aria-hidden="true">
                {it.icon}
              </div>
              <h3>{it.title}</h3>
            </div>

            <p className="value">{it.value}</p>
            <div className="hint">{it.hint}</div>

            {isSocial && (
              <div className="hint" style={{ marginTop: 10 }}>
                <a
                  href="https://www.linkedin.com/in/your-profile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#b41212",
                    textDecoration: "none",
                    marginLeft: 8,
                  }}
                >
                  LinkedIn
                </a>
              </div>
            )}
          </>
        );

        return isSocial ? (
          <div
            key={it.title}
            className="card"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {content}
          </div>
        ) : (
          <a
            key={it.title}
            className="card"
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={
              it.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            {content}
          </a>
        );
      })}
    </div>
  </div>
</StyledContacts>
  );
}