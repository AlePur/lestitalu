import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section id="meist" className={styles.section}>
        <div className={styles.grid}>
          <div>
            <p className={`kicker kicker--brown ${styles.kicker}`}>{t.about.kicker}</p>
            <SectionTitle title={t.about.title} className={`h2 h2--md ${styles.title}`} />
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className={`${styles.paragraph} ${index === t.about.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.aside}>
            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>{t.about.quote}</p>
              <cite className="micro-label">{t.about.quoteSource}</cite>
            </blockquote>
            <p className={`kicker kicker--brown ${styles.statsLabel}`}>{t.about.statsLabel}</p>
            <div className={styles.stats}>
              {t.about.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.ruleWrap}>
        <div className={styles.rule} />
      </div>
    </>
  );
}
