"use client";

import { useLanguage } from "./LanguageProvider";

const footerLinks = {
  explore: [
    { key: "about", href: "#about" },
    { key: "programs", href: "#programs" },
    { key: "journey", href: "#journey" },
    { key: "learning", href: "#learning" },
  ],

  opportunities: [
    { key: "career", href: "/career" },
    { key: "ventures", href: "/ventures" },
  ],
} as const;


export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1D1D1B] px-6 pb-8 pt-16 text-white md:px-10 md:pt-20 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* TOP */}

        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}

          <div>

            <a
              href="#top"
              className="inline-block text-2xl font-semibold tracking-[-0.04em]"
            >
              NIRMAAN
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
              {t.footer.tagline}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/25">
              {t.footer.motto}
            </p>

          </div>


          {/* EXPLORE */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              {t.footer.exploreHeading}
            </p>

            <div className="mt-5 space-y-3">

              {footerLinks.explore.map((link) => (

                <a
                  key={link.key}
                  href={link.href}
                  className="block w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {t.footer.explore[link.key]}
                </a>

              ))}

            </div>

          </div>


          {/* OPPORTUNITIES */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              {t.footer.opportunitiesHeading}
            </p>

            <div className="mt-5 space-y-3">

              {footerLinks.opportunities.map((link) => (

                <a
                  key={link.key}
                  href={link.href}
                  className="block w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {t.footer.opportunities[link.key]}
                </a>

              ))}

            </div>


            {/* MENTOR CTA */}

            <div className="mt-8 border-t border-white/10 pt-6">

              <p className="text-sm text-white/40">
                {t.footer.contribute}
              </p>

              <a
                href="/mentorship"
                className="mt-2 inline-flex items-center text-sm font-medium text-white transition hover:text-white/70"
              >
                {t.footer.becomeMentor}

                <span className="ml-2 transition-transform duration-300 hover:translate-x-1">
                  →
                </span>

              </a>

            </div>

          </div>


          {/* START */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              {t.footer.readyHeading}
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              {t.footer.readyText}
            </p>

            <a
              href="/register"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1D1D1B] transition hover:-translate-y-1 hover:bg-[#F8F6F1]"
            >
              {t.footer.startJourney}
            </a>

          </div>

        </div>


        {/* MIDDLE BRAND STATEMENT */}

        <div className="border-b border-white/10 py-14 md:py-20">

          <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white/90 md:text-6xl lg:text-7xl">

            {t.footer.statementLine1}
            <br />

            {t.footer.statementLine2}

            <span className="font-serif italic font-normal text-white/40">
              {t.footer.statementEmphasis}
            </span>

          </h2>

        </div>


        {/* BOTTOM */}

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} NIRMAAN. {t.footer.rights}
          </p>


          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-white"
            >
              {t.footer.privacy}
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              {t.footer.terms}
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              {t.footer.contact}
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
