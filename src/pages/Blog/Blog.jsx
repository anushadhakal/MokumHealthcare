import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Blog.module.css";

const Blog = () => {
  const blogPosts = [
    // ... (keep your existing blogPosts array)
  ];

  return (
    <div>
      <HeroSection
        title="H1 Healthcare Blog"
        subtitle="Insights, trends, and best practices in healthcare staffing and service delivery"
      />

      <section className={`section ${styles.blogSection}`}>
        <div className="container">
          <div className={styles.blogCategories}>
            <button className={`${styles.categoryButton} ${styles.active}`}>All</button>
            <button className={styles.categoryButton}>Disability Care</button>
            <button className={styles.categoryButton}>Aged Care</button>
            <button className={styles.categoryButton}>Recruitment</button>
            <button className={styles.categoryButton}>Career Development</button>
          </div>

          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <div className={styles.blogCard} key={post.id}>
                <div className={styles.blogImage}>
                  <img src={post.image || "/placeholder.svg"} alt={post.title} />
                  <div className={styles.blogCategory}>{post.category}</div>
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <span className={styles.blogAuthor}>By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className={styles.readMoreLink}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <button className={`${styles.pageButton} ${styles.active}`}>1</button>
            <button className={styles.pageButton}>2</button>
            <button className={styles.pageButton}>3</button>
            <button className={styles.pageButton}>
              <span>Next</span> →
            </button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.subscribeSection}`}>
        <div className="container">
          <div className={styles.subscribeContent}>
            <h2>Subscribe to Our Blog</h2>
            <p>
              Stay updated with the latest insights, trends, and best practices in healthcare staffing and service
              delivery.
            </p>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className={styles.formDisclaimer}>
              By subscribing, you agree to receive our newsletter and accept our
              <Link to="/privacy-policy"> Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;