"use client";

import { useLanguage } from "./LanguageProvider";
import { learningContent } from "@/lib/content/learning";

export default function Learning() {
  const { language } = useLanguage();
  const c = learningContent[language];

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
              {c.label}
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {c.titleLine1}
              <br />
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


        {/* LEARNING GRID */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {c.areas.map((area, index) => (

            <div
              key={index}
              className="group rounded-[1.75rem] border border-black/8 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-8"
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                  {String(index + 1).padStart(2, "0")}
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
              {c.messageLabel}
            </p>

            <h3 className="mt-4 max-w-xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">
              {c.messageTitle}
            </h3>

          </div>


          <div className="md:justify-self-end">

            <div
  className="inline-flex w-fit shrink-0 items-center rounded-full border border-black/10 bg-black/5 px-7 py-4 text-sm font-medium text-black/45"
>
  {c.launchingSoon}
</div>

          </div>

        </div>

      </div>
    </section>
  );
}
