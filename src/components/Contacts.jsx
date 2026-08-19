import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
 padding:80px 20px;
 border-top:1px solid var(--line);
 .container{
 max-width:1200px;
 margin:0 auto;
 }
 h2{
 margin:0;
 font-size:52px;
 line-height:1;
 letter-spacing:-2px;
 }
 p{
 margin:20px 0 40px;
 max-width:600px;
 color:var(--muted);
 line-height:1.8;
 }
 .links{
 display:flex;
 flex-wrap:wrap;
 gap:16px;
 }
 .links a{
 display:flex;
 align-items:center;
 min-width:0;
 padding:14px 18px;
 border-radius:14px;
 border:1px solid var(--line);
 background: var(--surface);
 color:var(--text);
 font-size:14px;
 font-weight:500;
 transition:.2s ease;
 }
 .links a:hover{
 border-color: var(--primary);
 }
 @media(max-width:560px){
 padding:64px 20px;
 h2{
 font-size:42px;
 letter-spacing:-1.5px;
 }
 p{
 margin-bottom:28px;
 }
 .links{
 display:grid;
 grid-template-columns:1fr;
 gap:10px;
 }
 .links a{
 width:100%;
 min-height:52px;
 }
 }
`;
export default function Contacts(){
return(
<Footer id="contacts">
<div className="container">
<h2>
Створімо щось сильне.
</h2>
<p>
Відкритий до фриланс-проєктів, співпраці та розробки сучасних вебпродуктів.
</p>
<div className="links">
<a href="mailto:dmitroomelianenko@gmail.com">
Електронна пошта
</a>
<a
href="https://github.com/DmitroOmelianenko"
target="_blank"
rel="noreferrer"
>
GitHub
</a>
<a
href="https://linkedin.com"
target="_blank"
rel="noreferrer"
>
LinkedIn
</a>
<a href="tel:+380669512399">
Телефон
</a>
</div>
</div>
</Footer>
);
}
