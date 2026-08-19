import React from "react";
import styled from "styled-components";
import greyWolf from "../images/greywolf.png";
import focusFrame from "../images/focusframe.png";
import es from "../images/es.png";

const Section = styled.section`
  padding: 80px 20px;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .heading {
    margin-bottom: 60px;
  }

  .heading span {
    color: #818CF8;
    font-size: 14px;
    font-weight: 600;
  }

  .heading h2 {
    margin: 16px 0 0;
    font-size: 52px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .grid {
    display: grid;
    gap: 24px;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 24px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 24px;
  }

  img {
    width: 100%;
    border-radius: 18px;
    border: 1px solid var(--line);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .category {
    color: #818CF8;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 14px;
  }

  h3 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
  }

  p {
    margin: 24px 0;
    color: var(--muted);
    line-height: 1.8;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .stack span {
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--surface-2);
    font-size: 13px;
    color: var(--muted);
  }

  .actions {
    margin-top: 28px;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 20px;
    border-radius: 14px;
    background: white;
    color: #111;
    font-size: 14px;
    font-weight: 600;
  }

  @media(max-width: 960px) {
    .card {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "Grey Wolf",
      category: "САЙТ СПОРТИВНОГО КЛУБУ",
      image: greyWolf,
      link: "https://greywolf.com.ua",
      description: "Адаптивний сайт спортивного клубу з чіткою структурою, зручною навігацією та увагою до доступності.",
      stack: ["HTML", "CSS", "Responsive"]
    },
    {
      title: "Focus Frame",
      category: "КОМАНДНИЙ ПРОЄКТ",
      image: focusFrame,
      link: "https://github.io",
      description: "Сучасний лендинг з адаптивними секціями, повторно використовуваними UI-блоками та логічною структурою.",
      stack: ["Teamwork", "UI", "Responsive"]
    },
    {
      title: "Education Certificate",
      category: "ВЕБПЛАТФОРМА",
      image: es,
      link: "https://github.io",
      description: "Освітній проєкт зі структурованою версткою, адаптивними компонентами та масштабованою архітектурою стилів.",
      stack: ["Layout", "Responsive", "Frontend"]
    }
  ];

  return (
    <Section id="projects">
      <div className="container">
        <div className="heading">
          <span>ВИБРАНІ РОБОТИ</span>
          <h2>Проєкти</h2>
        </div>
        <div className="grid">
          {projects.map(project => (
            <div className="card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="content">
                <div className="category">
                  {project.category}
                </div>
                <h3>{project.title}</h3>
                <p>
                  {project.description}
                </p>
                <div className="stack">
                  {project.stack.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Відкрити проєкт ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
