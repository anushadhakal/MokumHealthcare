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
              <h3>About Mokum Healthcare</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet!
              </p>
              <div className={styles.socialLinks}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
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
                  <FaMapMarkerAlt /> Lorem ipsum dolor sit amet.
                </li>
                <li>
                  <FaPhone /> 8888888
                </li>
                <li>
                  <FaEnvelope />  abc@example.com
                </li>
              </ul>
            </div>
          </div>

         
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} Mokum Healthcare. All Rights Reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
