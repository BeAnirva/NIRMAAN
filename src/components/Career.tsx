const careerSteps = [
  {
    number: "01",
    title: "Build Skills",
    description:
      "Develop practical skills that match the kind of work you want to pursue.",
  },
  {
    number: "02",
    title: "Build Your Profile",
    description:
      "Create a strong resume, portfolio and professional profile that represent what you can do.",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Work on projects, practice interviews and build the confidence to perform in real situations.",
  },
  {
    number: "04",
    title: "Find Opportunities",
    description:
      "Discover internships, jobs, apprenticeships and other opportunities that can help you take your next step.",
  },
];

export default function Career() {
  return (
    <section
      className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Career readiness
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              From learning
              <br />

              to{" "}

              <span className="font-serif italic font-normal">
                earning.
              </span>

            </h2>

          </div>


          <div>

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">

              Learning a skill is only the beginning.
              We help you turn what you learn into something
              you can demonstrate, communicate and use
              to pursue real opportunities.

            </p>

          </div>

        </div>


        {/* CAREER JOURNEY */}

        <div className="mt-20 rounded-[2rem] bg-[#1D1D1B] p-7 text-white md:p-12 lg:p-14">

          {/* TOP */}

          <div className="flex flex-col gap-5 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                Your career journey
              </p>

              <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                Learn → Prepare → Apply → Grow
              </h3>

            </div>

            <span className="text-sm text-white/30">
              One step at a time.
            </span>

          </div>


          {/* STEPS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {careerSteps.map((step, index) => (

              <div
                key={step.number}
                className={`relative py-10 md:px-7 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >

                {/* NUMBER */}

                <div className="flex items-center justify-between">

                  <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                    {step.number}
                  </span>

                  {index < careerSteps.length - 1 && (
                    <span className="hidden text-white/20 lg:block">
                      →
                    </span>
                  )}

                </div>


                {/* CONTENT */}

                <h4 className="mt-12 text-xl font-medium">
                  {step.title}
                </h4>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* CAREER SUPPORT */}

        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {/* RESUME */}

          <div className="rounded-[2rem] border border-black/8 bg-white p-8 md:p-10">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-black/30">
                  Build your profile
                </p>

                <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
                  Show the world what you can do.
                </h3>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm">
                ↗
              </div>

            </div>


            <div className="mt-10 space-y-3">

              <div className="flex items-center gap-3 rounded-xl bg-[#F5F2EC] p-4">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs">
                  ✓
                </span>

                <span className="text-sm text-black/60">
                  Resume building
                </span>

              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F5F2EC] p-4">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs">
                  ✓
                </span>

                <span className="text-sm text-black/60">
                  Portfolio development
                </span>

              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F5F2EC] p-4">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs">
                  ✓
                </span>

                <span className="text-sm text-black/60">
                  Interview preparation
                </span>

              </div>

            </div>

          </div>


          {/* OPPORTUNITIES */}

          <div className="rounded-[2rem] bg-[#E9E4DA] p-8 md:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-black/30">
              Find opportunities
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
              Your first opportunity can change what's possible.
            </h3>


            <p className="mt-5 max-w-md text-sm leading-6 text-black/50">
              We'll help you prepare for and discover opportunities
              that match your skills, interests and goals.
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/70 px-4 py-2 text-xs text-black/50">
                Internships
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-xs text-black/50">
                Jobs
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-xs text-black/50">
                Apprenticeships
              </span>

              <span className="rounded-full bg-white/70 px-4 py-2 text-xs text-black/50">
                Freelancing
              </span>

            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-black/40">
            You don't need to be job-ready today.
            Nirmaan can help you become ready.
          </p>

          <div
  className="inline-flex w-fit shrink-0 items-center rounded-full border border-black/10 bg-black/5 px-7 py-4 text-sm font-medium text-black/45"
>
  Launching Soon
</div>

        </div>

      </div>
    </section>
  );
}
