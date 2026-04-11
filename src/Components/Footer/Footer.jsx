import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <p>&copy; 2026 Fotoskazki Studio. <span>Premium Artwork</span></p>
        <div className="social-icons">
          <a href="https://www.instagram.com/fotoskazki.uz/" target='blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://t.me/fotoskaz_bot" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
