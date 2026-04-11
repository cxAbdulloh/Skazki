import React from "react";
import "./Testimonials.css";
import { useLanguage } from "../../LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Екатерина",
      role: t("testi_1_role"),
      text: t("testi_1_text"),
      icon: "🌙",
    },
    {
      id: 2,
      name: "Александр",
      role: t("testi_2_role"),
      text: t("testi_2_text"),
      icon: "🦄",
    },
    {
      id: 3,
      name: "Светлана",
      role: t("testi_3_role"),
      text: t("testi_3_text"),
      icon: "☁️",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="medieval-divider top"></div>

      <div className="section-header">
        <h2 className="section-title">{t("testimonials_title")}</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="corner-pattern top-left"></div>
            <div className="corner-pattern bottom-right"></div>

            <div className="knight-rank">{item.icon}</div>

            <div className="quote-body">
              <p className="testimonial-text">"{item.text}"</p>
            </div>

            <div className="testimonial-footer">
              <div className="user-info">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
