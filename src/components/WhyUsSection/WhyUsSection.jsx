import { FaClock, FaCalendarAlt, FaCertificate, FaUserNurse, FaMapMarkedAlt } from "react-icons/fa"
import styles from "./WhyUsSection.module.css"

const WhyUsSection = () => {
  const features = [
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      description: "Our services are available around the clock to meet your healthcare staffing needs.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Booking Flexibility",
      description: "Flexible booking options to accommodate your schedule and requirements.",
    },
   
    {
      icon: <FaUserNurse />,
      title: "Skilled Workforce",
      description: "Our team consists of highly skilled and experienced healthcare professionals.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Nationwide Coverage",
      description: "We provide services across metro, remote, and regional areas of Australia.",
    },
  ]

  return (
    <section className={styles.whyUsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Why Choose Us</h2>
          <p>
            With years of experience in healthcare staffing, we have built a reputation for trust, reliability, and
            excellence in service delivery across Australia.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureItem} key={index}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
