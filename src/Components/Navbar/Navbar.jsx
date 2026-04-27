import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useLanguage } from "../../LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle("no-scroll");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "uz", label: "O‘zbekcha" },
    { code: "ru", label: "Русский" },
  ];

  const handleLogoClick = () => {
    setIsNavActive(false);
    document.body.classList.remove("no-scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`apple-nav ${scrolled ? "scrolled" : ""} ${
          isNavActive ? "active" : ""
        }`}
      >
        <div className="nav-content">
          <div className="nav-logo">
            <img src={assets.nav} className="logo-image" />
          </div>

          <ul className={`nav-links ${isNavActive ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={() => setIsNavActive(false)}>
                {t("about_us")}
              </a>
            </li>
            <li>
              <a href="#price" onClick={() => setIsNavActive(false)}>
                {t("nav_price")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsNavActive(false)}>
                {t("collection")}
              </a>
            </li>
            <li className="mobile-only-item">
              <a href="#contact" className="contact-btn mobile-contact-btn">
                {t("nav_contact")}
              </a>
            </li>
          </ul>

          <div className="nav-right-group">
            <div className="nav-right-btn-lang">
              <div className="lang-container">
                <div
                  className={`lang-selected ${isLangOpen ? "active" : ""}`}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <span className="lang-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </span>
                  <span className="lang-text">{lang?.toUpperCase()}</span>
                </div>
                {isLangOpen && (
                  <div className="lang-dropdown">
                    {languages.map((item) => (
                      <div
                        key={item.code}
                        className={`lang-item ${
                          lang === item.code ? "selected" : ""
                        }`}
                        onClick={() => {
                          setLang(item.code);
                          setIsLangOpen(false);
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:+998919767600"
                className="contact-btn desktop-only-contact"
              >
                {t("nav_contact")}
              </a>
              <button className="apple-burger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
