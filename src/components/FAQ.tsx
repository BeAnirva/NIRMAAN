"use client";

import { useState } from "react";

import { useLanguage } from "./LanguageProvider";
import { faqContent } from "@/lib/content/faq";

export default function FAQ() {
  const { language } = useLanguage();
  const c = faqContent[language];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F6F1] px-6 py-24 md:px-10 md:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-3xl">

          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            {c.label}
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
            {c.titleLine1}
            <br />
            <span className="font-serif italic font-normal">
              {c.titleEmphasis}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/50 md:text-lg md:leading-8">
            {c.description}
          </p>

        </div>


        {/* FAQ LIST */}

        <div className="mt-16 border-t border-black/10">

          {c.faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-black/10"
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-9"
                  aria-expanded={isOpen}
                >

                  <span className="text-xl font-medium tracking-[-0.02em] md:text-2xl lg:text-3xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-xl font-light transition duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#1D1D1B] text-white"
                        : "bg-transparent text-[#356B52]"
                    }`}
                  >
                    +
                  </span>

                </button>


                {/* ANSWER */}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="max-w-3xl pb-8 pr-14 text-base leading-7 text-black/55 md:text-lg md:leading-8">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* BOTTOM CTA */}

        <div className="mt-16 rounded-[2rem] bg-[#E9E4DA] px-7 py-10 md:px-12 md:py-14">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                {c.stillUnsure}
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                {c.bottomTitle}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 md:text-base">
                {c.bottomText}
              </p>

            </div>


            <a
              href="/register"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              {c.button}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
