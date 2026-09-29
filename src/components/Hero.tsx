import interior from '../assets/interior.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <img src={interior} alt={t.hero.alt} className={styles.image} />
      <div className={styles.shade} />
      <div className={styles.content}>
        <p className="kicker kicker--gold a1">{t.hero.kicker}</p>
        <h1 className={`a2 ${styles.title}`}>{t.hero.title}</h1>
        <p className={`a3 ${styles.lead}`}>{t.hero.lead}</p>
        <div className="a3">
          <div className={styles.actions}>
            <a href="#meist" className="btn">
              {t.hero.readMore}
            </a>
            <a href="#artiklid" className="link-arrow link-arrow--taupe">
              {t.hero.articles}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
