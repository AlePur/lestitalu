import { useLanguage } from '../i18n/LanguageContext';
import styles from './Overnight.module.css';

export default function Overnight() {
  const { t } = useLanguage();

  return (
    <section id="oobumine" className={styles.section}>
      <div className="container">
        <div className={styles.separator} />
        <div className={styles.grid}>
          <div>
            <p className={`kicker kicker--gold ${styles.kicker}`}>{t.overnight.kicker}</p>
            <h2 className={`h2 h2--lg h2--dark h2--italic ${styles.title}`}>{t.overnight.title}</h2>
            {t.overnight.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${index === t.overnight.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.aside}>
            <p className={`kicker kicker--sm kicker--gold ${styles.conditionsLabel}`}>
              {t.overnight.conditionsLabel}
            </p>
            <div className={styles.conditions}>
              {t.overnight.conditions.map((condition, index) => (
                <p
                  key={condition}
                  className={`${styles.condition} ${index === t.overnight.conditions.length - 1 ? styles.conditionLast : ''}`}
                >
                  {condition}
                </p>
              ))}
            </div>
            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>{t.overnight.quote}</p>
            </blockquote>
            <a href="mailto:margotgouram@gmail.com" className="btn">
              {t.overnight.book}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
