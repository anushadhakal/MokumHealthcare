import { Link } from "react-router-dom"
import styles from "./HeroSection.module.css"

const HeroSection = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {buttonText && buttonLink && (
              <Link to={buttonLink} className={styles.heroButton}>
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
