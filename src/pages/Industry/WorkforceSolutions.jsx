import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
import { FaUserTie, FaUserCog, FaChartLine, FaLightbulb, FaShieldAlt } from "react-icons/fa"

const WorkforceSolutions = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Healthcare Workforce Solutions"
        subtitle="Comprehensive staffing and workforce management for healthcare providers"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>Strategic Healthcare Workforce Management</h2>
            <p>
              We deliver tailored workforce solutions that help healthcare organizations optimize their staffing 
              models, reduce costs, and improve quality of care. Our comprehensive approach addresses both immediate 
              staffing needs and long-term workforce planning.
            </p>
            <p>
              From temporary staffing and permanent recruitment to workforce optimization and compliance management, 
              our solutions are designed to enhance operational efficiency while ensuring consistent delivery of 
              high-quality care across all healthcare settings.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserTie />
              </div>
              <h3>Permanent Recruitment</h3>
              <p>
                Strategic talent acquisition services to identify, screen, and secure qualified healthcare professionals for long-term positions.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserCog />
              </div>
              <h3>Flexible Staffing Models</h3>
              <p>
                Temporary, contract, and locum staffing solutions to address short-term needs, seasonal demands, and unexpected vacancies.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaChartLine />
              </div>
              <h3>Workforce Analytics</h3>
              <p>
                Data-driven insights to optimize scheduling, predict staffing needs, and enhance workforce efficiency while controlling costs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaLightbulb />
              </div>
              <h3>Workforce Consulting</h3>
              <p>
                Expert guidance on healthcare staffing strategies, retention initiatives, and organizational development to create sustainable workforce solutions.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3>Compliance Management</h3>
              <p>
                Comprehensive credentialing, verification, and compliance monitoring to ensure all staff meet regulatory and organizational requirements.
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
              Mokum Healthcare's workforce solutions have revolutionized our staffing approach. Their comprehensive 
              strategy addressed both our immediate staffing challenges and long-term workforce needs. The analytics 
              platform they implemented has given us unprecedented visibility into our staffing patterns, helping us 
              reduce overtime costs by 23% while improving staff satisfaction scores. Their consultative approach truly 
              set them apart from other staffing providers we've worked with.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to transform your healthcare workforce strategy?</h2>
            <p>
              Contact our workforce solutions team today to discuss how our comprehensive approach can help your 
              organization optimize staffing, reduce costs, and enhance quality of care.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/industry/home-care" className={styles.secondaryBtn}>
                Explore Home Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkforceSolutions