// About.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import dmytro from "../images/dmytro.jpg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledAbout = styled.section`
  --accent: #b41212;
  --bg: #0f0f12;
  --card: #15151b;
  --text: #f3f4f6;
  --muted: rgba(243,244,246,.75);

  background: radial-gradient(1200px 600px at 20% -10%, rgba(180,18,18,.35), transparent 60%),
              radial-gradient(900px 500px at 90% 10%, rgba(255,204,0,.15), transparent 55%),
              var(--bg);
  padding: 72px 20px;
  color: var(--text);

  .container {
    max-width: 1100px;
    margin: 0 auto;
    animation: ${fadeUp} .6s ease both;
  }

  .title {
    font-size: clamp(26px, 3vw, 42px);
    margin: 0 0 22px;
    letter-spacing: .2px;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 28px;
    align-items: center;
    background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 18px;
    padding: 28px;
    box-shadow: 0 18px 60px rgba(0,0,0,.35);
  }

  .text {
    font-size: 16px;
    line-height: 1.75;
    color: var(--muted);
    margin: 0;
  }

  .text + .text { margin-top: 12px; }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 18px 0 0;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(180,18,18,.14);
    border: 1px solid rgba(180,18,18,.35);
    color: var(--text);
    font-size: 13px;
    letter-spacing: .2px;
  }

  .photoWrap {
    display: grid;
    place-items: center;
  }

  img {
    width: min(320px, 100%);
    height: auto;
    border-radius: 18px;
    box-shadow: 0 18px 50px rgba(0,0,0,.45);
    border: 1px solid rgba(255,255,255,.08);
    transform: translateZ(0);
    transition: transform .25s ease, box-shadow .25s ease;
  }

  img:hover {
    transform: scale(1.03) rotate(-1deg);
    box-shadow: 0 24px 70px rgba(0,0,0,.55);
  }

  .actions {
    display: flex;
    justify-content: center;
    margin-top: 22px;
  }

  button {
    padding: 12px 22px;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, var(--accent), #8a0e0e);
    box-shadow: 0 10px 28px rgba(180,18,18,.28);
    transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(180,18,18,.38);
    filter: brightness(1.03);
  }

  button:active { transform: translateY(0); }

  @media (max-width: 900px) {
    padding: 56px 16px;
    .grid { grid-template-columns: 1fr; padding: 22px; }
  }
`;

export default function About({ onOrderClick }) {
  return (
    <StyledAbout className="about" id="about">
      <div className="container">
        <h2 className="title">Про мене</h2>

        <div className="grid">
          <div>
            <p className="text">
              Вітаю! Мене звати Дмитро. Я люблю створювати нове — від простих сайтів до цікавих проєктів, у яких можу втілювати свої ідеї.
            </p>
            <p className="text">
              Постійно вчуся: експериментую з кодом, досліджую сучасні технології та вдосконалюю навички. У проєктах поєдную творчість і логіку, щоб результат був зручним, зрозумілим і стильним.
            </p>
            <p className="text">
              З радістю ділюся тим, що вже створив, і рухаюся далі — до нових ідей, досвіду та досягнень.
            </p>

            <div className="badges">
              <span className="badge">⚡ Frontend</span>
              <span className="badge">🎨 UI/UX</span>
              <span className="badge">🧩 React</span>
              <span className="badge">📱 Responsive</span>
            </div>
          </div>

          <div className="photoWrap">
            <img src={dmytro} alt="Dmytro" />
          </div>
        </div>

        <div className="actions">
          <button type="button" onClick={onOrderClick}>
            Замовити послугу
          </button>
        </div>
      </div>
    </StyledAbout>
  );
}