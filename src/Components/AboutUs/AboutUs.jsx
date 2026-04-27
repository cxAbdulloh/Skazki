import React from "react";
import "./AboutUs.css";
import { useLanguage } from "../../LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  const PlusIcons = {
    Design: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
      </svg>
    ),

    Quality: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 9L2 22" />
        <path d="M15 4V2" /> 
        <path d="M15 16v-2" /> 
        <path d="M8 9h2" /> 
        <path d="M20 9h2" />
        <path d="M17.8 11.8L19 13" /> 
        <path d="M17.8 6.2L19 5" /> 
        <path d="M12.2 6.2L11 5" />
        <path d="M12.2 11.8L11 13" />
      </svg>
    ),

    Eco: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 19.07-1.41-1.41" />
        <path d="m6.34 6.34-1.41-1.41" />
      </svg>
    ),

    Delivery: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  };

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
                  href="https://www.instagram.com/fotoskazki.uz/"
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
            {/* data-icon-type="blue" - Moviy fon */}
            <div className="plus-card" data-icon-type="blue">
              <span className="plus-icon">
                <PlusIcons.Design />
              </span>
              <h3>{t("plus_1_title")}</h3>
              <p>{t("plus_1_desc")}</p>
            </div>

            {/* data-icon-type="orange" - To'q sariq fon */}
            <div className="plus-card" data-icon-type="orange">
              <span className="plus-icon">
                <PlusIcons.Quality />
              </span>
              <h3>{t("plus_2_title")}</h3>
              <p>{t("plus_2_desc")}</p>
            </div>

            {/* data-icon-type="purple" - Binafsha fon */}
            <div className="plus-card" data-icon-type="purple">
              <span className="plus-icon">
                <PlusIcons.Eco />
              </span>
              <h3>{t("plus_3_title")}</h3>
              <p>{t("plus_3_desc")}</p>
            </div>

            {/* data-icon-type="green" - Yashil fon */}
            <div className="plus-card" data-icon-type="green">
              <span className="plus-icon">
                <PlusIcons.Delivery />
              </span>
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
