"use client";

import { useLanguage } from "./LanguageProvider";
import { careerContent } from "@/lib/content/career";

export default function Career() {
  const { language } = useLanguage();
  const c = careerContent[language];

  return (
    <section
      className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              {c.label}
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              {c.titleLine1}
              <br />

              {c.titleLine2}

              <span className="font-serif italic font-normal">
                {c.titleEmphasis}
              </span>

            </h2>

          </div>


          <div>

            <p className="max-w-xl text-base leading-7 text-black/55 md:text-lg md:leading-8">

              {c.description}

            </p>

          </div>

        </div>


        {/* CAREER JOURNEY */}

        <div className="mt-20 rounded-[2rem] bg-[#1D1D1B] p-7 text-white md:p-12 lg:p-14">

          {/* TOP */}

          <div className="flex flex-col gap-5 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                {c.journeyLabel}
              </p>

              <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                {c.journeyTitle}
              </h3>

            </div>

            <span className="text-sm text-white/30">
              {c.journeyNote}
            </span>

          </div>


          {/* STEPS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {c.steps.map((step, index) => (

              <div
                key={index}
                className={`relative py-10 md:px-7 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >

                {/* NUMBER */}

                <div className="flex items-center justify-between">

                  <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index < c.steps.length - 1 && (
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
                  {c.profileLabel}
                </p>

                <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
                  {c.profileTitle}
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
                  {c.profileItems[0]}
                </span>

              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F5F2EC] p-4">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs">
                  ✓
                </span>

                <span className="text-sm text-black/60">
                  {c.profileItems[1]}
                </span>

              </div>


              <div className="flex items-center gap-3 rounded-xl bg-[#F5F2EC] p-4">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs">
                  ✓
                </span>

                <span className="text-sm text-black/60">
                  {c.profileItems[2]}
                </span>

              </div>

            </div>

          </div>


          {/* OPPORTUNITIES */}

          <div className="rounded-[2rem] bg-[#E9E4DA] p-8 md:p-10">

            <p className="text-xs uppercase tracking-[0.2em] text-black/30">
              {c.opportunitiesLabel}
            </p>

            <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em]">
              {c.opportunitiesTitle}
            </h3>


            <p className="mt-5 max-w-md text-sm leading-6 text-black/50">
              {c.opportunitiesDescription}
            </p>


            <div className="mt-8 flex flex-wrap gap-2">

              {c.opportunityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-4 py-2 text-xs text-black/50"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-black/40">
            {c.bottomText}
          </p>

          <div
  className="inline-flex w-fit shrink-0 items-center rounded-full border border-black/10 bg-black/5 px-7 py-4 text-sm font-medium text-black/45"
>
  {c.launchingSoon}
</div>

        </div>

      </div>
    </section>
  );
}
