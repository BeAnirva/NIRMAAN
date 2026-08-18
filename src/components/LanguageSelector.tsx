"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
  },
  {
    code: "or",
    label: "Odia",
    nativeLabel: "ଓଡ଼ିଆ",
  },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("nirmaan-language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

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

  const handleLanguageChange = (code: string) => {
    setLanguage(code);

    localStorage.setItem("nirmaan-language", code);

    setOpen(false);
  };

  const selectedLanguage =
    languages.find((item) => item.code === language) || languages[0];

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
        aria-label="Select language"
        aria-expanded={open}
      >

        <span>
          {selectedLanguage.code.toUpperCase()}
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
              Choose language
            </p>

          </div>


          {languages.map((item) => (

            <button
              key={item.code}
              type="button"
              onClick={() => handleLanguageChange(item.code)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${
                language === item.code
                  ? "bg-[#F5F2EC] text-black"
                  : "text-black/60 hover:bg-[#F8F6F1] hover:text-black"
              }`}
            >

              <span>
                {item.nativeLabel}
              </span>

              {language === item.code && (
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


