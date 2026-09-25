"use client";

import { useLanguage } from "./LanguageProvider";
import { storiesContent } from "@/lib/content/stories";

export default function Stories() {
  const { language } = useLanguage();
  const c = storiesContent[language];

  return (
    <section
      id="stories"
      className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              {c.label}
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">

              {c.titleLine1}
              <br />

              <span className="font-serif italic font-normal">
                {c.titleEmphasis}
              </span>

            </h2>

          </div>


          <p className="max-w-md text-sm leading-6 text-black/45 md:pb-2">

            {c.description}

          </p>

        </div>


        {/* FEATURED STORY */}

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#1D1D1B] text-white">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* VISUAL */}

            <div className="relative min-h-[380px] overflow-hidden bg-[#596653] p-8 md:min-h-[500px] md:p-12">

              {/* Decorative shapes */}

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5">

                <span className="text-3xl text-white/70">
                  ✦
                </span>

              </div>


              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">

                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {c.featuredLabel}
                </p>

              </div>

            </div>


            {/* STORY */}

            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">

              <div>

                <div className="flex items-center justify-between">

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    {c.comingSoon}
                  </span>

                  <span className="text-xs text-white/20">
                    01
                  </span>

                </div>


                <blockquote className="mt-16 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl lg:text-5xl">

                  "{c.featuredQuote}"

                </blockquote>

              </div>


              <div className="mt-16 border-t border-white/10 pt-6">

                <p className="text-sm font-medium">
                  {c.nextTitle}
                </p>

                <p className="mt-2 text-sm text-white/40">
                  {c.nextText}
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* STORY CARDS */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {c.stories.map((story, index) => (

            <div
              key={index}
              className="group rounded-[2rem] border border-black/8 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-8"
            >

              {/* TOP */}

              <div className="flex items-center justify-between">

                <span className="text-xs font-medium tracking-[0.2em] text-black/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-[#F3F0EA] px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-black/40">
                  {story.category}
                </span>

              </div>


              {/* QUOTE */}

              <p className="mt-12 text-lg font-medium leading-7 tracking-[-0.015em] text-black/75">
                "{story.quote}"
              </p>


              {/* PERSON */}

              <div className="mt-10 border-t border-black/8 pt-5">

                <p className="text-sm font-medium">
                  {story.name}
                </p>

                <p className="mt-1 text-xs text-black/35">
                  {story.detail}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM MESSAGE */}

        <div className="mt-16 text-center">

          <p className="mx-auto max-w-2xl text-2xl font-medium leading-tight tracking-[-0.025em] md:text-3xl">

            {c.bottomLine1}
            <br />

            <span className="font-serif italic font-normal text-black/50">
              {c.bottomEmphasis}
            </span>

          </p>

        </div>

      </div>
    </section>
  );
}
