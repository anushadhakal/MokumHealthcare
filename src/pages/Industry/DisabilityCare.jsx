import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
// import disabilityHeroImage from "../../assets/images/disability-hero.jpg"
import { FaUserNurse, FaHandHoldingHeart, FaCalendarCheck, FaShieldAlt, FaUserFriends } from "react-icons/fa"

const DisabilityCare = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Disability Care Staffing"
        subtitle="Qualified support staff for the disability sector"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>Supporting the Disability Sector</h2>
            <p>
              At H1 Healthcare, we understand the unique challenges faced by disability service providers in finding
              qualified, compassionate, and reliable staff. Our disability care staffing solutions are designed to
              provide immediate access to skilled professionals who can deliver high-quality care and support to
              individuals with disabilities.
            </p>
            <p>
              We are committed to enhancing the quality of life for individuals with disabilities by connecting them
              with support workers and healthcare professionals who are not only technically skilled but also deeply
              committed to person-centered care and the principles of dignity, respect, and independence.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserNurse />
              </div>
              <h3>NDIS-Registered Support Workers</h3>
              <p>
                Our support workers are NDIS-registered, thoroughly screened, and trained to provide high-quality care
                and support to individuals with disabilities.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHandHoldingHeart />
              </div>
              <h3>Person-Centered Approach</h3>
              <p>
                We match support workers who are committed to person-centered care, respecting individual choices,
                preferences, and goals.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCalendarCheck />
              </div>
              <h3>Flexible Staffing Options</h3>
              <p>
                From casual shifts to permanent placements, we offer flexible staffing solutions to meet the diverse
                needs of disability service providers.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3>Compliance and Safety</h3>
              <p>
                All our disability support workers have current police checks, working with children checks, and
                relevant certifications.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserFriends />
              </div>
              <h3>Specialized Expertise</h3>
              <p>
                We provide support workers with specialized skills and experience in various areas, including
                intellectual disabilities, physical disabilities, and complex care needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.rolesSection}`}>
        <div className="container">
          <h2 className="section-title">Disability Support Roles We Fill</h2>
          <p className="section-subtitle">Comprehensive staffing solutions for the disability sector</p>

          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <h3>Support Workers</h3>
              <ul>
                <li>Personal care assistance</li>
                <li>Community access support</li>
                <li>In-home support</li>
                <li>Respite care</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Specialized Disability Nurses</h3>
              <ul>
                <li>Complex care management</li>
                <li>Medication administration</li>
                <li>Health monitoring</li>
                <li>Clinical support</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Allied Health Professionals</h3>
              <ul>
                <li>Occupational therapists</li>
                <li>Physiotherapists</li>
                <li>Speech pathologists</li>
                <li>Behavioral therapists</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Support Coordinators</h3>
              <ul>
                <li>NDIS plan implementation</li>
                <li>Service coordination</li>
                <li>Goal setting and monitoring</li>
                <li>Advocacy and liaison</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonialSection}`}>
        <div className="container">
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>
              H1 Healthcare has been instrumental in helping us maintain high-quality care standards for our clients.
              Their disability support workers are not only skilled but also genuinely passionate about making a
              positive difference in the lives of people with disabilities. Their understanding of the NDIS and
              disability sector is exceptional.
            </p>
            <div className={styles.authorInfo}>
              <h4>David Wilson</h4>
              <p>Operations Manager, Inclusive Support Services</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need qualified disability support staff?</h2>
            <p>
              Contact our team today to discuss your disability staffing needs and discover how our specialized services
              can benefit your organization and the individuals you support.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/industry/aged-care" className={styles.secondaryBtn}>
                Explore Aged Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DisabilityCare
