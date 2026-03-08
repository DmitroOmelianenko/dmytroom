// Reports.jsx
import React, { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const API_URL = "https://69ad3080b50a169ec87ed7a6.mockapi.io/reviews";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledReports = styled.section`
  --bg: #0f0f12;
  --card: rgba(255, 255, 255, 0.06);
  --card-strong: rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.12);
  --text: #f3f4f6;
  --muted: rgba(243, 244, 246, 0.72);
  --accent: #b41212;
  --accent-2: #ffcc00;
  --success: #22c55e;
  --danger: #ef4444;

  background:
    radial-gradient(1000px 600px at 10% -10%, rgba(180, 18, 18, 0.22), transparent 60%),
    radial-gradient(900px 500px at 90% 0%, rgba(255, 204, 0, 0.12), transparent 55%),
    var(--bg);
  color: var(--text);
  padding: 72px 20px;

  .container {
    max-width: 1160px;
    margin: 0 auto;
  }

  .hero {
    text-align: center;
    margin-bottom: 30px;
    animation: ${fadeUp} 0.55s ease both;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 204, 0, 0.08);
    color: #ffe27a;
    border: 1px solid rgba(255, 204, 0, 0.16);
    border-radius: 999px;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.2px;
    margin-bottom: 14px;
  }

  .title {
    margin: 0 0 10px;
    font-size: clamp(28px, 5vw, 46px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .subtitle {
    margin: 0 auto;
    max-width: 720px;
    color: var(--muted);
    line-height: 1.7;
    font-size: 15px;
  }

  .grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 18px;
    align-items: start;
  }

  .panel {
    background: linear-gradient(180deg, var(--card-strong), var(--card));
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(10px);
    overflow: hidden;
    animation: ${fadeUp} 0.6s ease both;
  }

  .panelHeader {
    padding: 22px 22px 0;
  }

  .panelTitle {
    margin: 0;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.02em;
  }

  .panelText {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .form {
    padding: 22px;
    display: grid;
    gap: 14px;
  }

  .field {
    display: grid;
    gap: 8px;
  }

  .label {
    font-size: 13px;
    font-weight: 800;
    color: var(--text);
  }

  .input,
  .textarea {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    border-radius: 16px;
    padding: 13px 14px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
  }

  .input::placeholder,
  .textarea::placeholder {
    color: rgba(243, 244, 246, 0.44);
  }

  .input:focus,
  .textarea:focus {
    border-color: rgba(255, 204, 0, 0.28);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 0 0 4px rgba(255, 204, 0, 0.08);
  }

  .textarea {
    resize: vertical;
    min-height: 140px;
    font-family: inherit;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .starsWrap {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .starButton {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.45);
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
  }

  .starButton:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 204, 0, 0.25);
    color: var(--accent-2);
  }

  .starButton.active {
    color: var(--accent-2);
    border-color: rgba(255, 204, 0, 0.28);
    background: rgba(255, 204, 0, 0.08);
  }

  .uploadHint {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
  }

  .message {
    padding: 12px 14px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
  }

  .message.success {
    background: rgba(34, 197, 94, 0.12);
    border: 1px solid rgba(34, 197, 94, 0.22);
    color: #9ff0b9;
  }

  .message.error {
    background: rgba(239, 68, 68, 0.12);
    border: 1px solid rgba(239, 68, 68, 0.22);
    color: #ffb2b2;
  }

  .submit {
    margin-top: 4px;
    border: 0;
    border-radius: 16px;
    padding: 14px 18px;
    background: linear-gradient(135deg, var(--accent), #8a0e0e);
    color: white;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 14px 34px rgba(180, 18, 18, 0.28);
    transition: transform 0.18s ease, filter 0.18s ease, box-shadow 0.18s ease;
  }

  .submit:hover {
    transform: translateY(-2px);
    filter: brightness(1.03);
    box-shadow: 0 18px 40px rgba(180, 18, 18, 0.36);
  }

  .submit:disabled {
    opacity: 0.72;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .reviewsTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 22px 22px 0;
    flex-wrap: wrap;
  }

  .counter {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 800;
    color: var(--muted);
  }

  .reviewsList {
    padding: 22px;
    display: grid;
    gap: 14px;
  }

  .empty {
    padding: 30px 18px;
    border: 1px dashed rgba(255, 255, 255, 0.14);
    border-radius: 18px;
    text-align: center;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.03);
  }

  .reviewCard {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 14px;
    align-items: start;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 16px;
    transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
  }

  .reviewCard:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 204, 0, 0.2);
    background: rgba(255, 255, 255, 0.05);
  }

  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(135deg, rgba(180, 18, 18, 0.28), rgba(255, 204, 0, 0.18));
    display: block;
  }

  .avatarFallback {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(135deg, rgba(180, 18, 18, 0.35), rgba(255, 204, 0, 0.18));
    font-size: 22px;
    font-weight: 900;
    color: white;
  }

  .reviewHead {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 14px;
    flex-wrap: wrap;
  }

  .name {
    margin: 0;
    font-size: 18px;
    font-weight: 900;
    line-height: 1.1;
  }

  .company {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 13px;
    font-weight: 700;
  }

  .rating {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--accent-2);
    font-size: 16px;
    letter-spacing: 1px;
  }

  .date {
    margin: 10px 0 0;
    color: rgba(243, 244, 246, 0.48);
    font-size: 12px;
    font-weight: 700;
  }

  .reviewText {
    margin: 12px 0 0;
    color: rgba(243, 244, 246, 0.84);
    line-height: 1.7;
    font-size: 14px;
    white-space: pre-line;
  }

  .skeleton {
    height: 118px;
    border-radius: 20px;
    background:
      linear-gradient(
        90deg,
        rgba(255,255,255,0.04) 0%,
        rgba(255,255,255,0.08) 50%,
        rgba(255,255,255,0.04) 100%
      );
    background-size: 240% 100%;
    animation: shimmer 1.4s infinite linear;
  }

  .avatarHelpRow {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .avatarHelpButton {
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    border-radius: 12px;
    padding: 8px 14px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease,
      color 0.18s ease,
      box-shadow 0.18s ease;
  }

  .avatarHelpButton:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 204, 0, 0.28);
    background: rgba(255, 204, 0, 0.08);
    color: #fff1b8;
    box-shadow: 0 10px 24px rgba(255, 204, 0, 0.08);
  }

  .avatarHelpButton:active {
    transform: translateY(0);
  }

  .avatarModalOverlay {
    position: fixed;
    inset: 0;
    background: rgba(4, 4, 8, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
    backdrop-filter: blur(8px);
  }

  .avatarModal {
    width: 100%;
    max-width: 560px;
    background:
      radial-gradient(500px 220px at 100% 0%, rgba(255, 204, 0, 0.08), transparent 60%),
      radial-gradient(500px 240px at 0% 0%, rgba(180, 18, 18, 0.12), transparent 60%),
      #16161c;
    color: var(--text);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.42);
    animation: modalFade 0.24s ease both;
  }

  .avatarModalHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 18px;
  }

  .avatarModalTitle {
    margin: 0;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .avatarModalSubtitle {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .avatarModalClose {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    font-size: 18px;
    cursor: pointer;
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease;
  }

  .avatarModalClose:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 204, 0, 0.28);
    background: rgba(255, 204, 0, 0.08);
  }

  .avatarModalContent {
    display: grid;
    gap: 14px;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(243, 244, 246, 0.88);
  }

  .avatarModalItem {
    padding: 14px 16px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
  }

  .avatarModalItem strong {
    display: block;
    margin-bottom: 4px;
    color: #fff;
    font-size: 14px;
  }

  .avatarModalContent code {
    display: inline-block;
    margin-top: 6px;
    background: rgba(255, 255, 255, 0.08);
    color: #fff3bf;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 13px;
    word-break: break-all;
  }

  .avatarModalAction {
    display: flex;
    justify-content: flex-end;
    margin-top: 22px;
  }

  .avatarModalOk {
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease,
      box-shadow 0.18s ease;
  }

  .avatarModalOk:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 204, 0, 0.28);
    background: rgba(255, 204, 0, 0.08);
    box-shadow: 0 10px 24px rgba(255, 204, 0, 0.08);
  }

  @keyframes modalFade {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  @media (max-width: 980px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    padding: 56px 14px;

    .row {
      grid-template-columns: 1fr;
    }

    .reviewsList,
    .form,
    .panelHeader,
    .reviewsTop {
      padding-left: 16px;
      padding-right: 16px;
    }

    .reviewCard {
      grid-template-columns: 1fr;
    }

    .avatar,
    .avatarFallback {
      width: 64px;
      height: 64px;
      border-radius: 18px;
    }

    .avatarHelpRow {
      align-items: stretch;
    }

    .avatarHelpButton {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    .avatarModal {
      padding: 18px;
      border-radius: 20px;
    }

    .avatarModalHeader {
      gap: 12px;
    }

    .avatarModalTitle {
      font-size: 20px;
    }

    .avatarModalContent {
      gap: 10px;
      font-size: 14px;
    }

    .avatarModalItem {
      padding: 12px 14px;
    }

    .avatarModalClose {
      width: 36px;
      height: 36px;
      border-radius: 10px;
    }
  }
`;
const initialForm = {
  name: "",
  company: "",
  avatar: "",
  description: "",
  rating: 5,
};

const STORAGE_OWNER_KEY = "reviews_owner_id";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function getInitials(name = "") {
  const parts = name.trim().split(" ").filter(Boolean);
  if (!parts.length) return "R";
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function Stars({ value }) {
  return (
    <span aria-label={`Оцінка ${value} з 5`}>
      {"★".repeat(value)}
      {"☆".repeat(5 - value)}
    </span>
  );
}

function getOwnerId() {
  if (typeof window === "undefined") return "";

  let ownerId = localStorage.getItem(STORAGE_OWNER_KEY);

  if (!ownerId) {
    ownerId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `owner_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

    localStorage.setItem(STORAGE_OWNER_KEY, ownerId);
  }

  return ownerId;
}

function getReviewsWord(count) {
  const lastTwo = count % 100;
  const lastOne = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return "відгуків";
  if (lastOne === 1) return "відгук";
  if (lastOne >= 2 && lastOne <= 4) return "відгуки";
  return "відгуків";
}

export default function Reports() {
  const [formData, setFormData] = useState(initialForm);
  const [reviews, setReviews] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isAvatarHelpOpen, setIsAvatarHelpOpen] = useState(false);

  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA;
    });
  }, [reviews]);

  const visibleReviews = useMemo(() => {
    return sortedReviews.filter((review) => review.isPublished !== false);
  }, [sortedReviews]);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setLoadingList(true);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Не вдалося завантажити відгуки");
      }

      const data = await response.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch {
      setMessage({
        type: "error",
        text: "Не вдалося завантажити список відгуків.",
      });
    } finally {
      setLoadingList(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  }

  function setRating(value) {
    setFormData((prev) => ({
      ...prev,
      rating: value,
    }));
  }

  function isReviewOwner(review) {
    return String(review?.ownerId || "") === String(getOwnerId());
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedCompany = formData.company.trim();
    const trimmedDescription = formData.description.trim();
    const trimmedAvatar = formData.avatar.trim();

    if (!trimmedName || !trimmedCompany || !trimmedDescription) {
      setMessage({
        type: "error",
        text: "Заповни ім’я, назву компанії та текст відгуку.",
      });
      return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
      setMessage({
        type: "error",
        text: "Оцінка має бути від 1 до 5.",
      });
      return;
    }

    setSubmitting(true);
    setMessage({ type: "", text: "" });

    const payload = {
      name: trimmedName,
      company: trimmedCompany,
      avatar: trimmedAvatar,
      description: trimmedDescription,
      rating: Number(formData.rating),
      createdAt: new Date().toISOString(),
      isPublished: true,
      ownerId: getOwnerId(),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Не вдалося зберегти відгук");
      }

      const createdReview = await response.json();

      setReviews((prev) => [createdReview, ...prev]);
      setFormData(initialForm);
      setMessage({
        type: "success",
        text: "Відгук успішно збережено.",
      });
    } catch {
      setMessage({
        type: "error",
        text: "Сталася помилка під час збереження. Спробуй ще раз.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteReview(reviewId) {
    const reviewToDelete = reviews.find(
      (item) => String(item.id) === String(reviewId)
    );

    if (!reviewToDelete) {
      setMessage({
        type: "error",
        text: "Відгук не знайдено.",
      });
      return;
    }

    if (!isReviewOwner(reviewToDelete)) {
      setMessage({
        type: "error",
        text: "Видалити можна лише власний відгук.",
      });
      return;
    }

    try {
      setMessage({ type: "", text: "" });

      const response = await fetch(`${API_URL}/${reviewId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Не вдалося видалити відгук.");
      }

      setReviews((prev) =>
        prev.filter((item) => String(item.id) !== String(reviewId))
      );

      setMessage({
        type: "success",
        text: "Відгук успішно видалено.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Сталася помилка під час видалення.",
      });
    }
  }

 return (
  <StyledReports id="reports">
    <div className="container">
      <div className="hero">
        <div className="eyebrow">Відгуки клієнтів</div>
        <h2 className="title">Реальні враження про співпрацю</h2>
        <p className="subtitle">
          Тут можна залишити відгук про роботу, поділитися враженням і
          поставити оцінку. Після збереження новий відгук одразу з’явиться у
          списку.
        </p>
      </div>

      <div className="grid">
        <div className="panel">
          <div className="panelHeader">
            <h3 className="panelTitle">Написати відгук</h3>
            <p className="panelText">
              Додай фото, назву компанії, текст і загальну оцінку.
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {message.text ? (
              <div className={`message ${message.type}`}>{message.text}</div>
            ) : null}

            <div className="field">
              <label className="label" htmlFor="avatar">
                Фото або посилання на фото
              </label>

              <input
                className="input"
                id="avatar"
                name="avatar"
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={formData.avatar}
                onChange={handleChange}
              />

              <div className="avatarHelpRow">
                <button
                  type="button"
                  className="avatarHelpButton"
                  onClick={() => setIsAvatarHelpOpen(true)}
                >
                  Як додати фото?
                </button>
              </div>

              {isAvatarHelpOpen ? (
                <div
                  className="avatarModalOverlay"
                  onClick={() => setIsAvatarHelpOpen(false)}
                >
                  <div
                    className="avatarModal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="avatarModalHeader">
                      <div>
                        <h3 className="avatarModalTitle">Як додати фото</h3>
                        <p className="avatarModalSubtitle">
                          У це поле потрібно вставити пряме посилання на зображення.
                        </p>
                      </div>

                      <button
                        type="button"
                        className="avatarModalClose"
                        onClick={() => setIsAvatarHelpOpen(false)}
                        aria-label="Закрити"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="avatarModalContent">
                      <div className="avatarModalItem">
                        <strong>1. Завантаж фото на сервіс</strong>
                        ImgBB, Postimages, Imgur або будь-який інший хостинг
                        зображень.
                      </div>

                      <div className="avatarModalItem">
                        <strong>2. Скопіюй пряме посилання</strong>
                        Потрібне саме посилання на картинку, а не на сторінку.
                        Найкраще, коли адреса закінчується на <code>.jpg</code>,{" "}
                        <code>.jpeg</code>, <code>.png</code> або <code>.webp</code>.
                      </div>

                      <div className="avatarModalItem">
                        <strong>3. Встав посилання у поле</strong>
                        <code>https://example.com/photo.jpg</code>
                      </div>

                      <div className="avatarModalItem">
                        <strong>Як перевірити</strong>
                        Відкрий посилання в новій вкладці. Якщо відкривається
                        тільки фото — усе правильно.
                      </div>
                    </div>

                    <div className="avatarModalAction">
                      <button
                        type="button"
                        className="avatarModalOk"
                        onClick={() => setIsAvatarHelpOpen(false)}
                      >
                        Зрозуміло
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="row">
              <div className="field">
                <label className="label" htmlFor="name">
                  Ім’я
                </label>
                <input
                  className="input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Наприклад, Іван Петренко"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="company">
                  Назва компанії
                </label>
                <input
                  className="input"
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Наприклад, Nova Studio"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Загальні враження</label>
              <div className="starsWrap">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`starButton ${
                      formData.rating >= star ? "active" : ""
                    }`}
                    onClick={() => setRating(star)}
                    aria-label={`Поставити ${star} зірок`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="description">
                Текст відгуку
              </label>
              <textarea
                className="textarea"
                id="description"
                name="description"
                placeholder="Напиши кілька слів про співпрацю, результат і враження."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button className="submit" type="submit" disabled={submitting}>
              {submitting ? "Збереження..." : "Зберегти відгук"}
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="reviewsTop">
            <div>
              <h3 className="panelTitle">Список відгуків</h3>
              <p className="panelText">
                Нові записи відображаються одразу після збереження.
              </p>
            </div>
            <div className="counter">
              {visibleReviews.length} {getReviewsWord(visibleReviews.length)}
            </div>
          </div>

          <div className="reviewsList">
            {loadingList ? (
              <>
                <div className="skeleton" />
                <div className="skeleton" />
                <div className="skeleton" />
              </>
            ) : visibleReviews.length === 0 ? (
              <div className="empty">
                Поки що немає відгуків. Будь першим, хто залишить враження.
              </div>
            ) : (
              visibleReviews.map((review) => (
                <article key={review.id} className="reviewCard">
                  {review.avatar ? (
                    <img
                      className="avatar"
                      src={review.avatar}
                      alt={review.name || "Avatar"}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling;
                        if (sibling) sibling.style.display = "grid";
                      }}
                    />
                  ) : null}

                  <div
                    className="avatarFallback"
                    style={{ display: review.avatar ? "none" : "grid" }}
                  >
                    {getInitials(review.name)}
                  </div>

                  <div>
                    <div className="reviewHead">
                      <div>
                        <h4 className="name">{review.name}</h4>
                        <p className="company">{review.company}</p>
                      </div>
                      <div className="rating">
                        <Stars value={Number(review.rating) || 0} />
                      </div>
                    </div>

                    <div className="date">{formatDate(review.createdAt)}</div>

                    <p className="reviewText">{review.description}</p>

                    {isReviewOwner(review) ? (
                      <button
                        type="button"
                        onClick={() => handleDeleteReview(review.id)}
                        style={{
                          marginTop: "12px",
                          background: "transparent",
                          border: "1px solid currentColor",
                          borderRadius: "12px",
                          padding: "8px 14px",
                          cursor: "pointer",
                          color: "inherit",
                        }}
                      >
                        Видалити
                      </button>
                    ) : null}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  </StyledReports>
);
}