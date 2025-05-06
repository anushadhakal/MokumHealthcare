import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaBars, FaTimes, FaChevronDown, FaAngleRight } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if clicked outside dropdown areas
      const isDropdownClick = event.target.closest(`.${styles.dropdown}`);
      const isMenuClick = event.target.closest(`.${styles.navMenu}`);
      const isToggleClick = event.target.closest(`.${styles.mobileMenuToggle}`);
      
      if (!isDropdownClick && !isToggleClick && activeDropdown) {
        setActiveDropdown(null);
      }
      
      if (!isMenuClick && !isToggleClick && mobileMenuOpen && window.innerWidth <= 992) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown, mobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto:info@h1healthcare.com">
              <FaEnvelope /> info@h1healthcare.com
            </a>
            <a href="tel:+61123456789">
              <FaPhone /> +61 1234 56789
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.mainNav} ${isSticky ? styles.stickyNav : ""}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img src="/placeholder.svg" alt="H1 Healthcare Logo" />
          </Link>

          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ""}`}>
            <ul>
              <li>
                <NavLink to="/" end onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className={styles.dropdown}>
                <div 
                  className={styles.dropdownToggle} 
                  onClick={() => toggleDropdown("about")}
                >
                  About Us <FaChevronDown />
                </div>
                <div className={`${styles.dropdownMenu} ${activeDropdown === "about" ? styles.show : ""}`}>
                  <ul>
                    <li>
                      <NavLink to="/about/overview" onClick={closeMobileMenu}>
                        <FaAngleRight /> Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/why-us" onClick={closeMobileMenu}>
                        <FaAngleRight /> Why Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.dropdown}>
                <div 
                  className={styles.dropdownToggle} 
                  onClick={() => toggleDropdown("industry")}
                >
                  Industry <FaChevronDown />
                </div>
                <div className={`${styles.dropdownMenu} ${activeDropdown === "industry" ? styles.show : ""}`}>
                  <ul>
                    <li>
                      <NavLink to="/industry/overview" onClick={closeMobileMenu}>
                        <FaAngleRight /> Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/industry/disability-care" onClick={closeMobileMenu}>
                        <FaAngleRight /> Disability Care
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/industry/aged-care" onClick={closeMobileMenu}>
                        <FaAngleRight /> Aged Care
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/industry/recruitment-solutions" onClick={closeMobileMenu}>
                        <FaAngleRight /> Recruitment Solutions
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;