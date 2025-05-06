import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerWidget}>
              <h3>About H1 Healthcare</h3>
              <p>
                A leading provider of healthcare staffing across Australia, offering permanent, contract, and casual workforce solutions.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className={styles.footerWidget}>
              <h3>Quick Links</h3>
              <ul className={styles.quickLinks}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/overview">About Us</Link>
                </li>
                <li>
                  <Link to="/industry/overview">Our Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerWidget}>
              <h3>Our Services</h3>
              <ul className={styles.quickLinks}>
                <li>
                  <Link to="/industry/disability-care">Disability Care</Link>
                </li>
                <li>
                  <Link to="/industry/aged-care">Aged Care</Link>
                </li>
                <li>
                  <Link to="/industry/recruitment-solutions">Recruitment Solutions</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerWidget}>
              <h3>Contact Us</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <FaMapMarkerAlt /> 123 Healthcare Street, Sydney, NSW 2000
                </li>
                <li>
                  <FaPhone /> +61 1234 56789
                </li>
                <li>
                  <FaEnvelope /> info@h1healthcare.com
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.newsletterSection}>
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our latest news and offers</p>
            <form className={styles.newsletterForm}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" required />
              </div>
              <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} H1 Healthcare. All Rights Reserved.</p>
            <div className={styles.footerLinks}>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
