import React, { useState } from "react";
import "./BooksSection.css";
import { assets } from "../../assets/assets";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";

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

  return (
    <section className="books-section-wrapper">
      <div className="section-header">
        <h2 className="main-title-h1">{t("our_collections_title")}</h2>
        <div className="title-underline"></div>
      </div>

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
              style={{ display: activeBookIndex === 1 ? "none" : "block" }} // IKINCHI KITOBDA DISPLAY NONE
            >
              {currentPage < totalPages ? t("next_page") : t("restart")}
            </button>
            <button className="action-button next-book-btn" onClick={nextBook}>
              {t("soon")}
            </button>
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
          <button className={`books-button-bottom ${isHovered ? "text-fade" : ""}`}>
            <Link to={currentBook.path}>{t("about_book")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;