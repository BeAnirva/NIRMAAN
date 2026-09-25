"use client";

import { useLanguage } from "./LanguageProvider";

export default function AboutNirmaan() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="bg-[#F8F6F1] px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.5fr] md:items-end">

          {/* LABEL */}

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              {t.about.label}
            </p>
          </div>


          {/* CONTENT */}

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {t.about.title}
              <span className="font-serif italic font-normal">
                {t.about.titleEmphasis}
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 md:text-lg md:leading-8">
              {t.about.description}
            </p>

            <a
              href="/#journey"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition hover:text-black/60"
            >
              {t.about.link}
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
