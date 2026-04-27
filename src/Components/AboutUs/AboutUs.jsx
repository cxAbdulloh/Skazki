import React from "react";
import "./AboutUs.css";
import { useLanguage } from "../../LanguageContext";

const Icons = {
  Palette: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.647-.494 2.132-1.121a2.5 2.5 0 0 0 4.195-.411A10 10 0 1 0 12 2z" />
    </svg>
  ),
  Quality: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  Eco: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5.07A7 7 0 0 1 11 20z" />
      <path d="M11 20c-3.9 0-7-3.1-7-7 0-4.5 7-11 7-11s7 6.5 7 11c0 .4-.03.8-.1 1.2" />
    </svg>
  ),
  Delivery: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polyline points="16 8 20 8 23 11 23 16 16 16" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="about-premium-section" id="about">
      <div className="about-inner">
        <div className="section-header">
          <h2 className="main-title-h1">{t("about_us_title")}</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content-grid">
          <div className="about-text-box">
            <div className="desc-wrapper">
              <span className="gold-dot"></span>
              <p className="about-main-desc">{t("about_description")}</p>
            </div>
            <div className="desc-wrapper">
              <span className="gold-dot"></span>
              <p className="about-main-desc">{t("about_description_2")}</p>
            </div>

            <div className="social-info-area">
              <p className="social-text">{t("more_info_text")}</p>
              <div className="social-links-wrapper">
                <a
                  href="hhttps://www.instagram.com/fotoskazki.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item instagram-link"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a href="tel:+998919767600" className="social-item phone-link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+998919767600</span>
                </a>
              </div>
            </div>
          </div>

          <div className="about-plus-grid">
            <div className="plus-card">
              <span className="plus-icon">🎨</span>
              <h3>{t("plus_1_title")}</h3>
              <p>{t("plus_1_desc")}</p>
            </div>
            <div className="plus-card">
              <span className="plus-icon">✨</span>
              <h3>{t("plus_2_title")}</h3>
              <p>{t("plus_2_desc")}</p>
            </div>
            <div className="plus-card">
              <span className="plus-icon">🌿</span>
              <h3>{t("plus_3_title")}</h3>
              <p>{t("plus_3_desc")}</p>
            </div>
            <div className="plus-card">
              <span className="plus-icon">🚚</span>
              <h3>{t("plus_4_title")}</h3>
              <p>{t("plus_4_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
