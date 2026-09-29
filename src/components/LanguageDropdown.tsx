import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, useLanguage } from '../i18n/LanguageContext';
import styles from './LanguageDropdown.module.css';

export default function LanguageDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const current = LANGUAGES.find((language) => language.code === lang);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((value) => !value)}
      >
        {current?.name}
        <span className={styles.caret} aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <ul className={styles.menu} role="listbox" aria-label="Language">
          {LANGUAGES.map((language) => (
            <li key={language.code} role="option" aria-selected={language.code === lang}>
              <button
                type="button"
                className={`${styles.item} ${language.code === lang ? styles.itemActive : ''}`}
                onClick={() => {
                  setLang(language.code);
                  setOpen(false);
                }}
              >
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
