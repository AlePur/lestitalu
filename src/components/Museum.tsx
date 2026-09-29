import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Museum.module.css';

export default function Museum() {
  const { t } = useLanguage();

  return (
    <section id="muuseum" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="kicker kicker--gold">{t.museum.kicker}</p>
            <SectionTitle title={t.museum.title} className={`h2 h2--lg h2--dark ${styles.title}`} />
          </div>
          <div className={styles.headerText}>
            {t.museum.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${index === t.museum.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.items}>
          {t.museum.items.map((item, index) => (
            <div key={item.num} className={`${styles.item} ${styles[`item${index}`] ?? ''}`}>
              <p className={`micro-label micro-label--plain micro-label--gold ${styles.itemNum}`}>
                {item.num}
              </p>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
