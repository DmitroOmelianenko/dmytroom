// ServiceModal.jsx
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.55);
  display: grid;
  place-items: center;
  z-index: 1000;
  padding: 18px;
  animation: ${overlayIn} .18s ease both;
`;

const ModalContent = styled.div`
  --accent: #b41212;

  width: min(560px, 100%);
  background: white;
  border: 1px solid rgba(18,19,23,.10);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 28px 90px rgba(0,0,0,.35);
  animation: ${popIn} .22s ease both;
  max-height: 90vh;
  overflow: auto;

  h2 {
    margin: 0 0 14px;
    text-align: center;
    color: #121317;
    font-size: 22px;
  }

  form {
    display: grid;
    gap: 12px;
  }

  input, textarea, select {
    width: 100%;
    padding: 12px 12px;
    border-radius: 12px;
    border: 1.5px solid rgba(18,19,23,.14);
    font-size: 15px;
    outline: none;
    transition: border-color .18s ease, box-shadow .18s ease;
  }

  input:focus, textarea:focus, select:focus {
    border-color: rgba(180,18,18,.55);
    box-shadow: 0 0 0 4px rgba(180,18,18,.12);
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .msg {
    text-align: center;
    font-weight: 700;
    padding: 10px 12px;
    border-radius: 14px;
    border: 1px solid rgba(18,19,23,.10);
    background: rgba(246,246,248,.8);
  }

  .msg.success { color: #1f8f4d; border-color: rgba(31,143,77,.22); background: rgba(31,143,77,.08); }
  .msg.error { color: #c0392b; border-color: rgba(192,57,43,.22); background: rgba(192,57,43,.08); }

  .actions {
    display: grid;
    gap: 10px;
    margin-top: 4px;
  }

  button {
    padding: 12px 14px;
    border: 0;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    transition: transform .18s ease, filter .18s ease, box-shadow .18s ease;
  }

  .primary {
    color: white;
    background: linear-gradient(135deg, var(--accent), #8a0e0e);
    box-shadow: 0 10px 28px rgba(180,18,18,.24);
  }

  .primary:hover { transform: translateY(-2px); filter: brightness(1.03); box-shadow: 0 14px 34px rgba(180,18,18,.32); }
  .primary:active { transform: translateY(0); }

  .secondary {
    background: #f0f0f3;
    color: #121317;
    border: 1px solid rgba(18,19,23,.10);
  }

  .secondary:hover { transform: translateY(-2px); }
  .secondary:active { transform: translateY(0); }

  button:disabled {
    opacity: .7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 560px) {
    padding: 18px;
    .row { grid-template-columns: 1fr; }
  }
`;

export default function ServiceModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const firstInputRef = useRef(null);

  const FORMSPREE_URL = "https://formspree.io/f/mdaakgno";

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstInputRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setMessage("✅ Дякуємо! Ваше замовлення отримано. Ми зв'яжемось з вами найближчим часом!");
      setFormData({ name: "", email: "", phone: "", service: "", description: "" });
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 2500);
    } else {
      setMessage("❌ Помилка при відправці. Спробуйте ще раз.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} role="presentation">
      <ModalContent onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Замовити послугу">
        <h2>Замовити послугу</h2>

        {message && (
          <div className={`msg ${message.includes("✅") ? "success" : "error"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            ref={firstInputRef}
            type="text"
            name="name"
            placeholder="Ваше ім'я *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Виберіть послугу *</option>
            <option value="website">Розробка вебсайту</option>
            <option value="markup">Верстка сайту</option>
            <option value="consultation">Консультація</option>
            <option value="other">Інше</option>
          </select>

          <textarea
            name="description"
            placeholder="Опишіть вашу ідею"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />

          <div className="actions">
            <button className="primary" type="submit" disabled={loading}>
              {loading ? "Надсилання..." : "Відправити"}
            </button>
            <button className="secondary" type="button" onClick={onClose}>
              Закрити
            </button>
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}