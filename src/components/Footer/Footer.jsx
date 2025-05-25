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
                At Mokum, we believe in staffing with heart and caring with purpose. Our team is committed to delivering compassionate, person-centred care in residential and community settings.
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
                  <Link to="/industry/HomeCare">Home Care</Link>
                </li>
                <li>
                  <Link to="/industry/NDISDisability">NDIS Disability</Link>
                </li>
                <li>
                  <Link to="/industry/WorkforceSolutions">Workforce Solutions</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerWidget}>
              <h3>Contact Us</h3>
              <ul className={styles.contactInfo}>
                <li>
                  <FaMapMarkerAlt /> Sydney, Australia
                </li>
                <li>
                  <FaPhone /> 0478489358
                </li>
                <li>
                  <FaEnvelope />  mokumhealthcare@gmail.com
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p>&copy; {currentYear} Mokum Healthcare. All Rights Reserved. </p>

          </div>
          <p className={styles.footerBottomContent} > Powered By: <a href="https://birtasoft.com" target="_blank" rel="noopener noreferrer">Birta Soft</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
