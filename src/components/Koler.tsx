import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Koler.module.css';

export default function Koler() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={`kicker kicker--brown ${styles.kicker}`}>{t.koler.kicker}</p>
            <SectionTitle title={t.koler.title} className={`h2 h2--md ${styles.title}`} />
            {t.koler.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${index === t.koler.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.aside}>
            <div className={styles.portraitCard}>
              <p className={`kicker kicker--sm kicker--gold ${styles.portraitLabel}`}>
                {t.koler.portrait.label}
              </p>
              <p className={styles.portraitName}>{t.koler.portrait.name}</p>
              <p className={styles.portraitDates}>{t.koler.portrait.dates}</p>
              <div className={styles.portraitDivider} />
              <p className={styles.portraitRoles}>
                {t.koler.portrait.roles.map((role, index) => (
                  <span key={role}>
                    {index > 0 && <br />}
                    {role}
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.onsiteCard}>
              <p className={`kicker kicker--sm kicker--gold ${styles.onsiteLabel}`}>
                {t.koler.onsite.label}
              </p>
              <p className={styles.onsiteText}>{t.koler.onsite.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
