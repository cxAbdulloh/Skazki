import React, { useState } from "react";
import "./Testimonials.css";
import { useLanguage } from "../../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const AppleIcons = {
  StarFilled: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="star-icon"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Quote: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      opacity="0.15"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  ),
};

const StarRating = () => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <AppleIcons.StarFilled key={i} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Екатерина",
      text: t("testi_1_text"),
    },
    {
      id: 2,
      name: "Александр",
      text: t("testi_2_text"),
    },
    {
      id: 3,
      name: "Светлана",
      text: t("testi_3_text"),
    },
    { id: 4, name: "Мадина", text: t("testi_4_text") },
    {
      id: 5,
      name: "Жавохир",
      text: t("testi_5_text"),
    },
    {
      id: 6,
      name: "Дилнозa",
      text: t("testi_6_text"),
    },
  ];

  const initialVisible = testimonials.slice(0, 3);
  const hiddenCards = testimonials.slice(3);

  const staggerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const renderCardContent = (item) => (
    <>
      <div className="card-top">
        <StarRating />
      </div>
      <div className="quote-body">
        <p className="testimonial-text">{item.text}</p>
      </div>
      <div className="testimonial-footer">
        <h4>{item.name}</h4>
        <span>{item.role}</span>
      </div>
    </>
  );

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2 className="section-title">{t("testimonials_title")}</h2>
      </div>

      <div className="testimonials-grid">
        {initialVisible.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="testimonial-card"
          >
            {renderCardContent(item)}
          </motion.div>
        ))}

        <AnimatePresence>
          {isExpanded &&
            hiddenCards.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="testimonial-card"
              >
                {renderCardContent(item)}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <motion.button
        className="show-more-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? t("button_tes_tes") : t("button_tes")}
      </motion.button>
    </section>
  );
};

export default Testimonials;
