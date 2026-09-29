import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Trails.module.css';

export default function Trails() {
  const { t } = useLanguage();

  return (
    <section id="rajad" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`kicker kicker--brown ${styles.kicker}`}>{t.trails.kicker}</p>
          <SectionTitle title={t.trails.title} className="h2 h2--md" />
        </div>
        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>{t.trails.intro}</p>
            <div className={styles.trails}>
              {t.trails.trails.map((trail, index) => (
                <div
                  key={trail.name}
                  className={`${styles.trail} ${index === t.trails.trails.length - 1 ? styles.trailLast : ''}`}
                >
                  <div>
                    <h4 className={styles.trailName}>{trail.name}</h4>
                    <p className={styles.trailText}>{trail.text}</p>
                    {trail.note && <p className={styles.trailNote}>{trail.note}</p>}
                  </div>
                  <span className={styles.status}>{trail.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.infoBox}>
            <p className={`micro-label micro-label--plain micro-label--brown ${styles.infoTitle}`}>
              {t.trails.infoTitle}
            </p>
            <div className={styles.infoList}>
              {t.trails.info.map((line, index) => (
                <p
                  key={line}
                  className={`${styles.infoItem} ${index === t.trails.info.length - 1 ? styles.infoItemLast : ''}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
