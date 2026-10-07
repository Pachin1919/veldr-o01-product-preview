import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Copy, Locale } from '@/lib/veldr-content';
const LanguageContext = createContext<{ locale: Locale; setLocale: (value: Locale) => void; t: (value: Copy) => string }>({ locale: 'en', setLocale: () => {}, t: (value) => value.en });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>('en');
  useEffect(() => { const saved = localStorage.getItem('veldr-language'); if (saved === 'zh' || saved === 'en') updateLocale(saved); }, []);
  useEffect(() => { document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'; }, [locale]);
  const setLocale = (value: Locale) => { updateLocale(value); localStorage.setItem('veldr-language', value); };
  return <LanguageContext.Provider value={{ locale, setLocale, t: (value) => value[locale] }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
