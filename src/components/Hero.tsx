export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8F6F1]"
    >
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E8E1D4] opacity-60 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:px-12 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="relative z-10 min-w-0">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2">

            <span className="h-2 w-2 shrink-0 rounded-full bg-[#6D8068]" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/55">
              Your future starts here
            </span>

          </div>


          {/* Main heading */}
          <h1 className="max-w-full text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:max-w-3xl lg:text-[4.5rem]">

            {/* First line */}
            <span className="block whitespace-nowrap">
              Your next chapter,
            </span>

            {/* Second line */}
            <span className="block font-serif italic font-normal">
              written by you.
            </span>

          </h1>


          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-black/60 sm:mt-8 md:text-lg md:leading-8">
            A place to start where you are, discover what you're
            capable of, and take your next step with someone beside you.
          </p>


          {/* BUTTONS */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row">

            {/* Primary CTA */}
            <a
              href="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1D1D1B] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black sm:w-auto sm:px-7"
            >
              <span>Start Your Journey</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>


            {/* Secondary CTA */}
            <a
              href="#programs"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/50 px-6 py-4 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto sm:px-7"
            >
              Explore Nirmaan
            </a>

          </div>


          {/* TRUST LINE */}
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs text-black/40 sm:mt-10 sm:gap-x-6">

            <span>100% Free</span>

            <span>•</span>

            <span>Practical Learning</span>

            <span>•</span>

            <span>Mentorship</span>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="relative min-w-0">

          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[2rem] bg-[#DDD7CB]">

            {/* HERO IMAGE */}
            <img
              src="/image/nirmaan-hero.jpg"
              alt="A young person beginning their journey"
              className="h-full w-full object-cover"
            />

          </div>


          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 max-w-[230px] rounded-2xl border border-black/5 bg-white p-5 shadow-xl shadow-black/5 sm:-left-8">

            <p className="text-xs uppercase tracking-[0.15em] text-black/40">
              NIRMAAN
            </p>

            <p className="mt-2 text-sm font-medium leading-6">
              Start where you are. Take the next step.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
