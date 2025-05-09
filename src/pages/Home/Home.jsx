import { FaUserNurse, FaHandshake, FaBriefcase } from "react-icons/fa"
import HeroSection from "../../components/HeroSection/HeroSection"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import IndustryCard from "../../components/IndustryCard/IndustryCard"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"
import styles from "./Home.module.css"
// import heroImage from "../../assets/images/hero-bg.jpg"
// import disabilityCareImage from "../../assets/images/disability-care.jpg"
// import agedCareImage from "../../assets/images/aged-care.jpg"

const Home = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="lorem ipsum dolor sit amet"
        subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn More"
        buttonLink="/about/overview"
      />

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Comprehensive healthcare staffing solutions tailored to your needs</p>

          <div className={styles.servicesGrid}>
            <ServiceCard
              icon={<FaUserNurse />}
              title="Staffing "
              description="24/7 casual workforce available to meet your immediate and ongoing staffing needs across healthcare sectors."
              link="/industry/overview"
              linkText="Learn More"
            />
            <ServiceCard
              icon={<FaHandshake />}
              title="Recruitment"
              description="Tailored hiring options including RPO and contract staffing to find the perfect healthcare professionals for your organization."
              link="/industry/recruitment-solutions"
              linkText="Learn More"
            />
            <ServiceCard
              icon={<FaBriefcase />}
              title="We're Hiring"
              description="Join our team as Agency, Contract, or Permanent staff and build your career with a leading healthcare provider."
              link="/careers"
              linkText="Apply Now"
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.industrySection}`}>
        <div className="container">
          <h2 className="section-title">Industry Services</h2>
          <p className="section-subtitle">Specialized healthcare solutions for different sectors</p>

          <div className={styles.industryCards}>
            <IndustryCard
              image="https://placehold.co/600x400"
              title="lorem ipsum dolor sit amet"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="/industry/disability-care"
            />
            <IndustryCard
              image="https://placehold.co/600x400"
              title="lorem ipsum dolor sit amet"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="/industry/aged-care"
              isReversed={true}
            />
          </div>
        </div>
      </section>

      <WhyUsSection />

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to find the perfect healthcare staffing solution?</h2>
            <p>Contact our team today to discuss how we can meet your healthcare staffing needs.</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/about/overview" className={styles.secondaryBtn}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
