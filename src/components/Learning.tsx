const learningAreas = [
  {
    number: "01",
    title: "Digital Skills",
    description:
      "Build confidence with the digital tools used in education, work and everyday life.",
    tags: ["Computer Basics", "Google Workspace", "Digital Tools"],
  },
  {
    number: "02",
    title: "Professional Skills",
    description:
      "Develop the communication and workplace skills that help you work with confidence.",
    tags: ["Communication", "English", "Professional Etiquette"],
  },
  {
    number: "03",
    title: "Career Skills",
    description:
      "Learn how to present yourself, search for opportunities and prepare for the workplace.",
    tags: ["Resume", "Interviews", "Job Search"],
  },
  {
    number: "04",
    title: "Technology & AI",
    description:
      "Explore modern technology and AI tools that can make you more productive and future-ready.",
    tags: ["AI Tools", "Technology", "Productivity"],
  },
  {
    number: "05",
    title: "Financial Skills",
    description:
      "Understand the basics of managing money and making informed financial decisions.",
    tags: ["Money Basics", "Saving", "Planning"],
  },
  {
    number: "06",
    title: "Entrepreneurship",
    description:
      "Learn the fundamentals of turning an idea into something people can use and value.",
    tags: ["Business Ideas", "Marketing", "Business Basics"],
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Learn & upskill
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Skills that
              <br />
              <span className="font-serif italic font-normal">
                move you forward.
              </span>
            </h2>

          </div>


          <div>

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">
              Learn practical skills that can help you in education,
              employment, entrepreneurship and everyday life.
            </p>

          </div>

        </div>


        {/* LEARNING GRID */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {learningAreas.map((area) => (

            <div
              key={area.number}
              className="group rounded-[1.75rem] border border-black/8 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-8"
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                  {area.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 text-sm text-black/35 transition duration-300 group-hover:border-black/20 group-hover:bg-[#1D1D1B] group-hover:text-white">
                  +
                </span>

              </div>


              {/* TITLE */}

              <h3 className="mt-12 text-2xl font-medium tracking-[-0.025em]">
                {area.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-4 text-sm leading-6 text-black/50">
                {area.description}
              </p>


              {/* TAGS */}

              <div className="mt-7 flex flex-wrap gap-2">

                {area.tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full bg-[#F3F0EA] px-3 py-1.5 text-[11px] font-medium text-black/45"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* LEARNING MESSAGE */}

        <div className="mt-16 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              Learning at Nirmaan
            </p>

            <h3 className="mt-4 max-w-xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">
              You don't need to be an expert.
              You just need to be willing to learn.
            </h3>

          </div>


          <div className="md:justify-self-end">

            <div
  className="inline-flex w-fit shrink-0 items-center rounded-full border border-black/10 bg-black/5 px-7 py-4 text-sm font-medium text-black/45"
>
  Launching Soon
</div>

          </div>

        </div>

      </div>
    </section>
  );
}
