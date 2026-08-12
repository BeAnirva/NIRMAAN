"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Nirmaan really free?",
    answer:
      "Yes. Registration and access to Nirmaan's core learning, guidance and support are completely free.",
  },
  {
    question: "Who can register?",
    answer:
      "Anyone who wants to learn, develop practical skills, explore career opportunities or work towards building something of their own can register.",
  },
  {
    question: "What if I don't know what I want to do yet?",
    answer:
      "That's completely okay. You don't need to have a clear career or business plan before joining. Nirmaan is designed to help you understand your options and figure out your next step.",
  },
  {
    question: "What kind of support will I get?",
    answer:
      "Depending on your goals, Nirmaan can help you explore learning resources, practical skills, career opportunities, mentorship and entrepreneurship.",
  },
  {
    question: "Do I need any prior experience or qualifications?",
    answer:
      "No. You can start from where you are. Your current experience, education and skills will help us understand how best to guide you.",
  },
  {
    question: "How does registration work?",
    answer:
      "You'll answer a few simple questions about yourself, your current situation and what you'd like to achieve. Once you register, we'll use that information to understand how Nirmaan can support you.",
  },
  {
    question: "How soon will someone contact me?",
    answer:
      "After registration, our team will review your information and reach out regarding the next steps.",
  },
  {
    question: "Can I register if I'm still studying?",
    answer:
      "Yes. Students are welcome to register and explore learning, career and skill-building opportunities.",
  },
];

export default function FAQ() {
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
            Questions
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Before you
            <br />
            <span className="font-serif italic font-normal">
              register.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/50 md:text-lg md:leading-8">
            A few things you might want to know before taking your first
            step with Nirmaan.
          </p>

        </div>


        {/* FAQ LIST */}

        <div className="mt-16 border-t border-black/10">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
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
                Still unsure?
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em] md:text-3xl">
                You don't need to have all the answers.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 md:text-base">
                Start where you are. We'll help you figure out the next step.
              </p>

            </div>


            <a
              href="/register"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Start Your Journey →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
