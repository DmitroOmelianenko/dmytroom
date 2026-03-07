// Benefits.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledBenefits = styled.section`
  --accent: #b41212;
  --bg: #f6f6f8;
  --text: #121317;
  --muted: #5c626b;
  --card: #ffffff;

  padding: 72px 20px;
  background: radial-gradient(900px 450px at 10% 0%, rgba(180,18,18,.12), transparent 55%),
              radial-gradient(800px 420px at 90% 10%, rgba(255,204,0,.10), transparent 55%),
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
    background: var(--card);
    border-radius: 16px;
    padding: 22px 18px;
    border: 1px solid rgba(18,19,23,.08);
    box-shadow: 0 10px 28px rgba(18,19,23,.06);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    animation: ${fadeUp} .55s ease both;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(180,18,18,.14);
    border-color: rgba(180,18,18,.22);
  }

  .icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: rgba(180,18,18,.10);
    border: 1px solid rgba(180,18,18,.18);
    font-size: 24px;
    margin-bottom: 12px;
    transition: transform .18s ease;
  }

  .card:hover .icon {
    transform: rotate(-3deg) scale(1.05);
  }

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
    color: var(--text);
    letter-spacing: .2px;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 15px;
  }

  @media (max-width: 900px) {
    padding: 56px 16px;
    .card { grid-column: span 6; }
  }

  @media (max-width: 560px) {
    .card { grid-column: span 12; }
  }
`;

export default function Benefits() {
  const benefitsList = [
    { icon: "⚡", title: "Швидкість", description: "Роблю сайти швидко та якісно. Запускаю проєкти в установлені строки без затримок." },
    { icon: "💬", title: "Комунікабельність", description: "Завжди на зв'язку. Обговорюю ідеї, відповідаю на питання та показую прогрес." },
    { icon: "✨", title: "Якість", description: "Прагну акуратності у деталях. Роботи відповідають сучасним стандартам і виглядають охайно." },
    { icon: "🎯", title: "Увага до деталей", description: "Не пропускаю дрібниці: від відступів і шрифтів до логіки інтеракцій." },
    { icon: "🚀", title: "Сучасність", description: "Використовую актуальні підходи, анімації та адаптивність для кращого враження." },
    { icon: "🤝", title: "Надійність", description: "Дотримуюся домовленостей і дедлайнів. Можна розраховувати на стабільний результат." }
  ];

  return (
    <StyledBenefits id="benefits">
      <div className="container">
        <h2>Чим я можу бути вам корисним</h2>
        <div className="grid">
          {benefitsList.map((b, i) => (
            <div key={b.title} className="card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="icon" aria-hidden="true">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledBenefits>
  );
}