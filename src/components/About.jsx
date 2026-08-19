import React from "react";
import styled from "styled-components";
import dmytro from "../images/dmytro.jpg";
const Section = styled.section`
 padding: 120px 20px 80px;
 .container{
 max-width:1200px;
 margin:0 auto;
 display:grid;
 grid-template-columns: 1.1fr .9fr;
 gap:80px;
 align-items:center;
 }
 .label{
 color:#818CF8;
5
 font-size:14px;
 font-weight:600;
 margin-bottom:18px;
 }
 h1{
 margin:0;
 font-size:72px;
 line-height:1;
 letter-spacing:-3px;
 font-weight:700;
 }
 p{
 max-width:580px;
 margin:32px 0;
 color:var(--muted);
 line-height:1.8;
 font-size:17px;
 }
 .actions{
 display:flex;
 gap:14px;
 }
 .primary{
 padding:14px 22px;
 border:none;
 border-radius:14px;
 background: var(--primary);
 color:var(--button-text);
 font-size:15px;
 font-weight:600;
 cursor:pointer;
 }
 .secondary{
 padding:14px 22px;
 border-radius:14px;
 background: transparent;
 border:1px solid var(--line);
 color:var(--text);
 font-size:15px;
6
 font-weight:500;
 cursor:pointer;
 }
 .image{
 width:100%;
 border-radius:24px;
 border:1px solid var(--line);
 }
 @media(max-width:960px){
 .container{
 grid-template-columns:1fr;
 }
 h1{
 font-size:52px;
 }
 }
 @media(max-width:560px){
 padding-top:80px;
 h1{
 font-size:40px;
 letter-spacing:-2px;
 }
 p{
 font-size:15px;
 }
 .actions{
 flex-direction:column;
 }
 }
`;
export default function About() {
  return (
    <Section id="about">
      <div className="container">
        <div>
          <div className="label">
            FRONTEND-РОЗРОБНИК
          </div>
          <h1>
            Створюю сучасні цифрові продукти з продуманим інтерфейсом.
          </h1>
          <p>
            Розробляю адаптивні та масштабовані вебінтерфейси, у яких важливі швидкість, зручність користування та цілісна дизайн-система.
          </p>
          <div className="actions">
            <button className="primary">
              Переглянути проєкти
            </button>
            <button className="secondary">
              Зв’язатися зі мною
            </button>
          </div>
        </div>
        <div>
          <img
            className="image"
            src={dmytro}
            alt="Dmytro"
          />
        </div>
      </div>
    </Section>
  );
}