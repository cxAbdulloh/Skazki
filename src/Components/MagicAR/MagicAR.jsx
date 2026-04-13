import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./MagicAR.css";
import { assets } from "../../assets/assets";
import { useLanguage } from "../../LanguageContext";

gsap.registerPlugin(ScrollTrigger, Flip);

const MagicAR = () => {

  const containerRef = useRef(null);
  const { t } = useLanguage();


  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".step-item");

      steps.forEach((step, i) => {
        const isEven = i % 2 !== 0;
        gsap.from(step, {
          opacity: 0,
          x: isEven ? 100 : -100,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".roadmap-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.from(".ar-demo-block", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ar-demo-block",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <section className="roadmap-section" ref={containerRef}>
      <div className="roadmap-header animate-header">
        <h2>{t("how_it_works_second")}</h2>
        <h2 className="section-title">{t("how_it_works")}</h2>
        <div className="title-underline"></div>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-line"></div>

        <div className="step-item">
          <div className="step-icon">01</div>
          <div className="step-content">
            <h3>{t("step_1_title")}</h3>
            <p>{t("step_1_text")}</p>
          </div>
        </div>

        <div className="step-item">
          <div className="step-icon">02</div>
          <div className="step-content">
            <h3>{t("step_2_title")}</h3>
            <p>{t("step_2_text")}</p>
          </div>
        </div>

        <div className="step-item">
          <div className="step-icon">03</div>
          <div className="step-content">
            <h3>{t("step_3_title")}</h3>
            <p>{t("step_3_text")}</p>
          </div>
        </div>
      </div>

      <div className="ar-demo-block">
        <div className="demo-container">
          <div className="qr-side">
            <div className="qr-wrapper">
              <img src={assets.qr_code} alt="QR Code" className="qr-img" />
              <div className="qr-scan-line"></div>
            </div>
            <p
              className="qr-text"
              dangerouslySetInnerHTML={{ __html: t("qr_scan_try") }}
            ></p>
          </div>

          <div className="book-side">
            <p className="book-instruction">{t("book_tap_magic")}</p>
            <div className="book-wrapper">
              <img
                src={assets.photo_5}
                alt=""
                className="book-img"
                data-flip-id="book"
              />
              <div className="book-tap-hint">{t("tap")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicAR;
