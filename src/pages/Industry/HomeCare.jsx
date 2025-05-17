import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
import { FaHome, FaHeartbeat, FaUtensils, FaClock, FaBriefcaseMedical } from "react-icons/fa"

const HomeCare = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Home Care Staffing"
        subtitle="Compassionate in-home support for independent living"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>Excellence in Home Care Services</h2>
            <p>
              We provide reliable and compassionate home care professionals who are dedicated to helping clients 
              maintain their independence and quality of life in the comfort of their own homes. Our carefully 
              selected staff bring both expertise and empathy to every assignment.
            </p>
            <p>
              From personal care and companionship to specialized medical support, our home care staffing solutions 
              are tailored to meet each client's unique needs while ensuring the highest standards of care and safety.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHome />
              </div>
              <h3>Personal Care Assistance</h3>
              <p>
                Professional support with daily activities including bathing, dressing, medication reminders, and mobility assistance.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHeartbeat />
              </div>
              <h3>Health Monitoring</h3>
              <p>
                Regular health checks, vital signs monitoring, and coordination with healthcare providers for consistent care.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUtensils />
              </div>
              <h3>Household Support</h3>
              <p>
                Assistance with meal preparation, light housekeeping, laundry, and maintaining a safe living environment.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaClock />
              </div>
              <h3>Flexible Care Schedules</h3>
              <p>
                Customized care plans from a few hours per week to 24/7 support, adapting to changing needs and circumstances.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaBriefcaseMedical />
              </div>
              <h3>Specialized Care</h3>
              <p>
                Tailored services for clients with dementia, Parkinson's, post-surgery recovery, and other specific health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonialSection}`}>
        <div className="container">
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>
              Mokum Healthcare has transformed how we deliver home care services. Their staff are not just 
              professionally excellent but genuinely care about our clients' wellbeing. The peace of mind 
              we've gained knowing our clients are in capable, compassionate hands is invaluable. Their flexible 
              staffing solutions have helped us meet increasing demand without compromising on quality.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Looking for dependable home care staff?</h2>
            <p>
              Reach out today to discuss your home care staffing requirements and discover how our dedicated 
              professionals can help your clients maintain independence and dignity at home.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/industry/disability-care" className={styles.secondaryBtn}>
                Explore Disability Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeCare