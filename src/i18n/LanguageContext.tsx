import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { de } from './de';
import { en } from './en';
import { et } from './et';
import type { Dictionary, Lang } from './types';

const dictionaries: Record<Lang, Dictionary> = { et, en, de };

export const LANGUAGES: { code: Lang; name: string }[] = [
  { code: 'et', name: 'Eesti' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
];

const STORAGE_KEY = 'lesti-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: string | null): value is Lang {
  return value === 'et' || value === 'en' || value === 'de';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLang(stored) ? stored : 'et';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.title = dictionaries[lang].documentTitle;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
