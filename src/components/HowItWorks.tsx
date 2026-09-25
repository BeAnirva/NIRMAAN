"use client";

import { useLanguage } from "./LanguageProvider";

const steps = [
  {
    number: "01",
  },
  {
    number: "02",
  },
  {
    number: "03",
  },
  {
    number: "04",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="journey"
      className="bg-[#E9E4DA] px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-2xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            {t.howItWorks.label}
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
            {t.howItWorks.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/50">
            {t.howItWorks.description}
          </p>

        </div>


        {/* STEPS */}

        <div className="mt-14 grid border-t border-black/10 md:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className={`py-7 md:px-6 md:py-8 ${
                index !== 0 ? "border-t md:border-l md:border-t-0" : ""
              } border-black/10`}
            >

              <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em]">
                {t.howItWorks.steps[index].title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                {t.howItWorks.steps[index].description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
