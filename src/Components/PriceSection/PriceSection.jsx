import React, { useState } from "react";
import "./PriceSection.css";
import { motion, AnimatePresence } from "framer-motion";
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

  Book: () => (
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Frame: () => (
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
};

const PriceSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("stories");

  const pricingData = {
    stories: [
      {
        id: 1,
        title: t("price_card_standard"),
        price: "1 050 000",
        pagesKey: "price_pages_6", 
        illusKey: "price_illus_6", 
        isPopular: false,
      },
      {
        id: 2,
        title: t("price_card_premium"),
        price: "1 400 000",
        pagesKey: "price_pages_10", 
        illusKey: "price_illus_10", 
        isPopular: true,
      },
    ],
    memory: [
      {
        id: 3,
        title: "Memory Lite",
        price: "800 000",
        pages: "20",
        isPopular: false,
      },
      {
        id: 4,
        title: "Memory Pro",
        price: "1 200 000",
        pages: "40",
        isPopular: true,
      },
    ],
    frames: [
      {
        id: 5,
        title: "Jonli Ramka S",
        price: "350 000",
        pages: "15x20",
        isPopular: false,
      },
      {
        id: 6,
        title: "Jonli Ramka L",
        price: "550 000",
        pages: "30x40",
        isPopular: true,
      },
    ],
  };

  const tabs = [
    { id: "stories", label: t("main_title"), icon: <SFSymbols.Sparkles /> },
    { id: "memory", label: t("book_title_second"), icon: <SFSymbols.Book /> },
    { id: "frames", label: t("foto_ramki"), icon: <SFSymbols.Frame /> },
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

      <div className="tab-controller">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="pricing-grid">
        <AnimatePresence mode="wait">
          {pricingData[activeTab].map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
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
                <li>{t(card.pagesKey)}</li>

                <li>{t(card.illusKey)}</li>
                <li className="highlight">
                  <SFSymbols.Sparkles /> {t("price_ar_included")}
                </li>
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
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
