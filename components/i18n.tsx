"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "lang";

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

/** Holds the chosen language for the whole page and remembers it for the next visit. */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // The page is prerendered in English; switch after load if Spanish was chosen before.
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "es") setLangState("es");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

/** `t(english, spanish)` returns the text for the current language. */
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = useCallback(<T,>(en: T, es: T) => (lang === "es" ? es : en), [lang]);
  return { lang, setLang, t };
}
