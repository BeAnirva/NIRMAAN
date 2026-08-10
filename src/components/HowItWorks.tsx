const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your interests, strengths and possibilities. You don't need to know exactly where you're going yet.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build practical skills through free learning, guided sessions and resources designed for the real world.",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Put your learning into action through projects, challenges, mentorship and real-world experiences.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Take your next step — whether that's a job, further education, freelancing or starting something of your own.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="journey"
      className="bg-[#E9E4DA] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Your journey
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              You don't need
              <br />
              to have it all
              <br />
              <span className="font-serif italic font-normal">
                figured out.
              </span>
            </h2>

          </div>


          <div className="lg:pb-2">

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">
              Nirmaan is designed to meet you where you are
              and help you move forward — one step at a time.
            </p>

          </div>

        </div>


        {/* STEPS */}

        <div className="mt-20">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className="group grid border-t border-black/10 py-8 transition duration-300 hover:px-3 md:grid-cols-[100px_1fr_1.3fr] md:items-center md:gap-10 md:py-10"
            >

              {/* NUMBER */}

              <div className="mb-5 md:mb-0">

                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                  {step.number}
                </span>

              </div>


              {/* TITLE */}

              <div className="mb-5 md:mb-0">

                <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                  {step.title}
                </h3>

              </div>


              {/* DESCRIPTION */}

              <div className="flex items-start justify-between gap-6">

                <p className="max-w-lg text-sm leading-6 text-black/50 md:text-base md:leading-7">
                  {step.description}
                </p>

                <span className="hidden text-xl text-black/30 transition duration-300 group-hover:translate-x-1 group-hover:text-black md:block">
                  →
                </span>

              </div>

            </div>

          ))}

          {/* LAST BORDER */}

          <div className="border-t border-black/10" />

        </div>


        {/* JOURNEY STATEMENT */}

        <div className="mt-16 rounded-[2rem] bg-[#1D1D1B] px-7 py-10 text-white md:px-12 md:py-14">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                The Nirmaan philosophy
              </p>

              <h3 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">
                You don't have to change your entire life overnight.
                You just have to take the next step.
              </h3>

            </div>


            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 text-xl">
              →
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
