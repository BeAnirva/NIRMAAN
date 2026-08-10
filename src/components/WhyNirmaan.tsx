export default function WhyNirmaan() {
  return (
    <section
      id="about"
      className="bg-[#1D1D1B] px-6 py-24 text-white md:px-10 md:py-32 lg:px-12"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Why Nirmaan
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">

              This isn't charity.

              <br />

              <span className="font-serif italic font-normal text-white/70">
                This is your opportunity.
              </span>

            </h2>

          </div>


          {/* RIGHT */}

          <div className="flex flex-col justify-end">

            <p className="max-w-xl text-lg leading-8 text-white/60">

              You don't need money, connections or a perfect plan
              to begin building your future.

            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">

              You just need the willingness to learn.

              Nirmaan is here to give you the skills, guidance,
              mentorship and opportunities to take your next step.

            </p>

          </div>

        </div>


        {/* VALUES */}

        <div className="mt-20 grid border-t border-white/10 md:grid-cols-3">

          <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:pr-10">

            <div className="mb-6 text-2xl">
              01
            </div>

            <h3 className="text-xl font-medium">
              Learn
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Gain practical skills that can help you move forward.
            </p>

          </div>


          <div className="border-b border-white/10 py-8 md:border-b-0 md:px-10 md:border-r">

            <div className="mb-6 text-2xl">
              02
            </div>

            <h3 className="text-xl font-medium">
              Grow
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Build confidence through mentorship, projects and experience.
            </p>

          </div>


          <div className="py-8 md:pl-10">

            <div className="mb-6 text-2xl">
              03
            </div>

            <h3 className="text-xl font-medium">
              Build
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Turn your skills and ideas into a career or your own venture.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
