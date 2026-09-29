import buildings from '../assets/buildings.jpg';
import kolerPortrait from '../assets/koler-portrait.jpg';
import loom from '../assets/loom.png';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Articles.module.css';

const IMAGES = [buildings, loom, kolerPortrait];

export default function Articles() {
  const { t } = useLanguage();

  return (
    <section id="artiklid" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={`kicker kicker--brown ${styles.kicker}`}>{t.articles.kicker}</p>
          <h2 className="h2 h2--fixed">{t.articles.title}</h2>
        </div>
        <a href="#" className="link-arrow">
          {t.articles.allLink}
        </a>
      </div>
      <div className={styles.grid}>
        {t.articles.items.map((article, index) => (
          <article key={article.title}>
            <div className={`figure ${styles.figure}`}>
              <img src={IMAGES[index]} alt={article.image.alt} />
              <div className={`figure__caption figure__caption--sand ${styles.caption}`}>
                {article.image.caption}
              </div>
              <div className={styles.tag}>{article.tag}</div>
            </div>
            <p className={`micro-label micro-label--muted ${styles.date}`}>{article.date}</p>
            <h3 className={styles.cardTitle}>{article.title}</h3>
            <p className={styles.excerpt}>{article.excerpt}</p>
            <a href="#" className="link-arrow">
              {article.readMore}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
