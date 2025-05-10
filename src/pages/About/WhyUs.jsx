import HeroSection from "../../components/HeroSection/HeroSection"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"
// import styles from "./About.module.css"
import styles from "./WhyUs.module.css"


const WhyUs = () => {
  const testimonials = [
    {
      quote:
        "Mokum Healthcare has been an invaluable partner in meeting our staffing needs. Their professionals are highly skilled and reliable, and their team is responsive and easy to work with.",
      author: "Sarah Johnson",
      position: "Director of Nursing, Melbourne General Hospital",
    },
    {
      quote:
        "We've been working with Mokum Healthcare for over 5 years, and they consistently provide exceptional candidates who fit perfectly with our team and culture. Their understanding of the aged care sector is outstanding.",
      author: "Michael Thompson",
      position: "Facility Manager, Sunshine Aged Care",
    },
    {
      quote:
        "As a disability service provider, finding qualified staff who are both skilled and compassionate is crucial. Mokum Healthcare has never let us down, providing outstanding professionals who make a real difference in our clients' lives.",
      author: "Emma Wilson",
      position: "Operations Manager, Ability Support Services",
    },
  ]

  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="Why Choose Mokum Healthcare"
        subtitle="Discover what sets us apart as Australia's leading healthcare staffing provider"
      />

      <WhyUsSection />

      <section className={`section ${styles.approachSection}`}>
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">How we deliver exceptional healthcare staffing solutions</p>

          <div className={styles.approachGrid}>
            <div className={styles.approachItem}>
              <div className={styles.approachNumber}>01</div>
              <h3>Understanding Your Needs</h3>
              <p>
                We take the time to thoroughly understand your specific requirements, organizational culture, and the
                unique challenges you face in healthcare staffing.
              </p>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachNumber}>02</div>
              <h3>Rigorous Selection Process</h3>
              <p>
                Our healthcare professionals undergo comprehensive screening, including qualification verification,
                reference checks, and interviews to ensure they meet our high standards.
              </p>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachNumber}>03</div>
              <h3>Perfect Matching</h3>
              <p>
                We carefully match healthcare professionals not just based on skills and experience, but also
                considering personality, work style, and cultural fit.
              </p>
            </div>
            <div className={styles.approachItem}>
              <div className={styles.approachNumber}>04</div>
              <h3>Ongoing Support</h3>
              <p>
                Our relationship doesn't end with placement. We provide continuous support to both clients and
                healthcare professionals to ensure successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Testimonials from healthcare organizations across Australia</p>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.testimonialCard} key={index}>
                {/* <div className={styles.quoteIcon}>"</div> */}
                <p className={styles.quoteText}>{testimonial.quote}</p>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to experience the Mokum Healthcare difference?</h2>
            <p>
              Contact our team today to discuss how we can meet your healthcare staffing needs with our exceptional
              professionals and personalized service.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryBtn}>
                Contact Us
              </a>
              <a href="/industry/overview" className={styles.secondaryBtn}>
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WhyUs
