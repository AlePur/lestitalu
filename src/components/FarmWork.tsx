import RichText from './RichText';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './FarmWork.module.css';

export default function FarmWork() {
  const { t } = useLanguage();

  return (
    <section id="talutoo" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={`kicker kicker--brown ${styles.kicker}`}>{t.farmWork.kicker}</p>
            <SectionTitle title={t.farmWork.title} className={`h2 h2--md ${styles.title}`} />
            {t.farmWork.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${index === t.farmWork.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}
              >
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          <div className={styles.aside}>
            {t.farmWork.seasons.map((season) => (
              <div key={season.label} className={styles.season}>
                <p className={`micro-label micro-label--wide micro-label--brown ${styles.seasonLabel}`}>
                  {season.label}
                </p>
                <h4 className={styles.seasonTitle}>{season.title}</h4>
                <p className={styles.seasonText}>{season.text}</p>
              </div>
            ))}
            <p className={styles.closing}>
              <RichText text={t.farmWork.closing} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
