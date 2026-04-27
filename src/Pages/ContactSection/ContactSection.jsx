import React from 'react';
import './ContactSection.css';
import { motion } from 'framer-motion';
import { useLanguage } from "../../LanguageContext";

const Contact = {
  Location: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Phone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Telegram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  )
};

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <span className="contact-badge">{t("contact_badge") || "Aloqa"}</span>
          <h2>{t("contact_title") || "Biz bilan bog'laning"}</h2>
        </motion.div>

        <div className="contact-grid">
          {/* Manzil */}
          <motion.div whileHover={{ y: -5 }} className="contact-card">
            <div className="contact-icon-box blue">
              
            </div>
            <h3>{t("contact_location_title") || "Manzilimiz"}</h3>
            <p>Toshkent sh., Uchquduq mahalla</p>
          </motion.div>


          <motion.a href="te:+998919767600" whileHover={{ y: -5 }} className="contact-card">
            <div className="contact-icon-box green">
             
            </div>
            <h3>{t("contact_phone_title") || "Telefon"}</h3>
            <p>+998 91 976 76 00</p>
          </motion.a>


          <motion.a href="https://t.me/fotoskaz_bot" target="_blank" whileHover={{ y: -5 }} className="contact-card">
            <div className="contact-icon-box purple">
           
            </div>
            <h3>{t("contact_tg_title") || "Telegram Bot"}</h3>
            <p>@fotoskaz_bot</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;