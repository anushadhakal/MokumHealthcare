import { FaUserNurse, FaHandshake, FaBriefcase } from "react-icons/fa"
import HeroSection from "../../components/HeroSection/HeroSection"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import IndustryCard from "../../components/IndustryCard/IndustryCard"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"
import styles from "./Home.module.css"
import { FaUserMd, FaAccessibleIcon, FaHouseUser } from "react-icons/fa";

// import heroImage from "../../assets/images/hero-bg.jpg"
// import disabilityCareImage from "../../assets/images/disability-care.jpg"
// import agedCareImage from "../../assets/images/aged-care.jpg"

const Home = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title={<>Mokum Health Care
          <p>Staffing with Heart. Care with Purpose</p></>}
        subtitle={<>We provide qualified nurses and disability support professionals for residential, and community settings
          Trusted. Compassionate. Person-centred.<br /><br />

          Your kindness is contagious.</>}
        buttonText="Learn More"
        buttonLink="/about/overview"
      />

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Comprehensive healthcare staffing solutions tailored to your needs</p>

          <div className={styles.servicesGrid}>
            <ServiceCard
              icon={< FaUserMd />}
              title="Workforce Solutions"
              description="24/7 casual workforce available to meet your immediate and ongoing staffing needs across healthcare sectors."
              link="/industry/overview"
              linkText="Learn More"
            />
            <ServiceCard
              icon={<FaAccessibleIcon />}
              title="NDIS and Disability"
              description="Tailored hiring options including RPO and contract staffing to find the perfect healthcare professionals for your organization."
              link="/industry/recruitment-solutions"
              linkText="Learn More"
            />
            <ServiceCard
              icon={<FaHouseUser />}
              title="Home Care"
              description="24/7 casual workforce available to meet your immediate and ongoing staffing needs across healthcare sectors."
              link="/industry/overview"
              linkText="Learn More"
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
              title="Home Care & NDIS Disabilities"
              description="Supporting independence with compassionate, in-home NDIS services.
Tailored care that empowers choice, dignity, and quality of life."
              link="/industry/disability-care"
            />
            <IndustryCard
              image="https://placehold.co/600x400"
              title="Our Workforce Solutions"
              description={<><p>We connect organisations with qualified and
                compassionate healthcare professionals, offering: </p>
                <p>
                  Temporary and permanent staffing across
                  nursing, disability, and aged care sectors. <br />

                  Rapid placement for urgent shift coverage and
                  continuity of care. <br />

                  Customised workforce planning to suit your
                  service model, budget, and client needs. <br />

                  Dedicated clinical support for both our staff
                  and your teams</p></>}
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
