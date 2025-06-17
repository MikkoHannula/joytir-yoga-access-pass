// LanguageContext.tsx
// -------------------
// Provides a global React context for managing the current language (English/French) across the app.
// Use useLanguage() in any component to access or change the language.
// To add more languages, extend the Language type and update the provider logic.
//
// Usage:
//   import { useLanguage } from '@/contexts/LanguageContext';
//   const { language, setLanguage } = useLanguage();
//
// Wrap your app in <LanguageProvider> (already done in App.tsx).

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "fr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
