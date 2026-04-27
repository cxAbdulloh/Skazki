import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import "./Collection.css";
import { assets } from "../assets/assets";

const Collection = () => {
  const { t } = useLanguage();
  const [activeBookIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [openIndices, setOpenIndices] = useState([]);


  const toggleAccordion = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const booksCollection = [
    {
      id: "book2",
      text: t("text"),
      summary: t("diary_summary"),
      path: "/memory",
      isComingSoon: false,
      pages: [{ id: 1, img: assets.book_2, isCover: true }],
    },
  ];

  const currentBook = booksCollection[activeBookIndex];
  const totalPages = currentBook.pages.length;

  return (
    <div className="page-wrapper">
      <div className="container-premium-book">
        <div
          className={`book-visual-area ${isHovered ? "book-focus" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="book-3d-canvas">
            {currentBook.pages.map((page, index) => (
              <div
                key={`${currentBook.id}-${page.id}-${index}`}
                className={`book-leaf ${index < currentPage ? "is-flipped" : ""} ${
                  index === currentPage ? "active-leaf" : ""
                }`}
                style={{ zIndex: totalPages - index }}
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
        </div>

        <div className="qr-side-side">
          <div className="qr-wrapper-container">
            <img src={assets.qr_code} alt="QR Code" className="qr-img" />
            <div className="qr-scan-line-line"></div>
          </div>
          <div className="qr-info-content">
            <p className="qr-description">
              К каждой книжке вы получаете <strong>одно видео к сказке</strong>,
              которое работает по QR-коду.
            </p>
            <p className="qr-sub-description">
              Дополнительно можно заказать оживление хоть всех страниц подряд!
            </p>
          </div>
        </div>
      </div>

      <div className="books-layout-container">
        <div className="column books-text-column">
          <div className="books-text-content">
            <h1 className="books-main-title">{t("text")}</h1>
          </div>
          
          <div className="legacy-section">
            <div className="accordion-container">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className={`accordion-item ${openIndices.includes(item) ? "active" : ""}`}
                  key={item}
                  onClick={() => toggleAccordion(item)}
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
              <a href="https://t.me/fotoskaz_bot" target="_blank" rel="noreferrer">
                {t("delevery")}
              </a>
            </button>
            <button className="second-accordion-button">
              <a href="tel:+998919767600" className="phone">
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+998919767600</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;