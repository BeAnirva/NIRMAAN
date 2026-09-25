"use client";

import { useLanguage } from "./LanguageProvider";
import { mentorshipContent } from "@/lib/content/mentorship";

export default function Mentorship() {
  const { language } = useLanguage();
  const c = mentorshipContent[language];

  return (
    <section className="bg-[#DDE3D8] px-6 py-24 md:px-10 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              {c.label}
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              {c.titleLine1}
              <br />

              {c.titleLine2}
              <br />

              <span className="font-serif italic font-normal">
                {c.titleEmphasis}
              </span>

            </h2>

          </div>


          <div className="flex items-end">

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">

              {c.description}

            </p>

          </div>

        </div>


        {/* MAIN VISUAL */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LARGE CARD */}

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#B9C4B3] p-8 md:p-12">

            {/* Decorative circles */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />

            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-black/10" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              {/* TOP ROW */}

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                  {c.communityLabel}
                </span>


                {/* CLICKABLE ARROW */}

                <a
                  href="/become-a-mentor"
                  aria-label={c.arrowLabel}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black/20"
                >
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

              </div>


              {/* MESSAGE */}

              <div>

                <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">

                  {c.message}

                </p>


                <div className="mt-8">

                  <span className="inline-flex rounded-full bg-black/10 px-4 py-2 text-xs font-medium text-black/55">
                    {c.tagline}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* WAYS TO CONTRIBUTE */}

          <div className="rounded-[2rem] bg-white p-7 md:p-9">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              {c.waysLabel}
            </p>


            <div className="mt-8">

              {c.ways.map((way, index) => (

                <div
                  key={index}
                  className={`py-6 ${
                    index !== c.ways.length - 1
                      ? "border-b border-black/8"
                      : ""
                  }`}
                >

                  <div className="flex gap-5">

                    <span className="pt-1 text-xs font-medium tracking-[0.15em] text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>

                      <h3 className="text-lg font-medium">
                        {way.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black/50">
                        {way.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* FIELDS */}

        <div className="mt-12 rounded-[2rem] bg-[#F8F6F1] p-7 md:p-10">

          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                {c.fieldsLabel}
              </p>

              <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">

                {c.fieldsTitleLine1}
                <br />
                {c.fieldsTitleLine2}

              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/50">

                {c.fieldsDescription}

              </p>

            </div>


            <div className="flex flex-wrap gap-3">

              {c.fields.map((field) => (

                <span
                  key={field}
                  className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black/60"
                >
                  {field}
                </span>

              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM MESSAGE */}

        <div className="mt-16 max-w-3xl">

          <p className="text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">

            {c.bottomTitle}

            <br />

            <span className="font-serif italic font-normal">
              {c.bottomEmphasis}
            </span>

          </p>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-black/45 md:text-base md:leading-7">

            {c.bottomDescription}

          </p>

        </div>


        {/* CTA */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm leading-6 text-black/40">
            {c.ctaText}
          </p>

          <a
            href="/become-a-mentor"
            className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
          >
            {c.ctaButton}
          </a>

        </div>

      </div>
    </section>
  );
}
