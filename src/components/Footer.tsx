import { useLanguage } from '../i18n/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className={styles.brand}>{t.footer.brand}</p>
            <p className={styles.description}>
              {t.footer.description.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className={styles.links}>
            {t.footer.links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t.footer.copyright}</p>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
