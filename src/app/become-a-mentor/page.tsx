export default function BecomeAMentor() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* NAVIGATION */}

      <nav className="border-b border-black/5 bg-[#F8F6F1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

          <a href="/" className="group">
            <div className="text-2xl font-bold tracking-[-0.04em]">
              NIRMAAN
            </div>

            <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
              LEARN • BUILD • BECOME
            </div>
          </a>

          <a
            href="/"
            className="text-sm text-black/60 transition hover:text-black"
          >
            ← Back to Nirmaan
          </a>

        </div>
      </nav>


      {/* HERO */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">

            {/* LEFT */}

            <div>

              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                Become a Mentor
              </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">

  Heroes don't always
  <br />

  <span className="font-serif italic font-normal">
    wear capes.
  </span>

</h1>
            </div>


            {/* RIGHT */}

            <div>

              <p className="max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8">

                You've learned things that someone else is just
                beginning to figure out.

                Nirmaan gives you a space to share your experience,
                guide young people and contribute to someone's
                next step.

              </p>

            </div>

          </div>


          {/* FORM AREA */}

          <div className="mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT MESSAGE */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#DDE3D8] p-8 md:p-10">

              {/* Decorative circles */}

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />

              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-black/10" />


              <div className="relative z-10 flex min-h-[500px] flex-col justify-between">

                <div>

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                    The Nirmaan Community
                  </p>

                </div>


                <div>

                  <p className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">

                    You don't need to
                    have all the answers.

                    <br />
                    <br />

                    Sometimes, sharing
                    what you've already
                    learned is enough to
                    help someone move
                    forward.

                  </p>

                  <div className="mt-8">

                    <span className="inline-flex rounded-full bg-black/10 px-4 py-2 text-xs font-medium text-black/55">
                      Share • Guide • Inspire
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="rounded-[2rem] bg-white p-7 md:p-10">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                  Mentor Application
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  Tell us a little about yourself.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                  This helps us understand your experience and how
                  you would like to contribute to the Nirmaan community.
                </p>

              </div>


              <form className="mt-10 space-y-6">

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>

                </div>


                {/* ROLE + ORGANIZATION */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      Current Role / Profession
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. HR Manager"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      Organization
                    </label>

                    <input
                      type="text"
                      placeholder="Company / Organization"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>

                </div>


                {/* EXPERIENCE */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Years of Experience
                  </label>

                  <select
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="">
                      Select experience
                    </option>

                    <option value="0-1">
                      Less than 1 year
                    </option>

                    <option value="1-3">
                      1–3 years
                    </option>

                    <option value="3-5">
                      3–5 years
                    </option>

                    <option value="5-10">
                      5–10 years
                    </option>

                    <option value="10+">
                      10+ years
                    </option>

                  </select>

                </div>


                {/* FIELD */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Your Field
                  </label>

                  <select
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="">
                      Select your field
                    </option>

                    <option>Technology</option>
                    <option>HR & Recruitment</option>
                    <option>Marketing & Sales</option>
                    <option>Finance</option>
                    <option>Agriculture</option>
                    <option>Design</option>
                    <option>Entrepreneurship</option>
                    <option>Education</option>
                    <option>Healthcare</option>
                    <option>Other</option>

                  </select>

                </div>


                {/* CONTRIBUTION */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-black/70">
                    How would you like to contribute?
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {[
                      "1:1 Mentoring",
                      "Career Guidance",
                      "Workshops",
                      "Skill Sessions",
                      "Project Guidance",
                      "Community Sessions",
                    ].map((option) => (

                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 transition hover:border-black/20"
                      >

                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-black"
                        />

                        {option}

                      </label>

                    ))}

                  </div>

                </div>


                {/* ABOUT */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Tell us about yourself
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your experience, what you know, and what you'd like to share with the Nirmaan community."
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* LINKEDIN */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    LinkedIn / Portfolio
                  </label>

                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* SUBMIT */}

                <div className="pt-3">

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
                  >

                    <span>
                      Submit Mentor Application
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-black/35">
                    We'll review your application and get back to you.
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-black/5 px-6 py-10 md:px-10 lg:px-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <div className="text-xl font-bold tracking-[-0.04em]">
              NIRMAAN
            </div>

            <div className="mt-1 text-[9px] font-medium tracking-[0.25em] text-black/40">
              LEARN • BUILD • BECOME
            </div>

          </div>


          <a
            href="/"
            className="text-sm text-black/45 transition hover:text-black"
          >
            Back to Nirmaan →
          </a>

        </div>

      </footer>

    </main>
  );
}
