"use client";

import { useEffect, useRef, useState } from "react";

import { useLanguage } from "./LanguageProvider";
import { languages, type Language } from "@/lib/translations";

const languageCodes = Object.keys(languages) as Language[];

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div
      ref={selectorRef}
      className="relative"
    >
      {/* LANGUAGE BUTTON */}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-medium text-black/60 transition hover:border-black/20 hover:bg-white"
        aria-label={t.language.select}
        aria-expanded={open}
      >
        <span>
          {language.toUpperCase()}
        </span>

        <span
          className={`text-[10px] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {/* DROPDOWN */}

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-black/10 bg-white p-1.5 shadow-lg">

          <div className="px-3 py-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/30">
              {t.language.choose}
            </p>
          </div>

          {languageCodes.map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              onClick={() => handleLanguageChange(code)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${
                language === code
                  ? "bg-[#F5F2EC] text-black"
                  : "text-black/60 hover:bg-[#F8F6F1] hover:text-black"
              }`}
            >
              <span>
                {languages[code].nativeName}
              </span>

              {language === code && (
                <span className="text-xs">
                  ✓
                </span>
              )}
            </button>
          ))}

        </div>
      )}
    </div>
  );
}
