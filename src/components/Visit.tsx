import { useLanguage } from '../i18n/LanguageContext';
import styles from './Visit.module.css';

export default function Visit() {
  const { t } = useLanguage();

  return (
    <section id="kulastu" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="kicker kicker--gold">{t.visit.kicker}</p>
          <h2 className={`h2 h2--lg h2--dark h2--italic ${styles.title}`}>{t.visit.title}</h2>
          <p className={styles.intro}>{t.visit.intro}</p>
          <p className={styles.note}>{t.visit.note}</p>
          <a href="mailto:margotgouram@gmail.com" className="btn">
            {t.visit.cta}
          </a>
        </div>

        <div className={styles.columns}>
          <div>
            <p className={`${styles.columnTitle}`}>{t.visit.practicalTitle}</p>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.locationLabel}</p>
              <p className={styles.blockText}>
                {t.visit.location.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.hoursLabel}</p>
              <p className={styles.blockText}>
                {t.visit.hours.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
                <br />
                <em className={styles.hoursNote}>{t.visit.hoursNote}</em>
              </p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.phoneLabel}</p>
              <p className={styles.blockText}>
                {t.visit.phones.map((phone, index) => (
                  <span key={phone.name}>
                    {index > 0 && <br />}
                    {phone.name}:{' '}
                    <a href={`tel:${phone.tel}`} className={styles.phoneLink}>
                      {phone.number}
                    </a>
                  </span>
                ))}
              </p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.emailLabel}</p>
              <p className={styles.blockText}>
                <a href="mailto:margotgouram@gmail.com" className={styles.phoneLink}>
                  margotgouram@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className={styles.columnTitle}>{t.visit.exchangeTitle}</p>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.barterLabel}</p>
              <p className={styles.blockText}>{t.visit.barter}</p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.donationsLabel}</p>
              <p className={styles.blockText}>{t.visit.donations}</p>
            </div>
            <div className={styles.block}>
              <p className={styles.blockLabel}>{t.visit.overnightLabel}</p>
              <p className={`${styles.blockText} ${styles.overnightText}`}>{t.visit.overnight}</p>
              <a href="#oobumine" className={`link-arrow link-arrow--cream ${styles.overnightLink}`}>
                {t.visit.overnightLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
