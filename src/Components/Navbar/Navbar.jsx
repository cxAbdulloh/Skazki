import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLanguage } from "../../LanguageContext";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const imageRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <Link to={"/"} className="logo">
          fotoskazki<span className="nav-span">.</span>
        </Link>

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
                <div
                  className="lang-option"
                  onClick={() => {
                    setLang("uz");
                    setIsLangOpen(false);
                  }}
                >
                  O'zbekcha
                </div>
                <div
                  className="lang-option"
                  onClick={() => {
                    setLang("ru");
                    setIsLangOpen(false);
                  }}
                >
                  Русский
                </div>
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

      <main className="hero-section">
        <div className="text-content">
          <h2 className="hero-subtitle animate-text">{t("hero_subtitle")}</h2>
          <p className="hero-description animate-text">
            {t("hero_description")}
          </p>
          <div className="animate-text">
            <a
              href="https://t.me/fotoskaz_bot"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {t("create_fairy_tale")}
            </a>
          </div>
        </div>

        <div className="unicorn-container" ref={imageRef}>
          <img
            src={assets.unicorn}
            alt="Magic Unicorn"
            className="unicorn-img"
          />
        </div>
      </main>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import { motion } from 'framer-motion';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="hero-wrapper">
//       {/* Orqa fondagi xiralashgan sharlar (Orbs) */}
//       <div className="orb orb-purple"></div>
//       <div className="orb orb-blue"></div>
//       <div className="orb orb-yellow"></div>

//       {/* Navbar (Glassmorphism) */}
//       <nav className="navbar">
//         <div className="nav-logo">
//           <span className="logo-icon">✦</span> Fotoskazki
//         </div>
//         <div className="nav-links">
//           <a href="#stories">Stories</a>
//           <a href="#works">How it works</a>
//           <a href="#pricing">Pricing</a>
//           <a href="#gallery">Gallery</a>
//         </div>
//         <button className="nav-create-btn">Create</button>
//       </nav>

//       {/* Navbar Content */}
//       <main className="hero-main">
//         <motion.div
//           className="new-badge"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="sparkle">✨</span> New · Personalized AI illustrations
//         </motion.div>

//         <motion.h1
//           className="hero-title"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Where every child becomes <br />
//           <span className="hero-italic-gradient">the hero of their story.</span>
//         </motion.h1>

//         <motion.p
//           className="hero-description"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           Upload a photo. Our AI crafts a beautifully <br />
//           illustrated, one-of-a-kind storybook <br />
//           starring your little one — ready in minutes.
//         </motion.p>

//         <motion.div
//           className="hero-actions"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <button className="btn-dark">Create your story →</button>
//           <button className="btn-light">Watch the magic</button>
//         </motion.div>

//         {/* Social Proof */}
//         <motion.div
//           className="social-proof"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <div className="avatar-group">
//             <div className="avatar" style={{background: '#A890FE'}}></div>
//             <div className="avatar" style={{background: '#C2E9FB'}}></div>
//             <div className="avatar" style={{background: '#FDCB82'}}></div>
//             <div className="avatar" style={{background: '#B69EFE'}}></div>
//           </div>
//           <div className="rating">
//             <span className="stars">★★★★★</span>
//             <span className="rating-text"><strong>12,000+</strong> happy families</span>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default Navbar;
