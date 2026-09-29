import { useLanguage } from '../i18n/LanguageContext';
import styles from './Blog.module.css';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section id="blogi" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={`kicker kicker--brown ${styles.kicker}`}>{t.blog.kicker}</p>
          <h2 className="h2 h2--fixed">{t.blog.title}</h2>
        </div>
        <a href="#" className="link-arrow">
          {t.blog.allLink}
        </a>
      </div>
      <div className={styles.posts}>
        {t.blog.posts.map((post, index) => (
          <div
            key={post.title}
            className={`${styles.post} ${index === t.blog.posts.length - 1 ? styles.postLast : ''}`}
          >
            <p className={`micro-label micro-label--brown ${styles.postDate}`}>{post.date}</p>
            <div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postText}>{post.text}</p>
            </div>
            <a href="#" className={`link-arrow ${styles.postLink}`}>
              {post.read}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
