import { Link } from "react-router-dom"
import styles from "./IndustryCard.module.css"

const IndustryCard = ({ image, title, description, link, linkText = "Read More", isReversed = false }) => {
  return (
    <div className={`${styles.industryCard} ${isReversed ? styles.reversed : ""}`}>
      <div className={styles.imageContainer}>
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className={styles.readMoreLink}>
          {linkText}
        </Link>
      </div>
    </div>
  )
}

export default IndustryCard
