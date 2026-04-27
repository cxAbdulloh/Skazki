import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="footer-blur-bg"></div>
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright-text">
            &copy; 2026 <span className="brand-name">Fotoskazki Studio</span>
          </p>
          <span className="premium-badge">Premium Artwork</span>
        </div>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/fotoskazki.uz/"
            target="_blank"
            rel="noreferrer"
            className="social-link insta"
            aria-label="Instagram"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://t.me/fotoskaz_bot"
            target="_blank"
            rel="noreferrer"
            className="social-link tg"
            aria-label="Telegram"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
