import React from "react";
import "./AboutUs.css";
import { useLanguage } from "../../LanguageContext";


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
            {/* <div className="desc-wrapper">
              <span className="gold-dot"></span>
              <p className="about-main-desc">{t("about_description")}</p>
            </div> */}
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

          {/* O'ng tomonda plyuslar (Cards) */}
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
