import React from "react";
import "./PriceSection.css";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";

const SFSymbols = {
  Info: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  Check: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Zap: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Sparkles: () => (
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
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  Clock: () => (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const PriceSection = () => {
  const { t } = useLanguage();
  const cards = [
    {
      id: 1,
      title: t("price_card_standard"),
      pages: t("price_pages_6"),
      illus: t("price_illus_6"),
      price: "1 050 000",
      isPopular: false,
    },
    {
      id: 2,
      title: t("price_card_premium"),
      pages: t("price_pages_10"),
      illus: t("price_illus_10"),
      price: "1 400 000",
      isPopular: true,
    },
  ];

  return (
    <div className="apple-container" id="price">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="header-area"
      >
        <h1>{t("price_title")}</h1>
        <p>{t("price_subtitle")}</p>
      </motion.div>

      <div className="pricing-grid">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ y: -10 }}
            className={`price-card ${card.isPopular ? "popular" : ""}`}
          >
            {card.isPopular && (
              <span className="badge">{t("price_popular_badge")}</span>
            )}
            <h3 className="card-title">{card.title}</h3>

            <div className="price-tag">
              <span className="amount">{card.price}</span>
              <span className="currency">{t("price_currency")}</span>
            </div>

            <ul className="features">
              <li>{card.pages}</li>
              <li>{card.illus}</li>
              <li className="highlight">
                <SFSymbols.Sparkles />
                {t("price_ar_included")}
              </li>
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="important-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="info-glass-card"
        >
          <div className="card-header">
            <h2>{t("price_important_title")}</h2>
          </div>

          <div className="info-grid">
            {/* Prepayment */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="info-item-wrapper"
            >
              <div className="icon-container blue">
                <SFSymbols.Check />
              </div>
              <div className="text-content">
                <h4>{t("price_prepayment_title")}</h4>
                <p>{t("price_prepayment_desc")}</p>
              </div>
            </motion.div>

            {/* Express */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="info-item-wrapper"
            >
              <div className="icon-container orange">
                <SFSymbols.Zap />
              </div>
              <div className="text-content">
                <h4>{t("price_express_title")}</h4>
                <p>{t("price_express_desc")}</p>
              </div>
            </motion.div>

            {/* AR */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="info-item-wrapper"
            >
              <div className="icon-container purple">
                <SFSymbols.Sparkles />
              </div>
              <div className="text-content">
                <h4>{t("price_extra_ar_title")}</h4>
                <p>{t("price_extra_ar_desc")}</p>
              </div>
            </motion.div>

            {/* Deadlines */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="info-item-wrapper"
            >
              <div className="icon-container green">
                <SFSymbols.Clock />
              </div>
              <div className="text-content">
                <h4>{t("price_deadline_title")}</h4>
                <p>{t("price_deadline_desc")}</p>
              </div>
            </motion.div>
          </div>

          <p className="footer-note">{t("price_footer_note")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PriceSection;
