export default function AboutNirmaan() {
  return (
    <section
      id="about"
      className="bg-[#F8F6F1] px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.5fr] md:items-end">

          {/* LABEL */}

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              What is Nirmaan?
            </p>
          </div>


          {/* CONTENT */}

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              A place to discover your strengths,
              build your skills and create a future
              <span className="font-serif italic font-normal">
                {" "}you can be proud of.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 md:text-lg md:leading-8">
              Nirmaan gives you access to free learning, practical
              guidance and people who believe in your potential —
              whether you're looking for a career or want to build
              something of your own.
            </p>

            <a
              href="/#journey"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition hover:text-black/60"
            >
              See how Nirmaan works
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
