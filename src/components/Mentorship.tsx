const mentorshipPoints = [
  {
    number: "01",
    title: "Someone to listen",
    description:
      "Talk through your questions, challenges and ideas with someone who is willing to understand your journey.",
  },
  {
    number: "02",
    title: "Someone to guide",
    description:
      "Get practical advice about learning, careers, skills, higher education and the choices ahead of you.",
  },
  {
    number: "03",
    title: "Someone to challenge you",
    description:
      "A good mentor doesn't just give answers. They help you think bigger, build confidence and take action.",
  },
];

export default function Mentorship() {
  return (
    <section
      className="bg-[#DDE3D8] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Mentorship
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              You don't have to
              <br />

              figure everything
              <br />

              <span className="font-serif italic font-normal">
                out alone.
              </span>

            </h2>

          </div>


          <div className="flex items-end">

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">

              Learning becomes more powerful when you have someone
              to ask questions, share ideas with and learn from.

              Nirmaan connects you with people who can help you
              move forward with greater clarity and confidence.

            </p>

          </div>

        </div>


        {/* MENTORSHIP VISUAL */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LARGE VISUAL CARD */}

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#B9C4B3] p-8 md:p-12">

            {/* Decorative circles */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />

            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-black/10" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                  Nirmaan Mentors
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                  ↗
                </span>

              </div>


              <div>

                <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">

                  Sometimes the right
                  conversation can change
                  the direction you're taking.

                </p>

                <div className="mt-8 flex items-center gap-3">

                  <div className="flex -space-x-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#B9C4B3] bg-[#E5D5C0] text-xs">
                      M
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#B9C4B3] bg-[#C9D4DD] text-xs">
                      A
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#B9C4B3] bg-[#D8C7D8] text-xs">
                      R
                    </div>

                  </div>

                  <span className="text-xs text-black/45">
                    Learn from people who care.
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* MENTORSHIP POINTS */}

          <div className="rounded-[2rem] bg-white p-7 md:p-9">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              What mentorship means
            </p>


            <div className="mt-8">

              {mentorshipPoints.map((point, index) => (

                <div
                  key={point.number}
                  className={`py-6 ${
                    index !== mentorshipPoints.length - 1
                      ? "border-b border-black/8"
                      : ""
                  }`}
                >

                  <div className="flex gap-5">

                    <span className="pt-1 text-xs font-medium tracking-[0.15em] text-black/25">
                      {point.number}
                    </span>

                    <div>

                      <h3 className="text-lg font-medium">
                        {point.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/50">
                        {point.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM CTA */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-black/45">

            Whether you need career guidance, help with a project
            or simply someone to talk through an idea with,
            mentorship starts with a conversation.

          </p>

          <a
            href="#start"
            className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
          >
            Find Your Mentor →
          </a>

        </div>

      </div>
    </section>
  );
}
