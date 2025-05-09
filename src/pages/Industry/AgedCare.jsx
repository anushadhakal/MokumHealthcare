import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
// import agedCareHeroImage from "../../assets/images/aged-care-hero.jpg"
import { FaUserNurse, FaHeartbeat, FaCalendarCheck, FaShieldAlt, FaUserFriends } from "react-icons/fa"

const AgedCare = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Aged Care Staffing"
        subtitle="Immediate access to high-quality aged care nurses and support workers"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>Excellence in Aged Care Staffing</h2>
            <p>
              H1 Healthcare is committed to supporting aged care providers with high-quality staffing solutions that
              enhance the quality of care for seniors. We understand the unique challenges faced by the aged care sector
              and provide immediate access to skilled nurses and support workers who are experienced in delivering
              compassionate, dignified care to older Australians.
            </p>
            <p>
              Our aged care professionals are carefully selected for their technical skills, experience, and their
              genuine commitment to person-centered care that respects the dignity, independence, and individual
              preferences of each senior they support.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserNurse />
              </div>
              <h3>Qualified Aged Care Staff</h3>
              <p>
                Our aged care professionals have relevant qualifications, experience, and a genuine passion for working
                with seniors.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHeartbeat />
              </div>
              <h3>Person-Centered Care</h3>
              <p>
                We match staff who are committed to person-centered care, respecting individual dignity, choices, and
                independence.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCalendarCheck />
              </div>
              <h3>Flexible Staffing Solutions</h3>
              <p>
                From emergency cover to long-term placements, we offer flexible staffing options to meet your specific
                needs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3>Compliance and Safety</h3>
              <p>
                All our aged care staff have current police checks, relevant certifications, and undergo regular
                training updates.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserFriends />
              </div>
              <h3>Specialized Expertise</h3>
              <p>We provide staff with specialized skills in dementia care, palliative care, and complex care needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.rolesSection}`}>
        <div className="container">
          <h2 className="section-title">Aged Care Roles We Fill</h2>
          <p className="section-subtitle">Comprehensive staffing solutions for the aged care sector</p>

          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <h3>Registered Nurses</h3>
              <ul>
                <li>Clinical care management</li>
                <li>Medication administration</li>
                <li>Wound care</li>
                <li>Health assessments</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Enrolled Nurses</h3>
              <ul>
                <li>Medication administration</li>
                <li>Basic clinical care</li>
                <li>Resident monitoring</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Personal Care Assistants</h3>
              <ul>
                <li>Personal hygiene assistance</li>
                <li>Mobility support</li>
                <li>Meal assistance</li>
                <li>Social engagement</li>
              </ul>
            </div>
            <div className={styles.roleCard}>
              <h3>Lifestyle Coordinators</h3>
              <ul>
                <li>Activity planning</li>
                <li>Social engagement programs</li>
                <li>Community outings</li>
                <li>Individual interests support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need qualified aged care staff?</h2>
            <p>
              Contact our team today to discuss your aged care staffing needs and discover how our specialized services
              can benefit your organization and the seniors you care for.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/industry/recruitment-solutions" className={styles.secondaryBtn}>
                Explore Recruitment
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AgedCare
