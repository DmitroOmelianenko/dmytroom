// Skils.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js from "../images/js.jpg";
import bootstrap from "../images/bootstrap.svg";
import sass from "../images/sass.png";
import bem from "../images/bem.png";
import vite from "../images/vite.png";
import parcel from "../images/parcel.png";
import mobileFirst from "../images/mobile-fist.png";
import optimi from "../images/optimization.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledSkills = styled.section`
  --accent: #b41212;
  --bg: #ffffff;
  --text: #121317;
  --muted: #5c626b;

  padding: 72px 20px;
  background: radial-gradient(900px 450px at 10% 0%, rgba(180,18,18,.08), transparent 55%),
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
    gap: 14px;
  }

  .card {
    grid-column: span 3;
    background: rgba(246,246,248,.8);
    border: 1px solid rgba(18,19,23,.08);
    border-radius: 16px;
    padding: 16px 14px;
    text-align: center;
    box-shadow: 0 10px 26px rgba(18,19,23,.06);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
    animation: ${fadeUp} .55s ease both;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 38px rgba(180,18,18,.14);
    border-color: rgba(180,18,18,.20);
    background: rgba(255,255,255,.95);
  }

  .img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    margin-bottom: 10px;
    transition: transform .18s ease;
  }

  .card:hover .img { transform: rotate(-4deg) scale(1.06); }

  .name {
    margin: 0 0 6px;
    font-size: 16px;
    font-weight: 900;
    color: var(--text);
  }

  .desc {
    margin: 0;
    font-size: 13px;
    color: var(--muted);
    line-height: 1.45;
  }

  @media (max-width: 900px) {
    padding: 56px 16px;
    .card { grid-column: span 4; }
  }

  @media (max-width: 560px) {
    .card { grid-column: span 6; }
  }

  @media (max-width: 380px) {
    .card { grid-column: span 12; }
  }
`;

export default function Skils() {
  const skills = [
    { img: html, name: "HTML5", desc: "Семантична, структурована та доступна розмітка." },
    { img: css, name: "CSS3", desc: "Адаптивні макети, Flexbox/Grid, анімації." },
    { img: js, name: "JavaScript", desc: "DOM, логіка інтерфейсу, ES6+ синтаксис." },
    { img: bootstrap, name: "Bootstrap 5", desc: "Швидка побудова адаптивних інтерфейсів." },
    { img: sass, name: "Sass/SCSS", desc: "Змінні, міксини, модулі, структура стилів." },
    { img: bem, name: "BEM", desc: "Масштабована система іменування класів." },
    { img: vite, name: "Vite", desc: "Швидка збірка та комфортна розробка." },
    { img: parcel, name: "Parcel", desc: "Автоматична оптимізація та простий старт." },
    { img: mobileFirst, name: "Mobile First", desc: "Пріоритет мобільних екранів у дизайні." },
    { img: mobileFirst, name: "Desktop First", desc: "Орієнтація на великі екрани з адаптацією." },
    { img: optimi, name: "Ретинізація", desc: "Підготовка HiDPI/Retina графіки." }
  ];

  return (
    <StyledSkills className="skils" id="skills">
      <div className="container">
        <h2>Навички</h2>

        <div className="grid">
          {skills.map((s, i) => (
            <div key={s.name} className="card" style={{ animationDelay: `${i * 0.05}s` }}>
              <img src={s.img} alt={s.name} className="img" />
              <h3 className="name">{s.name}</h3>
              <p className="desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledSkills>
  );
}