import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 92px 20px 120px;
  .container { max-width: 1100px; margin: 0 auto; }
  .eyebrow { color: var(--primary); font-size: 13px; font-weight: 800; letter-spacing: .12em; }
  h1 { max-width: 680px; margin: 16px 0 18px; font-size: clamp(42px, 7vw, 76px); line-height: .98; letter-spacing: -.055em; }
  .intro { max-width: 610px; color: var(--muted); line-height: 1.8; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 54px; }
  .card { min-height: 230px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; transition: transform .2s ease, border-color .2s ease; }
  .card:hover { transform: translateY(-4px); border-color: var(--primary); }
  .number { color: var(--primary); font-size: 13px; font-weight: 800; }
  h2 { margin: 28px 0 8px; font-size: 21px; }
  .issuer { margin: 0; color: var(--muted); font-size: 14px; }
  .open { align-self: flex-start; margin-top: 24px; color: var(--text); font-size: 14px; font-weight: 800; border-bottom: 1px solid var(--primary); padding-bottom: 4px; }
  @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
`;

const certificates = [
  { title: "FRONTEND 2", issuer: "GoIteens", link: "https://drive.google.com/file/d/1gV3LPz-kw7XndtT3ouhblbqeizl8SakR/view" },
  { title: "FRONTEND 3", issuer: "GoIteens", link: "https://drive.google.com/file/d/1d3OurQpJFX1jtWbDUja-hSO5xVHcZ1v7/view" }
//   { title: "Назва сертифіката", issuer: "Назва курсу або платформи", link: "https://example.com/certificate-3" }
];

export default function Certificates() {
  return (
    <Section>
      <div className="container">
        <div className="eyebrow">ПІДТВЕРДЖЕНІ ЗНАННЯ</div>
        <h1>Сертифікати та навчання.</h1>
        {/* <p className="intro">Щоб додати власний сертифікат, замініть назву, платформу та посилання в масиві `certificates`.</p> */}
        <div className="grid">
          {certificates.map((certificate, index) => (
            <article className="card" key={`${certificate.title}-${index}`}>
              <div>
                <div className="number">0{index + 1}</div>
                <h2>{certificate.title}</h2>
                <p className="issuer">{certificate.issuer}</p>
              </div>
              <a className="open" href={certificate.link} target="_blank" rel="noreferrer">Відкрити сертифікат ↗</a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}