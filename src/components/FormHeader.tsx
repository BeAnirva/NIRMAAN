"use client";

import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./LanguageProvider";
import { formsContent } from "@/lib/content/forms";

// Slim header used by the Register and Become-a-Mentor pages
// (they don't use the full Navbar).

export default function FormHeader({
  showBackLink = true,
}: {
  showBackLink?: boolean;
}) {
  const { language, t } = useLanguage();
  const f = formsContent[language];

  return (
    <header className="border-b border-black/5 bg-[#F8F6F1]/90">

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-12">

        <a href="/" className="group">

          <div className="text-2xl font-bold tracking-[-0.04em]">
            NIRMAAN
          </div>

          <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
            {t.nav.tagline}
          </div>

        </a>

        <div className="flex items-center gap-4 md:gap-6">

          {showBackLink && (
            <a
              href="/"
              className="hidden text-sm text-black/50 transition hover:text-black sm:block"
            >
              {f.backLink}
            </a>
          )}

          <LanguageSelector />

        </div>

      </nav>

    </header>
  );
}
