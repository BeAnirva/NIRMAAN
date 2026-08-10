const paths = [
  {
    number: "01",
    title: "Build a Career",
    description:
      "Develop practical skills, prepare for interviews, build your profile and discover opportunities that match your strengths.",
    link: "Explore Career →",
  },
  {
    number: "02",
    title: "Learn & Upskill",
    description:
      "Learn skills that matter in the real world — from communication and digital tools to technology and professional skills.",
    link: "Explore Learning →",
  },
  {
    number: "03",
    title: "Build a Venture",
    description:
      "Have an idea? Get guidance on validating it, understanding your market and taking your first steps as an entrepreneur.",
    link: "Explore Ventures →",
  },
];

export default function Paths() {
  return (
    <section
      id="programs"
      className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}

        <div className="max-w-3xl">

          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            Choose your path
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Where do you want
            <br />
            to go from here?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
            You don't need to have everything figured out.
            Choose where you want to begin, and we'll help you
            take the next step.
          </p>

        </div>


        {/* PATH CARDS */}

        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {paths.map((path) => (

            <div
              key={path.number}
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[2rem] border border-black/8 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 md:p-9"
            >

              {/* NUMBER */}

              <div className="flex items-start justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                  {path.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition duration-300 group-hover:bg-[#1D1D1B] group-hover:text-white">
                  ↗
                </div>

              </div>


              {/* CONTENT */}

              <div>

                <h3 className="text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                  {path.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-black/50 md:text-base md:leading-7">
                  {path.description}
                </p>

              </div>


              {/* LINK */}

              <div className="mt-8 border-t border-black/8 pt-5">

                <span className="text-sm font-medium">
                  {path.link}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM NOTE */}

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-black/40">
            Not sure which path is right for you?
          </p>

          <a
            href="#start"
            className="text-sm font-medium underline underline-offset-4 transition hover:text-black/60"
          >
            Help me find my path →
          </a>

        </div>

      </div>
    </section>
  );
}
