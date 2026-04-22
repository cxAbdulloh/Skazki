import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import "./Fairy.css";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { assets } from "../assets/assets";

const Fairy = () => {
  const { t } = useLanguage();
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
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



  const booksCollection = [
    {
      id: "book1",
      text: t("main_title"),
      path: "/fairy",
      summary: t("books_summary"),
      isComingSoon: false,
      pages: [
        { id: 1, img: assets.book, isCover: true, backImg: assets.des_1 },
        { id: 2, img: assets.photo_1, backImg: assets.des_1 },
        { id: 3, img: assets.photo_2, backImg: assets.des_2 },
        { id: 4, img: assets.photo_3, backImg: assets.des_3 },
        { id: 5, img: assets.photo_4, backImg: assets.des_4 },
      ],
    },
  ];

  const currentBook = booksCollection[activeBookIndex];
  const totalPages = currentBook.pages.length;

  const handleFlip = () => {
    if (isFlying) return;
    if (currentPage >= totalPages) {
      setIsFlying(true);
      setCurrentPage(0);
      setTimeout(() => setIsFlying(false), 1200);
      return;
    }
    setIsFlying(true);
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => setIsFlying(false), 1200);
  };

  const nextBook = () => {
    if (isSwitching) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveBookIndex((prev) => (prev + 1) % booksCollection.length);
      setCurrentPage(0);
      setIsSwitching(false);
    }, 600);
  };


  const [openIndices, setOpenIndices] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index) 
          : [...prevIndices, index] 
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



      <div className="container-premium-book">
        <div
          className={`book-visual-area ${isHovered ? "book-focus" : ""} ${
            isSwitching ? "book-switching" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="book-3d-canvas">
            <div className="book-bookmarks-container">
              {["uz", "ru", "en"].map((l) => (
                <div key={l} className={`magic-bookmark ${l}`}>
                  <span className="bookmark-text">{l.toUpperCase()}</span>
                </div>
              ))}
            </div>

            {currentBook.pages.map((page, index) => (
              <div
                key={`${currentBook.id}-${page.id}-${index}`}
                className={`book-leaf ${
                  index < currentPage ? "is-flipped" : ""
                } ${index === currentPage ? "active-leaf" : ""}`}
                style={{ zIndex: totalPages - index }}
                onClick={handleFlip}
              >
                <div className="leaf-side front">
                  {page.isCover ? (
                    <div className="book-cover-wrapper">
                      <img src={page.img} alt="Cover" className="main-cover-img" />
                      <div className="spine-shadow"></div>
                    </div>
                  ) : (
                    <div className="inner-page-design">
                      <img src={page.img} alt="page" className="page-full-photo" />
                    </div>
                  )}
                </div>
                <div className="leaf-side back">
                  <div className="inner-page-design">
                    <img
                      src={page.backImg || assets.photo_1}
                      alt="back"
                      className="page-full-photo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="book-navigation">
            <button
              className="action-button"
              onClick={handleFlip}
              disabled={isFlying}
              style={{ display: activeBookIndex === 1 ? "none" : "block" }} 
            >
              {currentPage < totalPages ? t("next_page") : t("restart")}
            </button>
            {/* <button className="action-button next-book-btn" onClick={nextBook}>
              {t("soon")}
            </button> */}
          </div>
        </div>

        <div className="hhh">
          <div className={`book-text-area ${isHovered ? "text-fade" : ""}`}>
            <h1>
              {currentBook.text}
              <span className="book-span"></span>
            </h1>
            <p className="summary-p">{currentBook.summary}</p>
          </div>
          <p className={`books-summary-bottom ${isHovered ? "text-fade" : ""}`}>
            {t("bottom_text")}
          </p>
          {/* <button className={`books-button-bottom ${isHovered ? "text-fade" : ""}`}>
            <Link to={currentBook.path}>{t("about_book")}</Link>
          </button> */}
        </div>
      </div>




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
            <h1 className="books-main-title">{t("main_title")}</h1>
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
                    <h2>{t(`second_title_${item}`)}</h2>
                    <span className="accordion-icon">
                      {openIndices.includes(item) ? "−" : "+"}
                    </span>
                  </div>

                  <div className="accordion-content">
                    <p className="description">{t(`second_desc_${item}`)}</p>
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
                <span>+998919767600</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Fairy;
