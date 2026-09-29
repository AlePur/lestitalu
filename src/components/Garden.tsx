import gardenSpring from '../assets/garden-spring.jpg';
import harvest from '../assets/harvest.png';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Garden.module.css';

const IMAGES = [gardenSpring, harvest];

export default function Garden() {
  const { t } = useLanguage();

  return (
    <section id="aed" className={styles.section}>
      <div className={styles.header}>
        <p className={`kicker kicker--brown ${styles.kicker}`}>{t.garden.kicker}</p>
        <SectionTitle title={t.garden.title} className="h2 h2--lg" />
      </div>
      <div className={styles.items}>
        {t.garden.items.map((item, index) => (
          <div key={item.num} className={`${styles.item} ${styles[`item${index}`] ?? ''}`}>
            <p className={`micro-label micro-label--plain micro-label--brown ${styles.itemNum}`}>
              {item.num}
            </p>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemText}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.images}>
        {t.garden.images.map((image, index) => (
          <div key={image.caption} className={`figure ${styles.figure}`}>
            <img src={IMAGES[index]} alt={image.alt} />
            <div className={`figure__caption figure__caption--sand ${styles.caption}`}>
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
