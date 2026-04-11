import React, { useState } from "react";
import "./BooksSection.css";
import { assets } from "../../assets/assets";
import { useLanguage } from "../../LanguageContext";

const BooksSection = () => {
  const { t } = useLanguage();
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const booksCollection = [
    {
      id: "book1",
      pages: [
        {
          id: 1,

          img: assets.book,
          isCover: true,
          backImg: assets.des_1,
        },
        {
          id: 2,

          img: assets.photo_1,
          backImg: assets.des_1,
        },
        {
          id: 3,

          img: assets.photo_2,
          backImg: assets.des_2,
        },
        {
          id: 4,

          img: assets.photo_3,
          backImg: assets.des_3,
        },
        {
          id: 5,

          img: assets.photo_4,
          backImg: assets.des_4,
          backTitle: "The End",
        },
      ],
    },
  ];

  const resetBook = () => {
    setCurrentPage(0);
  };

  const currentBook = booksCollection[activeBookIndex];
  const totalPages = currentBook.pages.length;

  const handleFlip = () => {
    if (currentPage < totalPages && !isFlying) {
      setIsFlying(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => setIsFlying(false), 1200);
    }
  };

  const nextBook = () => {
    if (isSwitching || booksCollection.length < 2) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveBookIndex((prev) => (prev + 1) % booksCollection.length);
      setCurrentPage(0);
      setIsSwitching(false);
    }, 600);
  };

  return (
    <section className="books-section-wrapper">
      <div className="container-premium">
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
                  <div className="bookmark-glow"></div>
                </div>
              ))}
            </div>

            {currentBook.pages.map((page, index) => (
              <div
                key={`${currentBook.id}-${page.id}`}
                className={`book-leaf ${
                  index < currentPage ? "is-flipped" : ""
                } ${index === currentPage ? "active-leaf" : ""}`}
                style={{ zIndex: totalPages - index }}
                onClick={handleFlip}
              >
                {/* O'NG TOMON */}
                <div className="leaf-side front">
                  {page.isCover ? (
                    <div className="book-cover-wrapper">
                      <img
                        src={page.img}
                        alt="Cover"
                        className="main-cover-img"
                      />
                      <div className="spine-shadow"></div>
                    </div>
                  ) : (
                    <div className="inner-page-design">
                      <div className="page-text-overlay">
                        <h3>{page.chapter}</h3>
                        <p className="page-mini-desc">{page.title}</p>
                      </div>
                      <img
                        src={page.img}
                        alt={page.title}
                        className="page-full-photo"
                      />
                      <div className="page-shadow-overlay-right"></div>
                    </div>
                  )}
                </div>

                {/* CHAP TOMON (Telefonda yashiriladi) */}
                <div className="leaf-side back">
                  <div className="inner-page-design">
                    <img
                      src={page.backImg || assets.photo_1}
                      alt="back"
                      className="page-full-photo"
                    />
                    <div className="page-shadow-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="book-navigation">
            {currentPage < totalPages ? (
              <>
                <button
                  className="action-button"
                  onClick={handleFlip}
                  disabled={isFlying}
                >
                  {t("next_page")}
                </button>
                <button
                  className="action-button next-book-btn"
                  onClick={nextBook}
                >
                  Скоро...
                </button>
              </>
            ) : (
              <button className="action-button reset-btn" onClick={resetBook}>
                {t("restart")}
              </button>
            )}
          </div>
        </div>

        <div className={`book-text-area ${isHovered ? "text-fade" : ""}`}>
          <h1>
            fotoskazki<span className="book-span">.</span>
          </h1>
          <p className="summary-p">{t("books_summary")}</p>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
