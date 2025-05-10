import { Link } from "react-router-dom"
import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
// import industryHeroImage from "../../assets/images/industry-hero.jpg"
// import disabilityCareImage from "../../assets/images/disability-care.jpg"
// import agedCareImage from "../../assets/images/aged-care.jpg"
// import recruitmentImage from "../../assets/images/recruitment.jpg"

const IndustryOverview = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Our Industry Services"
        subtitle="Comprehensive healthcare staffing solutions across multiple sectors"
      />

      <section className={`section ${styles.overviewSection}`}>
        <div className="container">
          <div className={styles.overviewContent}>
            <h2>Healthcare Staffing Excellence</h2>
            <p>
              At Mokum Healthcare, we understand that different healthcare sectors have unique staffing requirements and
              challenges. That's why we've developed specialized services tailored to the specific needs of disability
              care, aged care, and healthcare recruitment.
            </p>
            <p>
              Our deep industry knowledge, extensive network of qualified professionals, and commitment to excellence
              enable us to provide staffing solutions that enhance care quality, improve operational efficiency, and
              support better health outcomes across all sectors we serve.
            </p>
          </div>

          <div className={styles.industryCards}>
            <div className={styles.industryCard}>
              <div className={styles.cardImage}>
                <img src="https://placehold.co/600x400" alt="Disability Care" />
              </div>
              <div className={styles.cardContent}>
                <h3>Disability Care</h3>
                <p>
                  Qualified support staff for the disability sector, providing compassionate and professional care to
                  enhance quality of life for individuals with disabilities.
                </p>
                <ul className={styles.servicesList}>
                  <li>NDIS-registered support workers</li>
                  <li>Specialized disability nurses</li>
                  <li>Allied health professionals</li>
                  <li>Support coordinators</li>
                </ul>
                <Link to="/industry/disability-care" className={styles.readMoreLink}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className={styles.industryCard}>
              <div className={styles.cardImage}>
                <img src="https://placehold.co/600x400" alt="Aged Care" />
              </div>
              <div className={styles.cardContent}>
                <h3>Aged Care</h3>
                <p>
                  Immediate access to high-quality aged care nurses and support workers, ensuring dignified and
                  personalized care for seniors in various settings.
                </p>
                <ul className={styles.servicesList}>
                  <li>Registered nurses</li>
                  <li>Enrolled nurses</li>
                  <li>Personal care assistants</li>
                  <li>Lifestyle coordinators</li>
                </ul>
                <Link to="/industry/aged-care" className={styles.readMoreLink}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className={styles.industryCard}>
              <div className={styles.cardImage}>
                <img src="https://placehold.co/600x400" alt="Recruitment Solutions" />
              </div>
              <div className={styles.cardContent}>
                <h3>Recruitment Solutions</h3>
                <p>
                  Comprehensive recruitment services designed to find the perfect healthcare professionals for
                  permanent, contract, and casual positions.
                </p>
                <ul className={styles.servicesList}>
                  <li>Permanent placement</li>
                  <li>Contract staffing</li>
                  <li>Recruitment process outsourcing (RPO)</li>
                  <li>Executive search</li>
                </ul>
                <Link to="/industry/recruitment-solutions" className={styles.readMoreLink}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">Our Staffing Process</h2>
          <p className="section-subtitle">How we ensure the right healthcare professionals for your needs</p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Needs Assessment</h3>
              <p>
                We begin by thoroughly understanding your specific staffing requirements, organizational culture, and
                the unique challenges you face.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Candidate Selection</h3>
              <p>
                Our team identifies qualified healthcare professionals from our extensive network who match your
                specific requirements.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Rigorous Screening</h3>
              <p>
                Candidates undergo comprehensive screening, including qualification verification, reference checks, and
                interviews.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Perfect Matching</h3>
              <p>
                We carefully match healthcare professionals based on skills, experience, personality, work style, and
                cultural fit.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Ongoing Support</h3>
              <p>
                Our relationship doesn't end with placement. We provide continuous support to ensure successful
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Find the perfect healthcare staffing solution for your organization</h2>
            <p>
              Contact our team today to discuss your specific needs and discover how our specialized industry services
              can benefit your organization.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/about/why-us" className={styles.secondaryBtn}>
                Why Choose Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndustryOverview
