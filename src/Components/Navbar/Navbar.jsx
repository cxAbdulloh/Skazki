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

  // useEffect(() => {
  //   const stars = [];
  //   const count = window.innerWidth < 768 ? 35 : 70;

  //   const createStars = () => {
  //     for (let i = 0; i < count; i++) {
  //       const star = document.createElement("div");
  //       star.className = "star";
  //       const size = Math.random() * 3 + 1;
  //       star.style.width = `${size}px`;
  //       star.style.height = `${size}px`;
  //       star.style.left = `${Math.random() * 100}vw`;
  //       star.style.top = `${Math.random() * 100}vh`;
  //       document.body.appendChild(star);
  //       stars.push(star);

  //       gsap.to(star, {
  //         opacity: Math.random() * 0.7 + 0.2,
  //         duration: Math.random() * 2 + 1,
  //         repeat: -1,
  //         yoyo: true,
  //         ease: "sine.inOut",
  //       });

  //       const moveStar = (el) => {
  //         gsap.to(el, {
  //           x: (Math.random() - 0.5) * 120,
  //           y: (Math.random() - 0.5) * 120,
  //           duration: Math.random() * 6 + 4,
  //           ease: "sine.inOut",
  //           onComplete: () => moveStar(el),
  //         });
  //       };
  //       moveStar(star);
  //     }
  //   };

  //   createStars();

  //   const ctx = gsap.context(() => {
  //     gsap.from(".animate-text", {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: "power3.out",
  //     });
  //     gsap.from(imageRef.current, {
  //       x: 100,
  //       opacity: 0,
  //       duration: 1.2,
  //       delay: 0.5,
  //       ease: "power3.out",
  //     });
  //   });

  //   return () => {
  //     ctx.revert();

  //   };
  // }, [lang]);

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <Link to={"/"} className="logo">
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
