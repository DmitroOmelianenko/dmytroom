// Projects.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import greyWolf from "../images/greywolf.png";
import focusFrame from "../images/focusframe.png";
import es from "../images/es.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledProjects = styled.section`
  --accent: #ffcc00;
  --bg: #0f1013;
  --card: rgba(255,255,255,.06);
  --border: rgba(255,255,255,.10);
  --text: #f3f4f6;
  --muted: rgba(243,244,246,.72);

  background: radial-gradient(1200px 600px at 15% -10%, rgba(255,204,0,.18), transparent 60%),
              radial-gradient(900px 500px at 85% 0%, rgba(180,18,18,.18), transparent 60%),
              var(--bg);
  padding: 72px 20px;
  color: var(--text);

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 28px;
    text-align: center;
    font-size: clamp(26px, 3vw, 42px);
    animation: ${fadeUp} .6s ease both;
  }

  .grid {
    display: grid;
    gap: 16px;
  }

  .card {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 18px;
    background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05));
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 16px;
    box-shadow: 0 18px 60px rgba(0,0,0,.35);
    animation: ${fadeUp} .55s ease both;
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 80px rgba(0,0,0,.45);
    border-color: rgba(255,204,0,.22);
  }

  .media {
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(0,0,0,.2);
  }

  .media img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(1.01);
    transition: transform .25s ease;
  }

  .card:hover .media img { transform: scale(1.04); }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 4px 4px 8px;
  }

  .name {
    margin: 0;
    font-size: 20px;
    letter-spacing: .2px;
    color: var(--text);
  }

  .name a {
    color: var(--accent);
    text-decoration: none;
  }

  .name a:hover { text-decoration: underline; }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }

  .badge {
    font-size: 12px;
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(255,204,0,.10);
    border: 1px solid rgba(255,204,0,.18);
    color: var(--text);
  }

  .desc {
    margin: 0;
    color: var(--muted);
    line-height: 1.65;
    font-size: 15px;
  }

  .bullets {
    margin: 0;
    padding-left: 18px;
    color: var(--muted);
    line-height: 1.6;
    font-size: 14px;
  }

  .actions {
    display: flex;
    gap: 10px;
    margin-top: 6px;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    color: var(--text);
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: transform .18s ease, border-color .18s ease, background .18s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    border-color: rgba(255,204,0,.28);
    background: rgba(255,204,0,.10);
  }

  .btn.primary {
    border-color: rgba(255,204,0,.28);
    background: rgba(255,204,0,.12);
  }

  @media (max-width: 900px) {
    padding: 56px 16px;
    .card { grid-template-columns: 1fr; }
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "Спортивний клуб Grey Wolf",
      image: greyWolf,
      liveUrl: "https://greywolf.com.ua/",
      stack: ["HTML", "CSS", "Responsive"],
      bullets: [
        "Структура сторінок та семантика",
        "Адаптивність під різні пристрої",
        "Зручний і зрозумілий інтерфейс"
      ]
    },
    {
      title: "Focus Frame",
      image: focusFrame,
      liveUrl: "https://tate-t.github.io/focus-frame-project/",
      stack: ["Team", "Layout", "UI"],
      bullets: [
        "Відтворення макету та секцій",
        "Організація контенту і стилів",
        "Коректне відображення на різних екранах"
      ]
    },
    {
      title: "Education Certificate",
      image: es,
      liveUrl: "https://tate-t.github.io/education-certificate/",
      stack: ["Team", "Responsive", "Layout"],
      bullets: [
        "Реалізація секцій відповідно до дизайну",
        "Адаптивність та структура контенту",
        "Командна робота і узгоджені стилі"
      ]
    }
  ];

  return (
    <StyledProjects className="projects" id="projects">
      <div className="container">
        <h2>Мої проєкти</h2>

        <div className="grid">
          {projects.map((p, i) => (
            <article key={p.title} className="card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="media">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="content">
                <h3 className="name">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                </h3>

                <div className="badges">
                  {p.stack.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <p className="desc">Коротко про роботу над проєктом:</p>
                <ul className="bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="actions">
                  <a className="btn primary" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    🔗 Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StyledProjects>
  );
}