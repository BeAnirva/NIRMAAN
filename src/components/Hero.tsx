export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1]">

      {/* Decorative circle */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E8E1D4] opacity-60 blur-3xl" />


      <div className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:px-12 lg:py-20">

        {/* LEFT CONTENT */}

        <div className="relative z-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-[#6D8068]" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/55">
              Your future starts here
            </span>

          </div>


          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">

            Your future

            <br />

            is yours to{" "}

            <span className="font-serif italic font-normal">
              build.
            </span>

          </h1>


          <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8">

            Nirmaan gives you access to free learning, practical skills,
            mentorship and guidance to help you build a career or create
            something of your own.

          </p>


          {/* BUTTONS */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">

            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Start Your Journey →
            </a>

            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/50 px-7 py-4 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Nirmaan
            </a>

          </div>


          {/* TRUST LINE */}

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/40">

            <span>100% Free</span>

            <span>•</span>

            <span>Practical Learning</span>

            <span>•</span>

            <span>Mentorship</span>

          </div>

        </div>


        {/* RIGHT VISUAL */}

        <div className="relative">

          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-[#DDD7CB]">

            {/* Image placeholder */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="px-10 text-center">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/60">

                  <span className="text-3xl">
                    ✦
                  </span>

                </div>

                <p className="text-sm font-medium text-black/50">
                  Your journey begins with one step.
                </p>

              </div>

            </div>

          </div>


          {/* Floating card */}

          <div className="absolute -bottom-6 -left-4 max-w-[230px] rounded-2xl border border-black/5 bg-white p-5 shadow-xl shadow-black/5 sm:-left-8">

            <p className="text-xs uppercase tracking-[0.15em] text-black/40">
              Nirmaan
            </p>

            <p className="mt-2 text-sm font-medium leading-6">
              Learn something new. Build something meaningful.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
