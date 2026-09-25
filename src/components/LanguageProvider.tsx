"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  languages,
  translations,
  type Language,
  type Translation,
} from "@/lib/translations";

type TranslationData = Translation;

const STORAGE_KEY = "nirmaan-language";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    let savedLanguage: string | null = null;

    try {
      savedLanguage = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage can be blocked (private mode); fall back to English.
    }

    if (
      savedLanguage &&
      Object.prototype.hasOwnProperty.call(
        languages,
        savedLanguage
      )
    ) {
      setLanguageState(savedLanguage as Language);
    }
  }, []);

  // Keep <html lang> in sync so fonts, screen readers and the
  // language-specific CSS in globals.css pick the right script.

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);

    try {
      localStorage.setItem(STORAGE_KEY, newLanguage);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
