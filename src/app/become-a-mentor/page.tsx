"use client";

import { useState } from "react";

import FormHeader from "@/components/FormHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { formsContent, indianStates } from "@/lib/content/forms";
import {
  becomeMentorContent,
  contributionValues,
  experienceValues,
  mentorStatusValues,
} from "@/lib/content/becomeMentor";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw2fjqMBTAndVVznzPG7Uce2ackDG3J8Nz9YsAhdWv4IodfBIELAhGuy7tLo4wTWNlnQw/exec";

export default function BecomeAMentor() {
  const { language, t } = useLanguage();
  const c = becomeMentorContent[language];
  const f = formsContent[language];

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contributions, setContributions] = useState<string[]>([]);

  const handleContributionChange = (option: string) => {
    setContributions((previous) => {
      if (previous.includes(option)) {
        return previous.filter((item) => item !== option);
      }

      return [...previous, option];
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams();

      body.append(
        "fullName",
        String(formData.get("fullName") || "").trim()
      );

      body.append(
        "email",
        String(formData.get("email") || "").trim()
      );

      body.append(
        "mobile",
        String(formData.get("mobile") || "").trim()
      );

      body.append(
        "city",
        String(formData.get("city") || "").trim()
      );

      body.append(
        "state",
        String(formData.get("state") || "")
      );

      body.append(
        "status",
        String(formData.get("status") || "")
      );

      body.append(
        "field",
        String(formData.get("field") || "").trim()
      );

      body.append(
        "role",
        String(formData.get("role") || "").trim()
      );

      body.append(
        "organization",
        String(formData.get("organization") || "").trim()
      );

      body.append(
        "contribution",
        contributions.join(", ")
      );

      body.append(
        "experience",
        String(formData.get("experience") || "")
      );

      body.append(
        "about",
        String(formData.get("about") || "").trim()
      );

      body.append(
        "linkedin",
        String(formData.get("linkedin") || "").trim()
      );

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      console.log("Mentor application submitted");

      setSubmitted(true);
      form.reset();
      setContributions([]);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(
        "Mentor application submission error:",
        error
      );

      alert(c.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F8F6F1]">

        <FormHeader showBackLink={false} />


        {/* SUCCESS */}

        <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center px-6 py-16">

          <div className="w-full rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE3D8]">

              <span className="text-2xl">
                ✓
              </span>

            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              {c.successLabel}
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              {c.successTitle}
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-black/50">
              {c.successText}
            </p>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
            >
              {f.backButton}
            </a>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      <FormHeader />


      {/* =========================
          HERO
      ========================= */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">

            {/* LEFT */}

            <div>

              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                {c.label}
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">

                {c.titleLine1}

                <br />

                <span className="font-serif italic font-normal">
                  {c.titleEmphasis}
                </span>

              </h1>

            </div>


            {/* RIGHT */}

            <div>

              <p className="max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8">
                {c.intro}
              </p>

            </div>

          </div>


          {/* =========================
              FORM AREA
          ========================= */}

          <div className="mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT MESSAGE */}

            <div className="relative overflow-hidden rounded-[2rem] bg-[#DDE3D8] p-8 md:p-10">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />

              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-black/10" />

              <div className="relative z-10 flex min-h-[500px] flex-col justify-between">

                <div>

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                    {c.communityLabel}
                  </p>

                </div>

                <div>

                  <p className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">

                    {c.messagePart1}

                    <br />
                    <br />

                    {c.messagePart2}

                  </p>

                  <div className="mt-8">

                    <span className="inline-flex rounded-full bg-black/10 px-4 py-2 text-xs font-medium text-black/55">
                      {c.tagline}
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <div className="rounded-[2rem] bg-white p-7 md:p-10">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                  {c.formLabel}
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  {c.formTitle}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                  {c.formText}
                </p>

              </div>


              <form
                className="mt-10 space-y-6"
                onSubmit={handleSubmit}
              >


                {/* FULL NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {f.fullName} <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder={f.fullNamePlaceholder}
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      {c.email} <span className="text-black/40">*</span>
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      {f.mobile} <span className="text-black/40">*</span>
                    </label>

                    <input
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>

                </div>


                {/* CITY + STATE */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      {f.city} <span className="text-black/40">*</span>
                    </label>

                    <input
                      name="city"
                      type="text"
                      required
                      placeholder={c.cityPlaceholder}
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      {f.state} <span className="text-black/40">*</span>
                    </label>

                    <select
                      name="state"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                    >

                      <option value="" disabled>
                        {f.selectState}
                      </option>

                      {indianStates.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label[language]}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>


                {/* COMMUNITY STATUS */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.statusLabel} <span className="text-black/40">*</span>
                  </label>

                  <select
                    name="status"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="" disabled>
                      {c.statusPlaceholder}
                    </option>

                    {mentorStatusValues.map((value, index) => (
                      <option key={value} value={value}>
                        {c.statusLabels[index]}
                      </option>
                    ))}

                  </select>

                </div>


                {/* FIELD */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.field} <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="field"
                    type="text"
                    required
                    placeholder={c.fieldPlaceholder}
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                  <p className="mt-2 text-xs leading-5 text-black/35">
                    {c.fieldHelp}
                  </p>

                </div>


                {/* CURRENT ROLE */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.role}{" "}
                    <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="role"
                    type="text"
                    required
                    placeholder={c.rolePlaceholder}
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* ORGANIZATION */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.organization}

                    <span className="ml-2 text-xs font-normal text-black/30">
                      {f.optional}
                    </span>

                  </label>

                  <input
                    name="organization"
                    type="text"
                    placeholder={c.organizationPlaceholder}
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* CONTRIBUTION */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-black/70">
                    {c.contribute}{" "}
                    <span className="text-black/40">*</span>
                  </label>

                  <p className="mb-4 text-xs text-black/40">
                    {c.contributeHelp}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {contributionValues.map((option, index) => (

                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-sm transition ${
                          contributions.includes(option)
                            ? "border-black bg-black/5"
                            : "border-black/10 bg-[#F8F6F1] hover:border-black/20"
                        }`}
                      >

                        <input
                          type="checkbox"
                          name="contribution"
                          value={option}
                          checked={contributions.includes(option)}
                          onChange={() =>
                            handleContributionChange(option)
                          }
                          className="h-4 w-4 accent-black"
                        />

                        <span className="text-black/60">
                          {c.contributionLabels[index]}
                        </span>

                      </label>

                    ))}

                  </div>

                  {contributions.length === 0 && (
                    <p className="mt-2 text-xs text-black/35">
                      {c.contributeRequired}
                    </p>
                  )}

                </div>


                {/* YEARS OF EXPERIENCE */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.experience}

                    <span className="ml-2 text-xs font-normal text-black/30">
                      {f.optional}
                    </span>

                  </label>

                  <select
                    name="experience"
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="">
                      {c.experiencePlaceholder}
                    </option>

                    {experienceValues.map((value, index) => (
                      <option key={value} value={value}>
                        {c.experienceLabels[index]}
                      </option>
                    ))}

                  </select>

                </div>


                {/* ABOUT */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.about}

                    <span className="ml-2 text-xs font-normal text-black/30">
                      {f.optional}
                    </span>

                  </label>

                  <textarea
                    name="about"
                    rows={5}
                    placeholder={c.aboutPlaceholder}
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* LINKEDIN */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    {c.linkedin}

                    <span className="ml-2 text-xs font-normal text-black/30">
                      {f.optional}
                    </span>

                  </label>

                  <input
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* SUBMIT */}

                <div className="pt-3">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-white transition duration-300 ${
                      isSubmitting
                        ? "cursor-not-allowed bg-black/40"
                        : "bg-[#1D1D1B] hover:-translate-y-1 hover:bg-black"
                    }`}
                  >

                    <span>
                      {isSubmitting ? f.submitting : c.submit}
                    </span>

                    {!isSubmitting && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}

                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-black/35">
                    {c.submitNote}
                  </p>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-black/5 px-6 py-10 md:px-10 lg:px-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <div className="text-xl font-bold tracking-[-0.04em]">
              NIRMAAN
            </div>

            <div className="mt-1 text-[9px] font-medium tracking-[0.25em] text-black/40">
              {t.nav.tagline}
            </div>

          </div>

          <a
            href="/"
            className="text-sm text-black/45 transition hover:text-black"
          >
            {f.backFooter}
          </a>

        </div>

      </footer>

    </main>
  );
}
