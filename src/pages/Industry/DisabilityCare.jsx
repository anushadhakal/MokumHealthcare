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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis deserunt minus, ipsa enim suscipit aliquid facere vero distinctio maxime voluptatum magnam possimus, sequi modi, commodi corrupti sed. Blanditiis, dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit veritatis omnis velit deleniti aspernatur quam! Minus excepturi neque, assumenda voluptate voluptas doloribus nulla perferendis provident, nihil magnam ullam repellat?
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserNurse />
              </div>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloremque.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHandHoldingHeart />
              </div>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCalendarCheck />
              </div>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, consequatur.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et vitae amet asperiores hic beatae. Quam.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserFriends />
              </div>
              <h3>Lorem, ipsum.</h3>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus sint saepe necessitatibus rem reiciendis.
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
              H1 Healthcare has been instrumental in helping us maintain high-quality care standards for our clients.
              Their disability support workers are not only skilled but also genuinely passionate about making a
              positive difference in the lives of people with disabilities. Their understanding of the NDIS and
              disability sector is exceptional.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need qualified disability support staff?</h2>
            <p>
              Contact our team today to discuss y our disability staffing needs and discover how our specialized services
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
