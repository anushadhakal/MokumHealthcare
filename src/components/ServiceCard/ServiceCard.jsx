import { Link } from "react-router-dom"
import styles from "./ServiceCard.module.css"

const ServiceCard = ({ icon, title, description, link, linkText = "Learn More", className = "" }) => {
  return (
    <div className={`${styles.serviceCard} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link to={link} className={styles.cardLink}>
          {linkText}
        </Link>
      )}
    </div>
  )
}

export default ServiceCard
