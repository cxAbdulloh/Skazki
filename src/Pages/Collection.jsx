import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Collection.css";
import { assets } from "../assets/assets";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

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

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // State-ni massiv qilib o'zgartiramiz
  const [openIndices, setOpenIndices] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index) // Agar ochiq bo'lsa, yopish (massivdan o'chirish)
          : [...prevIndices, index] // Agar yopiq bo'lsa, ochish (massivga qo'shish)
    );
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar-nav">
        <Link to="/" className="logo">
          fotoskazki<span className="nav-span">.</span>
        </Link>

        {/* <div className="nav-center-link">
          <a href="#about" className="nav-link">
            {t("about_us")}
          </a>
        </div> */}

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
                href="https://t.me/fotoskaz_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <FontAwesomeIcon icon={faTelegram} />
                <span>Telegram</span>
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/fotoskazki.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
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

      <div className="books-layout-container">
        {/* <div className="column books-visual-column">
          <div className="books-shadow-wrapper-second">
            <motion.img
              src={assets.photo_6}
              alt=""
              className="books-cover-image"
              initial="hidden"
              whileInView="visible"
            />
          </div>
        </div> */}

        <div className="column books-text-column">
          <div className="books-text-content">
            <h1 className="books-main-title">{t("text")}</h1>
          </div>
          <div className="legacy-section">
            <div className="accordion-container">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className={`accordion-item ${
                    openIndices.includes(item) ? "active" : ""
                  }`}
                  key={item}
                  onClick={() => toggleAccordion(item)} // Butun band bosilganda ochiladi
                >
                  <div className="accordion-header">
                    <h2>{t(`title_${item}`)}</h2>
                    <span className="accordion-icon">
                      {openIndices.includes(item) ? "−" : "+"}
                    </span>
                  </div>

                  <div className="accordion-content">
                    <p className="description">{t(`desc_${item}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bottom-button-containers">
            <button className="accordion-button">
              <a href="https://t.me/fotoskaz_bot">{t("delevery")}</a>
            </button>
            <button className="second-accordion-button">
              <a href="tel:+998919767600" className="phone">
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
                <span>+998 91 976 76 00</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Collection;
