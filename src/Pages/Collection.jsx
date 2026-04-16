import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Collection.css";
import { assets } from "../assets/assets";
import Footer from "../Components/Footer/Footer";

const Collection = () => {
  const { t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeInVariant = {
    hidden: { opacity: 0, x: -100 }, // Chapda va ko'rinmas
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tugmalar orasidagi farq (0.2 soniya)
      },
    },
  };

  // 2. Har bir tugma (Bola) uchun variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Pastda va ko'rinmas
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo">
          fotoskazki<span className="nav-span">.</span>
        </Link>

        <div className="nav-center-link">
          <a href="#about" className="nav-link">
            {t("about_us")}
          </a>
          <a to="/collection" className="nav-link-second">
            {t("collection")}
          </a>
        </div>

        <div className="nav-controls-wrapper">
          <div className="lang-dropdown-container">
            <button
              className="lang-trigger-btn"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{lang.toUpperCase()}</span>
            </button>

            {isLangOpen && (
              <div className="lang-menu">
                {["uz", "ru"].map((l) => (
                  <div
                    key={l}
                    className="lang-option"
                    onClick={() => {
                      setLang(l);
                      setIsLangOpen(false);
                    }}
                  >
                    {l === "uz" ? "O'zbekcha" : "Русский"}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div className={`nav-right-group ${isMenuOpen ? "open" : ""}`}>
          <div id="social-links-mobile">
              <a
                href="#about"
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about_us")}
              </a>
              <Link to={"/collection"}
                href="#collection"
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("collection")}
              </Link>
            </div>
            <a
              href="tel:+998919767600"
              className="nav-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav_contact")}
            </a>
          </div>
        </div>
      </nav>

      <div className="books-layout-section">
        <div className="section-header">
          <h2 className="main-title-h1">{t("our_collections_title")}</h2>

          <div className="title-underline"></div>
        </div>
        <div className="books-layout-container">
          {/* Chap ustun - Rasm va Tugmalar */}
          <div className="column books-visual-column">
            <div className="books-shadow-wrapper">
              <motion.img
                src={assets.book}
                alt=""
                className="books-cover-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariant}
              />
            </div>
          </div>

          {/* O'ng ustun - Til, Sarlavha va Matn */}
          <div className="column books-text-column">
            <div className="books-text-content">
              <h1 className="books-main-title">{t("main_title")}</h1>
              <p className="books-description-text">{t("books_summary")}</p>
            </div>
            <p className="books-summary-bottom">{t("bottom_text")}</p>
            <motion.div
              className="books-button-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button variants={itemVariants} className="books-button">O'zbekcha</motion.button>
              <motion.button variants={itemVariants} className="books-button">Русский</motion.button>
              <motion.button variants={itemVariants} className="books-button">English</motion.button>
            </motion.div>
          </div>
        </div>
        <div className="books-layout-container">
          {/* Chap ustun - Rasm va Tugmalar */}
          <div className="column books-visual-column">
            <div className="books-shadow-wrapper-second">
              <motion.img
                src={assets.photo_6}
                alt=""
                className="books-cover-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariant}
              />
            </div>
          </div>

          {/* O'ng ustun - Til, Sarlavha va Matn */}
          <div className="column books-text-column">
            <div className="books-text-content">
              <h1 className="books-main-title">{t("text")}</h1>
              <p className="books-description-text">{t("diary_summary")}</p>
            </div>
            <p className="books-summary-bottom">{t("bottom_text")}</p>
            <motion.div
              className="books-button-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button variants={itemVariants} className="books-button">O'zbekcha</motion.button>
              <motion.button variants={itemVariants} className="books-button">Русский</motion.button>
              <motion.button variants={itemVariants} className="books-button">English</motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
