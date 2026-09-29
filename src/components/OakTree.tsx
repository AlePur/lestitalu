import oak from '../assets/oak.png';
import RichText from './RichText';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './OakTree.module.css';

export default function OakTree() {
  const { t } = useLanguage();

  return (
    <section id="tamm" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={`kicker kicker--gold ${styles.kicker}`}>{t.oak.kicker}</p>
            <SectionTitle
              title={t.oak.title}
              className={`h2 h2--xl h2--dark h2--italic ${styles.title}`}
            />
            {t.oak.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${index === t.oak.paragraphs.length - 1 ? '' : styles.paragraphSpaced}`}
              >
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          <div className={`figure ${styles.figure}`}>
            <img src={oak} alt={t.oak.imageAlt} />
            <div className={`figure__caption figure__caption--dark ${styles.caption}`}>
              {t.oak.imageCaption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
