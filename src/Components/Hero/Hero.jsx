import React from "react";
import "./Hero.css";
import { useLanguage } from "../../LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-spark">✦</span>
          <p className="badge-text">{t("badge_text")}</p>
        </div>

        <h1 className="hero-main-title">
          {t("hero_main_title")} <br />
          <span className="hero-gradient-text">
            {t("hero_main_bottom")}
            <span className="title-dot">.</span>
          </span>
        </h1>

        <p className="hero-sub-description">{t("hero_description")}</p>

        <div className="hero-action-buttons">
          <button className="btn-dark-premium">
            <a href="https://t.me/Fotoskazki_bot">{t("create_fairy_tale")}</a>
          </button>
          <button className="btn-light-premium">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="instagram-icon"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="insta"><a href="https://www.instagram.com/fotoskazki.uz/">{t("instagram_news")}</a></span>
          </button>
        </div>

        {/* <span className="arrow-icon">→</span> */}

        <div className="hero-social-proof">
          <div className="avatar-group">
            <div className="avatar-circle av-color-1"></div>
            <div className="avatar-circle av-color-2"></div>
            <div className="avatar-circle av-color-3"></div>
            <div className="avatar-circle av-color-4"></div>
          </div>
          <div className="proof-details">
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star-icon">
                  ★
                </span>
              ))}
            </div>
            <p className="proof-info">
              <span className="bold-text">12 000+</span>{" "}
              {t("hero_families_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
