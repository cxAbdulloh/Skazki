import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState(localStorage.getItem('site_lang') || 'ru');

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: (key) => translations[lang][key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);