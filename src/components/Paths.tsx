const paths = [
  {
    number: "01",
    title: "Learn",
    description: "Build practical skills for the real world.",
    link: "/learning",
  },
  {
    number: "02",
    title: "Work",
    description: "Become job-ready and discover opportunities.",
    link: "/career",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn your ideas into something of your own.",
    link: "/ventures",
  },
];

export default function Paths() {
  return (
    <section
      id="programs"
      className="bg-[#F8F6F1] px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* INTRO */}

        <div className="max-w-2xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            Your possibilities
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
            Start where you are.
            <br />
            <span className="font-serif italic font-normal">
              Go where you want.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/50">
            Whether you want to learn, find a career or build something
            of your own, Nirmaan gives you a place to start.
          </p>

        </div>


        {/* PATHS */}

        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {paths.map((path) => (

            <a
              key={path.number}
              href={path.link}
              className="group rounded-[1.5rem] border border-black/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-7"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                  {path.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm transition duration-300 group-hover:bg-[#1D1D1B] group-hover:text-white">
                  ↗
                </span>

              </div>


              <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                {path.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-black/50">
                {path.description}
              </p>


              <div className="mt-7 border-t border-black/8 pt-4">

                <span className="text-sm font-medium">
                  Explore →
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}
