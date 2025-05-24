import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaAngleRight,
} from "react-icons/fa";
import styles from "./Navbar.module.css";
import "../../index.css";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto:mokumhealthcare@gmail.com">
              <FaEnvelope /> mokumhealthcare@gmail.com
            </a>
            <a href="tel:+61123456789">
              <FaPhone /> 0478489358
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.mainNav} ${isSticky ? styles.stickyNav : ""}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img src="/placeholder.svg" alt="Mokum Healthcare Logo" />
          </Link>

          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav
            className={`${styles.navMenu} ${
              mobileMenuOpen ? styles.active : ""
            }`}
          >
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.dropdown}>
                <button
                  className={`${styles.dropdownToggle} ${
                    activeDropdown === "about" ? styles.activeDropdown : ""
                  }`}
                  onClick={() => toggleDropdown("about")}
                  aria-expanded={activeDropdown === "about"}
                >
                  About Us <FaChevronDown className={styles.dropdownIcon} />
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    activeDropdown === "about" ? styles.show : ""
                  }`}
                >
                  <ul>
                    <li>
                      <NavLink to="/about/overview" onClick={closeMobileMenu}>
                        <FaAngleRight className={styles.angleIcon} /> Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/why-us" onClick={closeMobileMenu}>
                        <FaAngleRight className={styles.angleIcon} /> Why Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.dropdown}>
                <button
                  className={`${styles.dropdownToggle} ${
                    activeDropdown === "about" ? styles.activeDropdown : ""
                  }`}
                  onClick={() => toggleDropdown("about")}
                  aria-expanded={activeDropdown === "about"}
                >
                  Find a job <FaChevronDown className={styles.dropdownIcon} />
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    activeDropdown === "about" ? styles.show : ""
                  }`}
                >
                  <ul>
                    <li>
                      <NavLink to="/about/overview" onClick={closeMobileMenu}>
                        <FaAngleRight className={styles.angleIcon} /> Support
                        Workers
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.dropdown}>
                <button
                  className={`${styles.dropdownToggle} ${
                    activeDropdown === "industry" ? styles.activeDropdown : ""
                  }`}
                  onClick={() => toggleDropdown("industry")}
                  aria-expanded={activeDropdown === "industry"}
                >
                  Industry <FaChevronDown className={styles.dropdownIcon} />
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    activeDropdown === "industry" ? styles.show : ""
                  }`}
                >
                  <ul>
                    <li>
                      <NavLink
                        to="/industry/HomeCare"
                        onClick={closeMobileMenu}
                      >
                        <FaAngleRight className={styles.angleIcon} /> Home Care
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/industry/NDISDisability"
                        onClick={closeMobileMenu}
                      >
                        <FaAngleRight className={styles.angleIcon} /> NDIS
                        Disability
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/industry/WorkforceSolutions"
                        onClick={closeMobileMenu}
                      >
                        <FaAngleRight className={styles.angleIcon} /> Workforce
                        Solutions
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Navbar;
