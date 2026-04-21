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

  const fadeInVariant = {
    hidden: { opacity: 0, x: -100 },
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
        { id: 4, img: assets.photo_4, backImg: assets.des_4 },
      ],
    },
    {
      id: "book1",
      text: t("text"),
      summary: t("diary_summary"),
      path: "/memory",
      isComingSoon: false,
      pages: [{ id: 1, img: assets.book, isCover: true }],
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

    // Odatiy varaqlash
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
                key={`${currentBook.id}-${page.id}`}
                className={`book-leaf ${
                  index < currentPage ? "is-flipped" : ""
                } ${index === currentPage ? "active-leaf" : ""}`}
                style={{ zIndex: totalPages - index }}
                onClick={handleFlip}
              >
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
                      <img
                        src={page.img}
                        alt="page"
                        className="page-full-photo"
                      />
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
          {/* <div
            className={`books-button-container ${isHovered ? "text-fade" : ""}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

          >
            <button variants={itemVariants} className="books-button"> 
              O'zbekcha
            </button>
            <button variants={itemVariants} className="books-button">
              Русский
            </button>
            <button variants={itemVariants} className="books-button">
              English
            </button>
          </div>   */}
          {/* <button className={`books-button-bottom ${isHovered ? "text-fade" : ""}`}><Link to={"/collection"}>{t("about_book")}</Link></button> */}
          <button
            className={`books-button-bottom ${isHovered ? "text-fade" : ""}`}
          >
            {/* Bu yerda statik "/collection" o'rniga dinamik currentBook.path ishlatamiz */}
            <Link to={currentBook.path}>{t("about_book")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
