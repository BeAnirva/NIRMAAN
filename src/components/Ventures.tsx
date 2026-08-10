const ventureSteps = [
  {
    number: "01",
    title: "Explore Your Idea",
    description:
      "Turn your thoughts into a clear problem, idea or opportunity worth exploring.",
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Understand who your idea is for, what they need and whether your solution can create value.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Create a simple version of your idea and learn how to test, improve and communicate it.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Get guidance on taking your first real steps toward customers, revenue or further support.",
  },
];

const ventureSupport = [
  "Idea validation",
  "Market research",
  "Business model",
  "Basic finance",
  "Marketing",
  "Digital presence",
];

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="bg-[#1D1D1B] px-6 py-24 text-white md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Nirmaan Ventures
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              Have an idea?

              <br />

              Let's{" "}

              <span className="font-serif italic font-normal text-white/70">
                build it.
              </span>

            </h2>

          </div>


          <div className="flex items-end">

            <p className="max-w-xl text-base leading-7 text-white/50 md:text-lg md:leading-8">

              You don't need a business degree, a big team or
              a perfect plan to explore entrepreneurship.

              If you have an idea and the willingness to learn,
              Nirmaan can help you take the first step.

            </p>

          </div>

        </div>


        {/* BIG STATEMENT */}

        <div className="mt-20 border-y border-white/10 py-12 md:py-16">

          <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-5xl">

            An idea becomes an opportunity
            when you are willing to{" "}

            <span className="font-serif italic font-normal text-white/60">
              test it, learn from it and keep building.
            </span>

          </p>

        </div>


        {/* JOURNEY */}

        <div className="mt-16">

          <div className="mb-8 flex items-center justify-between">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              From idea to action
            </p>

            <span className="hidden text-xs text-white/25 md:block">
              One step at a time.
            </span>

          </div>


          <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

            {ventureSteps.map((step, index) => (

              <div
                key={step.number}
                className={`py-8 md:px-7 md:py-10 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >

                <span className="text-xs font-medium tracking-[0.2em] text-white/25">
                  {step.number}
                </span>


                <h3 className="mt-10 text-xl font-medium">
                  {step.title}
                </h3>


                <p className="mt-4 text-sm leading-6 text-white/45">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* SUPPORT GRID */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT CARD */}

          <div className="rounded-[2rem] bg-[#2A2A28] p-8 md:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              What we can help with
            </p>

            <h3 className="mt-5 text-2xl font-medium tracking-[-0.025em]">
              You bring the curiosity.
              We'll help with the process.
            </h3>


            <div className="mt-8 flex flex-wrap gap-2">

              {ventureSupport.map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/55"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>


          {/* RIGHT CARD */}

          <div className="rounded-[2rem] bg-[#DDE3D8] p-8 text-[#1D1D1B] md:p-10">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                  Have an idea?
                </p>

                <h3 className="mt-4 max-w-lg text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">

                  Your idea doesn't have to stay in your notebook.

                </h3>

              </div>


              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg">
                ↗
              </div>

            </div>


            <p className="mt-6 max-w-xl text-sm leading-6 text-black/50">

              Start with a conversation. Tell us what you're thinking,
              what you've tried and what you'd like to build.

            </p>


            <a
              href="#start"
              className="mt-8 inline-flex items-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Tell Us About Your Idea →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
