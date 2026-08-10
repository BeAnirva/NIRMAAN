"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/5 bg-[#F8F6F1]/90 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

        {/* LOGO */}

        <a href="#" className="group">

          <div className="text-2xl font-bold tracking-[-0.04em]">
            NIRMAAN
          </div>

          <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
            LEARN • BUILD • BECOME
          </div>

        </a>


        {/* DESKTOP NAVIGATION */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-sm text-black/65 transition hover:text-black"
          >
            About
          </a>

          <a
            href="#programs"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Programs
          </a>

          <a
            href="#journey"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Your Journey
          </a>

          <a
            href="#stories"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Stories
          </a>

        </div>


        {/* DESKTOP CTA */}

        <a
          href="#start"
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

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              About
            </a>

            <a
              href="#programs"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              Programs
            </a>

            <a
              href="#journey"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              Your Journey
            </a>

            <a
              href="#stories"
              onClick={() => setMenuOpen(false)}
              className="text-base text-black/70"
            >
              Stories
            </a>

            <a
              href="#start"
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
