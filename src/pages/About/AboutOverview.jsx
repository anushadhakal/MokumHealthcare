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
                Mokum Healthcare began with a simple truth: kindness matters. We saw the gaps in care, the rushed moments, the missed connections and we knew we could do better. “Mokum” means safe place, and that’s what we’ve built a calm, caring space where people feel supported, respected, and truly seen.

                We come from different walks of life, but we’re united by one belief: care should always come from the heart. Whether we’re helping someone with daily living, nursing care, or just being there on the tough days, we show up with empathy, patience, and presence.

                Mokum Healthcare is more than a service. It’s a community built on trust, compassion, and the kind of kindness that lifts people up

              </p>

              <h3>Our Mission</h3>
              <p>
                To provide person-centred care that empowers individuals to live with dignity, independence, and connection. We’re here to make everyday moments meaningful with warmth, professionalism, and a deep respect for every person we support.
              </p>

              <h3>Our Vision</h3>
              <p>
                To be a trusted name in care known for our heart, our integrity, and the way we make people feel. We envision a world where kindness is the foundation of care, where every person has access to support that truly understands them, and where no one ever feels alone on their journey.
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
              <div className={styles.statNumber}>4+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Healthcare Professionals</div>
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
