import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
import { FaHandHoldingHeart, FaUsers, FaClipboardCheck, FaHandsHelping, FaChartLine } from "react-icons/fa"

const NDISDisability = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="NDIS Disability Staffing"
        subtitle="Specialized support for NDIS providers and participants"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>NDIS-Aligned Support Services</h2>
            <p>
              We specialize in providing NDIS-ready professionals who understand the unique requirements and 
              goals of the National Disability Insurance Scheme. Our staff are trained to deliver person-centered 
              care that aligns with NDIS principles and participant plans.
            </p>
            <p>
              From support coordination to specialized disability services, our staffing solutions help NDIS 
              providers deliver high-quality support while navigating the complexities of NDIS compliance and 
              funding arrangements.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHandHoldingHeart />
              </div>
              <h3>NDIS-Trained Support Workers</h3>
              <p>
                Qualified professionals with comprehensive understanding of NDIS frameworks, goals, and participant-directed support approaches.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUsers />
              </div>
              <h3>Diverse Support Specialties</h3>
              <p>
                Staff with expertise across various disability types including physical, intellectual, psychosocial, and sensory disabilities.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaClipboardCheck />
              </div>
              <h3>NDIS Compliance Expertise</h3>
              <p>
                Personnel trained in NDIS Quality and Safeguards Commission requirements, documentation standards, and reportable incidents procedures.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaHandsHelping />
              </div>
              <h3>Support Coordination Staff</h3>
              <p>
                Experienced coordinators who can help participants navigate the NDIS system, connect with services, and maximize their plan benefits.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaChartLine />
              </div>
              <h3>Capacity Building Focus</h3>
              <p>
                Staff trained to build participant independence, develop skills, and work toward long-term goals in line with NDIS principles.
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
              Partnering with Mokum Healthcare has transformed our NDIS service delivery. Their staff arrive with 
              a deep understanding of the NDIS framework and genuine commitment to participant goals. This has not only 
              improved our service quality but also streamlined our compliance processes. Their ability to provide 
              qualified staff, even during peak demand periods, has been crucial to supporting our participants effectively.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need NDIS-experienced staff for your organization?</h2>
            <p>
              Contact us today to discuss how our specialized NDIS staffing solutions can help you deliver 
              exceptional support services while meeting all compliance requirements.
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

export default NDISDisability