import knits from '../assets/knits.png';
import rugPattern from '../assets/rug-pattern.png';
import rugs from '../assets/rugs.png';
import RichText from './RichText';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './CraftRoom.module.css';

export default function CraftRoom() {
  const { t } = useLanguage();

  return (
    <section id="kasitoo" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={`kicker kicker--brown ${styles.kicker}`}>{t.craft.kicker}</p>
          <h2 className="h2 h2--lg">{t.craft.title}</h2>
        </div>

        <div className={styles.top}>
          <div className={`figure ${styles.patternFigure}`}>
            <img src={rugPattern} alt={t.craft.heroImage.alt} />
            <div className={`figure__caption figure__caption--sand ${styles.patternCaption}`}>
              {t.craft.heroImage.caption}
            </div>
          </div>
          <div>
            {t.craft.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${styles.paragraph} ${styles[`paragraph${index}`] ?? ''}`}
              >
                <RichText text={paragraph} />
              </p>
            ))}
            <div className={styles.tags}>
              <p className={`${styles.tag} ${styles.tagSolid}`}>{t.craft.tags[0]}</p>
              <p className={`${styles.tag} ${styles.tagOutline}`}>{t.craft.tags[1]}</p>
              <p className={`${styles.tag} ${styles.tagGold}`}>{t.craft.tags[2]}</p>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {t.craft.cards.map((card) => (
            <div key={card.num} className={styles.card}>
              <p className={`micro-label micro-label--plain micro-label--brown ${styles.cardNum}`}>
                {card.num}
              </p>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
              <div className={`figure ${styles.cardFigure}`}>
                <img src={card.num === '01' ? knits : rugs} alt={card.image.alt} />
                <div className={`figure__caption figure__caption--sand ${styles.cardCaption}`}>
                  {card.image.caption}
                </div>
              </div>
            </div>
          ))}
          <div className={styles.workshop}>
            <p className={`kicker kicker--sm kicker--gold ${styles.cardNum}`}>{t.craft.workshop.kicker}</p>
            <h3 className={`${styles.cardTitle} ${styles.workshopTitle}`}>{t.craft.workshop.title}</h3>
            <p className={styles.workshopText}>{t.craft.workshop.text}</p>
            <a href="mailto:margotgouram@gmail.com" className={`link-arrow link-arrow--cream ${styles.workshopLink}`}>
              {t.craft.workshop.link}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
