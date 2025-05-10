"use client"

import { useState } from "react"
import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Contact.module.css"
// import contactHeroImage from "../../assets/images/contact-hero.jpg"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission, such as sending the data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your healthcare staffing needs"
      />

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>
                We're here to answer any questions you have about our healthcare staffing services. Reach out to us and
                we'll respond as soon as we can.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Our Location</h3>
                    <p>Sydney, Australia</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaPhone />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Phone Number</h3>
                    <p>88888888</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Email Address</h3>
                    <p>abc@example.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaClock />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                    <p>24/7 Emergency Staffing Support Available</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26512.19357862248!2d151.20000000000002!3d-33.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mokum Healthcare Location"
        ></iframe>
      </section> */}

     
    </main>
  )
}

export default Contact
