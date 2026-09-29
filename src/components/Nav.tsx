import LanguageDropdown from './LanguageDropdown';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Nav.module.css';

export default function Nav() {
  const { t } = useLanguage();

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.brand}>
        {t.nav.brand}
      </a>
      <div className={styles.links}>
        {t.nav.links.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
        <a href="#kulastu" className={styles.cta}>
          {t.nav.cta}
        </a>
        <LanguageDropdown />
      </div>
    </nav>
  );
}
