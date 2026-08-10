const footerLinks = {
  explore: [
    { label: "About Nirmaan", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Your Journey", href: "#journey" },
    { label: "Learning", href: "#learning" },
  ],
  opportunities: [
    { label: "Career Support", href: "#career" },
    { label: "Mentorship", href: "#mentorship" },
    { label: "Nirmaan Ventures", href: "#ventures" },
    { label: "Stories", href: "#stories" },
  ],
};

export default function Footer() {
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
              A space to learn, grow, build and create your own path.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/25">
              Learn • Build • Become
            </p>

          </div>


          {/* EXPLORE */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <div className="mt-5 space-y-3">

              {footerLinks.explore.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {link.label}
                </a>

              ))}

            </div>

          </div>


          {/* OPPORTUNITIES */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Opportunities
            </p>

            <div className="mt-5 space-y-3">

              {footerLinks.opportunities.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {link.label}
                </a>

              ))}

            </div>

          </div>


          {/* START */}

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Ready?
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              Your next chapter can start with one small step.
            </p>

            <a
              href="/register"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1D1D1B] transition hover:-translate-y-1 hover:bg-[#F8F6F1]"
            >
              Start Your Journey →
            </a>

          </div>

        </div>


        {/* MIDDLE BRAND STATEMENT */}

        <div className="border-b border-white/10 py-14 md:py-20">

          <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-white/90 md:text-6xl lg:text-7xl">

            Your story isn't defined
            <br />

            by where you{" "}

            <span className="font-serif italic font-normal text-white/40">
              started.
            </span>

          </h2>

        </div>


        {/* BOTTOM */}

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} NIRMAAN. All rights reserved.
          </p>


          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
