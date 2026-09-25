"use client";

import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="relative z-50 border-b border-black/5 bg-[#F8F6F1]/90 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

        {/* LOGO */}

        <a href="/" className="group">

          <div className="text-2xl font-bold tracking-[-0.04em]">
            NIRMAAN
          </div>

          <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
            {t.nav.tagline}
          </div>

        </a>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-8 md:flex">

          {/* HOME */}

          <a
            href="/"
            className="text-sm text-black/65 transition hover:text-black"
          >
            {t.nav.home}
          </a>


          {/* HOW IT WORKS */}

          <a
            href="/#journey"
            className="text-sm text-black/65 transition hover:text-black"
          >
            {t.nav.howItWorks}
          </a>


          {/* EXPLORE */}

          <div className="relative">

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center gap-1 text-sm text-black/65 transition hover:text-black"
            >
              {t.nav.explore}

              <span
                className={`text-[10px] transition-transform duration-200 ${
                  exploreOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>

            </button>


            {/* EXPLORE DROPDOWN */}

            {exploreOpen && (

              <div className="absolute left-1/2 top-full mt-4 w-52 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-2 shadow-xl shadow-black/5">

                <a
                  href="/learning"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  {t.nav.learning}
                </a>

                <a
                  href="/career"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  {t.nav.career}
                </a>

                <a
                  href="/ventures"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  {t.nav.ventures}
                </a>

                <a
                  href="/mentorship"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  {t.nav.mentorship}
                </a>

              </div>

            )}

          </div>


          {/* FAQ */}

          <a
            href="/faq"
            className="text-sm text-black/65 transition hover:text-black"
          >
            {t.nav.faq}
          </a>

        </div>
        {/* LANGUAGE SELECTOR */}

<LanguageSelector />


        {/* DESKTOP CTA */}

        <a
          href="/register"
          className="hidden rounded-full bg-[#1D1D1B] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black md:block"
        >
          {t.nav.startJourney}
        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label={t.nav.toggleMenu}
        >

          <div className="space-y-1.5">

            <span
              className={`block h-[1.5px] w-5 bg-black transition ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-5 bg-black transition ${
                menuOpen ? "-rotate-45" : ""
              }`}
            />

          </div>

        </button>

      </nav>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="border-t border-black/5 bg-[#F8F6F1] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            {/* HOME */}

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              {t.nav.home}
            </a>


            {/* HOW IT WORKS */}

            <a
              href="/#journey"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              {t.nav.howItWorks}
            </a>


            {/* EXPLORE */}

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center justify-between text-left text-base text-black/70"
            >
              <span>{t.nav.explore}</span>

              <span
                className={`text-xs transition-transform ${
                  exploreOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>

            </button>


            {/* MOBILE EXPLORE LINKS */}

            {exploreOpen && (

              <div className="ml-4 flex flex-col gap-4 border-l border-black/10 pl-5">

                <a
                  href="/learning"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  {t.nav.learning}
                </a>

                <a
                  href="/career"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  {t.nav.career}
                </a>

                <a
                  href="/ventures"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  {t.nav.ventures}
                </a>

                <a
                  href="/mentorship"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  {t.nav.mentorship}
                </a>

              </div>

            )}


            {/* FAQ */}

            <a
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              {t.nav.faq}
            </a>
            
{/* MOBILE LANGUAGE SELECTOR */}

<div className="pt-2">

  <LanguageSelector />

</div>

            {/* MOBILE CTA */}

            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#1D1D1B] px-6 py-3 text-sm font-medium text-white"
            >
              {t.nav.startJourney}
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
