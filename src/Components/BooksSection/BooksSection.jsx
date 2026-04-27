import React, { useState } from "react";
import "./BooksSection.css";
import { assets } from "../../assets/assets";
import { useLanguage } from "../../LanguageContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SFSymbols = {
  Sparkles: () => (
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
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  Book: () => (
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Frame: () => ( 
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

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
      icon: <SFSymbols.Sparkles />,
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
      icon: <SFSymbols.Book />,
      pages: [
        { id: 1, img: assets.book_2, isCover: true, backImg: assets.des_1 },
        { id: 2, img: assets.photo_6, backImg: assets.des_6 },
        { id: 3, img: assets.photo_7, backImg: assets.des_7 },
        { id: 4, img: assets.photo_8, backImg: assets.des_6 },
        { id: 5, img: assets.photo_9, backImg: assets.des_4 },
      ],
    },
    {
      id: "book3",
      text: t("foto_ramki"),
      summary: t("memory_3"),
      path: "/frames",
      icon: <SFSymbols.Frame />,
      pages: [{ id: 1, img: assets.book_3, isCover: true }],
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

  const switchBook = (index) => {
    if (isSwitching || activeBookIndex === index) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveBookIndex(index);
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
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          </div>

          <div className="book-navigation">
            {currentBook.pages.length > 1 && (
              <>
                <button
                  className="action-button"
                  onClick={handleFlip}
                  disabled={isFlying}
                >
                  {currentPage < totalPages ? t("next_page") : t("restart")}
                </button>

                <button className="books-button-bottom">
                  <Link to={currentBook.path}>{t("about_book")}</Link>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="hhh">
          <div className={`book-text-area ${isHovered ? "text-fade" : ""}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBookIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h1>{currentBook.text}</h1>
                <p className="summary-p">{currentBook.summary}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className={`books-summary-bottom ${isHovered ? "text-fade" : ""}`}>
            {t("other_products_title")}
          </p>

          <div
            className={`book-tab-controller ${isHovered ? "text-fade" : ""}`}
          >
            {booksCollection.map((book, index) => (
              <button
                key={book.id}
                className={`book-tab-btn ${
                  activeBookIndex === index ? "active" : ""
                }`}
                onClick={() => switchBook(index)}
              >
                {book.icon}
                <span>{book.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
