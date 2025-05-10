import HeroSection from "../../components/HeroSection/HeroSection"
import styles from "./About.module.css"
// import aboutHeroImage from "../../assets/images/about-hero.jpg"
// import aboutImage from "../../assets/images/about-image.jpg"

const AboutOverview = () => {
  return (
    <main>
      <HeroSection
        backgroundImage="https://placehold.co/600x400"
        title="About Mokum Healthcare"
        subtitle="Learn about our mission, vision, and commitment to excellence in healthcare staffing"
      />

      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>Our Story</h2>
              <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui maiores voluptas aut inventore sapiente accusamus iste labore veniam magni quas dignissimos, eaque non eligendi debitis laboriosam esse commodi saepe quasi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea odit molestias quidem repellat nulla voluptatem illo accusamus aut deserunt impedit sint et provident adipisci consequuntur enim, odio sit aliquid tenetur magnam ullam repellendus inventore. Sint unde natus nesciunt ipsa?
              </p>

              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, esse consequuntur deserunt unde blanditiis quisquam similique earum nihil accusamus impedit perspiciatis nesciunt quis natus repellat, explicabo laboriosam, velit dignissimos cumque.
              </p>

              <h3>Our Vision</h3>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad explicabo rem optio eaque aliquid ab excepturi a tenetur esse. Repellendus voluptas est cupiditate minima saepe aperiam sint, praesentium vitae eius?
              </p>
            </div>
            <div className={styles.aboutImage}>
              <img src="https://placehold.co/600x400" alt="About Mokum Healthcare" />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every aspect of our service, from the quality of our healthcare
                professionals to our administrative processes and client support.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Integrity</h3>
              <p>
                We operate with honesty, transparency, and ethical standards in all our interactions with clients,
                healthcare professionals, and the communities we serve.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Compassion</h3>
              <p>
                We recognize the human element in healthcare and approach our work with empathy, understanding, and a
                genuine concern for the wellbeing of others.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>
                We continuously seek new and better ways to address healthcare staffing challenges, embracing technology
                and creative solutions to improve our service.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of partnership and work closely with our clients, healthcare professionals, and
                industry stakeholders to achieve shared goals.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Accountability</h3>
              <p>
                We take responsibility for our actions and decisions, holding ourselves to high standards and being
                accountable to those who rely on our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Healthcare Professionals</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Client Facilities</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutOverview
