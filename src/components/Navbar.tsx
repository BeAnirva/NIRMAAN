"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/5 bg-[#F8F6F1]/90 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

        {/* LOGO */}

        <a href="/" className="group">

          <div className="text-2xl font-bold tracking-[-0.04em]">
            NIRMAAN
          </div>

          <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
            LEARN • BUILD • BECOME
          </div>

        </a>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-8 md:flex">

          {/* HOME */}

          <a
            href="/"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Home
          </a>


          {/* HOW IT WORKS */}

          <a
            href="/#journey"
            className="text-sm text-black/65 transition hover:text-black"
          >
            How It Works
          </a>


          {/* EXPLORE */}

          <div className="relative">

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center gap-1 text-sm text-black/65 transition hover:text-black"
            >
              Explore

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
                  Learning
                </a>

                <a
                  href="/career"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  Career
                </a>

                <a
                  href="/ventures"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  Ventures
                </a>

                <a
                  href="/mentorship"
                  className="block rounded-xl px-4 py-3 text-sm text-black/70 transition hover:bg-[#F8F6F1] hover:text-black"
                  onClick={() => setExploreOpen(false)}
                >
                  Mentorship
                </a>

              </div>

            )}

          </div>


          {/* STORIES */}

          <a
            href="/stories"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Stories
          </a>


          {/* FAQ */}

          <a
            href="/faq"
            className="text-sm text-black/65 transition hover:text-black"
          >
            FAQ
          </a>

        </div>


        {/* DESKTOP CTA */}

        <a
          href="/register"
          className="hidden rounded-full bg-[#1D1D1B] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black md:block"
        >
          Start Your Journey →
        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          aria-label="Toggle menu"
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
              Home
            </a>


            {/* HOW IT WORKS */}

            <a
              href="/#journey"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              How It Works
            </a>


            {/* EXPLORE */}

            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="flex items-center justify-between text-left text-base text-black/70"
            >
              <span>Explore</span>

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
                  Learning
                </a>

                <a
                  href="/career"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  Career
                </a>

                <a
                  href="/ventures"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  Ventures
                </a>

                <a
                  href="/mentorship"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-black/60"
                >
                  Mentorship
                </a>

              </div>

            )}


            {/* STORIES */}

            <a
              href="/stories"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              Stories
            </a>


            {/* FAQ */}

            <a
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              FAQ
            </a>


            {/* MOBILE CTA */}

            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#1D1D1B] px-6 py-3 text-sm font-medium text-white"
            >
              Start Your Journey →
            </a>

          </div>

        </div>

      )}

    </header>
  );
}
