import React from "react";
import "./ContactSection.css";
import { useLanguage } from "../../LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="apple-contact">
      <div className="contact-container">
        <header className="contact-header">
          <h1>
            {t("contact_us")}<span>.</span>
          </h1>
        </header>

        <div className="contact-grid">
          <div className="card address-card large">
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="card-label">{t("contact_office")}</span>
              <h3>{t("contact_address")}</h3>
              <p>{t("contact_district")}</p>
            </div>
          </div>


          <div className="card phone-card">
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="card-label">{t("contact_call")}</span>
              <a href="tel:+998901234567">+99891 976 76 00</a>
            </div>
          </div>

      
          <div className="card instagram-card">
            <div className="card-content">
              <div className="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="card-label">{t("contact_social")}</span>
              <h3>@fotoskazki.uz</h3>
              <div className="card-footer">{t("contact_subscribe")}</div>
            </div>
            <div className="glass-effect"></div>
          </div>

  
          <div className="card telegram-card wide">
            <div className="card-content flex-row">
              <div className="text-side">
                <div className="icon-wrapper telegram-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3>{t("contact_telegram_title")}</h3>
                  <p>{t("contact_telegram_desc")}</p>
                </div>
              </div>
              <a href="https://t.me/fotoskaz_bot" className="apple-button">{t("contact_chat_btn")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;