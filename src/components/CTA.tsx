"use client";

import { useLanguage } from "./LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section
      id="start"
      className="relative overflow-hidden bg-[#DDE3D8] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      {/* Decorative shapes */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-black/5" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-black/5" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-black/5" />


      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP LABEL */}

        <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/35">
          {t.cta.label}
        </p>


        {/* MAIN CONTENT */}

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

          <div>

            <h2 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-8xl">

              {t.cta.titleLine1}
              <br />

              {t.cta.titleLine2}

              <span className="font-serif italic font-normal">
                {t.cta.titleEmphasis}
              </span>

            </h2>

          </div>


          <div>

            <p className="max-w-md text-base leading-7 text-black/55 md:text-lg md:leading-8">

              {t.cta.description}

            </p>

          </div>

        </div>


        {/* CTA CARD */}

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#1D1D1B] p-7 text-white md:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                {t.cta.cardLabel}
              </p>

              <h3 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">

                {t.cta.cardTitle}

              </h3>


              <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">

                {t.cta.cardDescription}

              </p>

            </div>


            <a
              href="/register"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1D1D1B] transition duration-300 hover:-translate-y-1 hover:bg-[#F8F6F1]"
            >
              {t.cta.button}
            </a>

          </div>

        </div>


        {/* SMALL TRUST POINTS */}

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-black/40">

          {t.cta.trust.map((item, index) => (
            <span key={item} className="contents">
              {index > 0 && <span>•</span>}
              <span>{item}</span>
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}
