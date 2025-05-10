import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./Industry.module.css"
// import recruitmentHeroImage from "../../assets/images/recruitment-hero.jpg"
import { FaSearch, FaUserCheck, FaCogs, FaUserTie, FaChartLine } from "react-icons/fa"

const RecruitmentSolutions = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Healthcare Recruitment Solutions"
        subtitle="Finding the perfect healthcare professionals for your organization"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className={`section ${styles.serviceSection}`}>
        <div className="container">
          <div className={styles.serviceContent}>
            <h2>Comprehensive Healthcare Recruitment</h2>
            <p>
              Mokum Healthcare offers specialized recruitment solutions designed to find the perfect healthcare
              professionals for your organization. We understand the unique challenges of healthcare recruitment and
              have developed a comprehensive approach that goes beyond simply filling vacancies.
            </p>
            <p>
              Our recruitment team combines deep industry knowledge, extensive networks, and a thorough understanding of
              healthcare roles to identify candidates who not only have the right qualifications and experience but also
              align with your organizational culture and values.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaSearch />
              </div>
              <h3>Targeted Talent Acquisition</h3>
              <p>
                We use specialized healthcare recruitment strategies to identify and attract high-quality candidates
                from our extensive networks.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserCheck />
              </div>
              <h3>Rigorous Screening Process</h3>
              <p>
                Our comprehensive screening includes qualification verification, reference checks, and in-depth
                interviews to ensure candidates meet our high standards.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaCogs />
              </div>
              <h3>Tailored Recruitment Solutions</h3>
              <p>
                We offer customized recruitment services to meet your specific needs, from single placements to complete
                recruitment process outsourcing.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaUserTie />
              </div>
              <h3>Cultural Fit Assessment</h3>
              <p>
                We go beyond skills and experience to ensure candidates align with your organizational culture, values,
                and work environment.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FaChartLine />
              </div>
              <h3>Market Insights</h3>
              <p>
                Our team provides valuable insights on healthcare recruitment trends, salary benchmarks, and candidate
                availability to inform your hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.solutionsSection}`}>
        <div className="container">
          <h2 className="section-title">Our Recruitment Solutions</h2>
          <p className="section-subtitle">Flexible options to meet your healthcare recruitment needs</p>

          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <h3>Permanent Placement</h3>
              <p>
                Our end-to-end permanent recruitment service identifies and secures the best healthcare professionals
                for your long-term staffing needs. We handle everything from candidate sourcing and screening to
                interview coordination and offer management.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Contract Staffing</h3>
              <p>
                Our contract staffing solutions provide qualified healthcare professionals for fixed-term assignments,
                offering flexibility to manage fluctuating workloads, special projects, or temporary vacancies while
                maintaining high-quality care standards.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Recruitment Process Outsourcing (RPO)</h3>
              <p>
                Our RPO service provides a comprehensive recruitment solution where we act as an extension of your HR
                team, managing the entire recruitment process from job analysis and advertising to candidate selection
                and onboarding.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Executive Search</h3>
              <p>
                Our specialized executive search service identifies and secures top-tier leadership talent for senior
                healthcare positions. We use a targeted approach to find executives who can drive your organization's
                strategic objectives and enhance operational performance.
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
              Mokum Healthcare's recruitment team has been instrumental in helping us build a strong clinical team. Their
              understanding of our organizational culture and the specific skills we need has resulted in consistently
              high-quality placements. Their thorough screening process and attention to detail have saved us
              significant time and resources in our hiring process.
            </p>
            <div className={styles.authorInfo}>
              <h4>Jennifer Roberts</h4>
              <p>HR Director, Metropolitan Healthcare Group</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to transform your healthcare recruitment?</h2>
            <p>
              Contact our team today to discuss your specific recruitment needs and discover how our specialized
              solutions can help you find and retain the best healthcare talent.
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

export default RecruitmentSolutions
