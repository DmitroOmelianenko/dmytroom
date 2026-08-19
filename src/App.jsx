import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contacts from "./components/Contacts";
import Reports from "./components/Reports";
import Certificates from "./components/Certificates";
import ServiceModal from "./components/ServiceModal";
const GlobalStyle = createGlobalStyle`
 :root{
 --bg: #101113;
 --surface: #17191d;
 --surface-2: #202329;
 --line: rgba(255,255,255,.1);
 --text: #f5f1e8;
 --muted: #a9a59d;
 --primary: #d86538;
 --primaryHover: #ed7948;
 --button-text: #ffffff;
 --container: 1200px;
 }
 :root[data-theme="light"]{
 --bg: #f4f1eb;
 --surface: #fffdf9;
 --surface-2: #ece7df;
 --line: rgba(31,34,38,.12);
 --text: #1f2226;
 --muted: #6e706d;
 --primary: #b84826;
 --primaryHover: #96391d;
 --button-text: #111214;
 }
 *{
 box-sizing: border-box;
 }
 html{
 scroll-behavior: smooth;
 }
 body{
 margin:0;
 background: var(--bg);
 color: var(--text);
 font-family: "Manrope", sans-serif;
 -webkit-font-smoothing: antialiased;
 }
 a{
 color: inherit;
 text-decoration: none;
 }
1
 button{
 font-family: inherit;
 }
`;
const Header = styled.header`
 position:sticky;
 top:0;
 z-index:100;
 background:color-mix(in srgb, var(--bg) 92%, transparent);
 border-bottom:1px solid var(--line);
 backdrop-filter:blur(12px);
 .container{
 max-width:var(--container);
 margin:0 auto;
 padding:18px 20px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 gap:18px;
 }
 .logo{
 display:flex;
 align-items:center;
 gap:12px;
 border:0;
 padding:0;
 background:transparent;
 color:var(--text);
 text-align:left;
 cursor:pointer;
 }
 .mark{
 width:40px;
 height:40px;
 border-radius:12px;
 background:white;
 color:#111;
 display:grid;
 place-items:center;
 font-size:14px;
 font-weight:700;
 }
 .brand{ display:flex; flex-direction:column; gap:2px; }
 .brand strong{ font-size:14px; font-weight:600; }
 .brand span{ font-size:13px; color:var(--muted); }
 nav{ display:flex; align-items:center; gap:4px; }
 nav button{
 border:0;
 background:transparent;
 color:var(--muted);
 padding:10px 9px;
 border-radius:8px;
 font-size:14px;
 font-weight:500;
 cursor:pointer;
 transition:.2s ease;
 }
 nav button:hover{ color:var(--text); background:var(--surface-2); }
 .menuToggle{
 display:none;
 width:42px;
 height:40px;
 border:1px solid var(--line);
 background:var(--surface);
 color:var(--text);
 border-radius:10px;
 cursor:pointer;
 }
 .menuToggle .bar{ display:block; width:18px; height:2px; margin:4px auto; background:currentColor; border-radius:2px; }
 .tools{ display:flex; align-items:center; gap:8px; }
 .themeToggle,.cta{
 padding:12px 18px;
 border-radius:12px;
 border:0;
 color:var(--text);
 font-size:14px;
 font-weight:600;
 cursor:pointer;
 transition:.2s ease;
 }
 .themeToggle{ background:var(--surface); border:1px solid var(--line); padding:10px 12px; }
 .themeToggle:hover{ border-color:var(--primary); }
 .cta{ background:var(--primary); color:var(--button-text); }
 .cta:hover{ background:var(--primaryHover); }
 @media(max-width:768px){
 .container{ padding:14px; }
 nav{ display:none; }
 .menuToggle{ display:block; }
 .tools{ margin-left:auto; }
 .cta{ padding:10px 12px; }
 }
 .mobileMenuOverlay{
 position:fixed;
 inset:0;
 z-index:200;
 display:grid;
 align-items:flex-start;
 justify-content:center;
 padding:20px;
 overflow-y:auto;
 background:rgba(10,10,12,.68);
 backdrop-filter:blur(8px);
 }
 .mobileMenuModal{
 width:min(360px,100%);
 max-height:calc(100dvh - 40px);
 overflow-y:auto;
 padding:24px;
 background:var(--surface);
 border:1px solid var(--line);
 border-radius:16px;
 box-shadow:0 24px 70px rgba(0,0,0,.28);
 }
 .mobileMenuHeader{ display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:18px; }
 .mobileMenuTitle{ margin:0; color:var(--text); font-size:20px; }
 .mobileMenuClose{ width:36px; height:36px; border:1px solid var(--line); border-radius:10px; background:transparent; color:var(--text); font-size:20px; cursor:pointer; }
 .mobileMenuLinks{ display:grid; gap:6px; }
 .mobileMenuLinks button{ width:100%; border:0; border-radius:9px; padding:13px 12px; background:transparent; color:var(--text); text-align:left; font-size:15px; cursor:pointer; }
 .mobileMenuLinks button:hover{ background:var(--surface-2); }
`;
const MobileMenuOverlay = styled.div`
 position:fixed;
 inset:0;
 z-index:200;
 display:flex;
 align-items:flex-start;
 justify-content:center;
 padding:72px 16px 24px;
 overflow-y:auto;
 background:rgba(10,10,12,.68);
 backdrop-filter:blur(8px);

 .mobileMenuModal{
 width:min(360px,100%);
 max-height:calc(100dvh - 96px);
 overflow-y:auto;
 padding:24px;
 background:var(--surface);
 border:1px solid var(--line);
 border-radius:16px;
 box-shadow:0 24px 70px rgba(0,0,0,.28);
 }
 .mobileMenuHeader{ display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:18px; }
 .mobileMenuTitle{ margin:0; color:var(--text); font-size:20px; }
 .mobileMenuClose{ width:42px; height:42px; border:1px solid var(--line); border-radius:10px; background:transparent; color:var(--text); font-size:22px; cursor:pointer; }
 .mobileMenuLinks{ display:grid; gap:6px; }
 .mobileMenuLinks button{ width:100%; border:0; border-radius:9px; padding:14px 12px; background:transparent; color:var(--text); text-align:left; font-size:15px; cursor:pointer; }
 .mobileMenuLinks button:hover{ background:var(--surface-2); }
`;
function App() {
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const sections = [
    { id: "about", label: "Про мене" },
    { id: "projects", label: "Проєкти" },
    { id: "technologies", label: "Навички" },
    { id: "contacts", label: "Контакти" }
  ];
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
    setIsMenuOpen(false);
  };
  const scrollTo = (id) => {
    navigateTo("home");
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }, 0);
  };
  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="container">
          <button type="button" className="logo" onClick={() => navigateTo("home")} aria-label="На головну">
            <div className="mark">DO</div>
            <div className="brand">
              <strong>Dmytro Omelianenko</strong>
              <span>Frontend-розробник</span>
            </div>
          </button>
          <button
            type="button"
            className="menuToggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <nav id="main-navigation" className={isMenuOpen ? "open" : ""} aria-label="Основна навігація">
            <button type="button" onClick={() => navigateTo("home")}>Головна</button>
            {sections.map(section => (
              <button
                type="button"
                key={section.id}
                onClick={() => scrollTo(section.id)}
              >
                {section.label}
              </button>
            ))}
            <button type="button" onClick={() => navigateTo("certificates")}>Сертифікати</button>
            <button type="button" onClick={() => navigateTo("reports")}>Відгуки</button>
          </nav>
          <div className="tools">
            <button type="button" className="themeToggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Змінити тему">
              {theme === "dark" ? "☀ Світла" : "◐ Темна"}
            </button>
            <button type="button" className="cta" onClick={() => setModal(true)}>Обговорити проєкт</button>
          </div>
        </div>
      </Header>
      {isMenuOpen && (
        <MobileMenuOverlay onClick={() => setIsMenuOpen(false)}>
          <div className="mobileMenuModal" onClick={(event) => event.stopPropagation()}>
            <div className="mobileMenuHeader">
              <h2 className="mobileMenuTitle">Навігація</h2>
              <button type="button" className="mobileMenuClose" onClick={() => setIsMenuOpen(false)} aria-label="Закрити меню">×</button>
            </div>
            <nav id="mobile-navigation" className="mobileMenuLinks" aria-label="Мобільна навігація">
              <button type="button" onClick={() => navigateTo("home")}>Головна</button>
              {sections.map((section) => (
                <button type="button" key={section.id} onClick={() => scrollTo(section.id)}>{section.label}</button>
              ))}
              <button type="button" onClick={() => navigateTo("certificates")}>Сертифікати</button>
              <button type="button" onClick={() => navigateTo("reports")}>Відгуки</button>
            </nav>
          </div>
        </MobileMenuOverlay>
      )}
      {page === "home" && <>
        <About />
        <Projects />
        <Technologies />
        <Reports />
        <Contacts />
      </>}
      {page === "certificates" && <Certificates />}
      {page === "reports" && <Reports />}
      <ServiceModal
        isOpen={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
}
export default App;