"use client";

import { useState } from "react";

import FormHeader from "@/components/FormHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { formsContent, indianStates } from "@/lib/content/forms";
import {
  currentStatusValues,
  registerContent,
  type RegisterErrorKey,
} from "@/lib/content/register";

// Errors are stored as keys (not sentences) so they switch language
// along with the rest of the page.

type Errors = Partial<Record<string, RegisterErrorKey>>;

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOs_jlzPywJLhk3YOAyjLO5s72jLTO-Es3v2xEvVfsH7NbG5i1_omfUQxw1-yXpy5S4A/exec";

export default function RegisterPage() {
  const { language } = useLanguage();
  const c = registerContent[language];
  const f = formsContent[language];

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    currentStatus: "",
    interests: "",
    goal: "",
  });

  // =========================
  // UPDATE FIELD
  // =========================

  const updateField = (field: string, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  };

  // =========================
  // STEP 1 VALIDATION
  // =========================

  const validateStep1 = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "nameRequired";
    }

    if (!formData.age) {
      newErrors.age = "ageRequired";
    } else {
      const age = Number(formData.age);

      if (age < 13 || age > 100) {
        newErrors.age = "ageInvalid";
      }
    }

    if (!formData.mobile) {
      newErrors.mobile = "mobileRequired";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "mobileInvalid";
    }

    if (!formData.email.trim()) {
      newErrors.email = "emailRequired";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "emailInvalid";
    }

    if (!formData.city.trim()) {
      newErrors.city = "cityRequired";
    }

    if (!formData.state) {
      newErrors.state = "stateRequired";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 2 VALIDATION
  // =========================

  const validateStep2 = () => {
    const newErrors: Errors = {};

    if (!formData.currentStatus) {
      newErrors.currentStatus = "statusRequired";
    }

    if (!formData.interests.trim()) {
      newErrors.interests = "interestsRequired";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 3 VALIDATION
  // =========================

  const validateStep3 = () => {
    const newErrors: Errors = {};

    if (!formData.goal.trim()) {
      newErrors.goal = "goalRequired";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // NEXT STEP
  // =========================

  const nextStep = () => {
    let isValid = false;

    if (step === 1) {
      isValid = validateStep1();
    }

    if (step === 2) {
      isValid = validateStep2();
    }

    if (isValid && step < 3) {
      setStep(step + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // PREVIOUS STEP
  // =========================

  const previousStep = () => {
    if (step > 1) {
      setErrors({});
      setStep(step - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // =========================
  // SUBMIT TO GOOGLE SHEETS
  // =========================

  const completeRegistration = async () => {
  if (!validateStep3()) {
    return;
  }

  if (isSubmitting) {
    return;
  }

  setIsSubmitting(true);

  try {
    const body = new URLSearchParams();

    body.append("name", formData.name.trim());
    body.append("age", formData.age);
    body.append("mobile", formData.mobile);
    body.append("email", formData.email.trim());
    body.append("city", formData.city.trim());
    body.append("state", formData.state);
    body.append("currentStatus", formData.currentStatus);
    body.append("interests", formData.interests.trim());
    body.append("goal", formData.goal.trim());

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    console.log("Registration submitted:", formData);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.error("Registration submission error:", error);

    alert(c.submitError);
  } finally {
    setIsSubmitting(false);
  }
};

  // =========================
  // SUCCESS SCREEN
  // =========================

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F8F6F1]">

        <FormHeader showBackLink={false} />


        {/* SUCCESS CONTENT */}

        <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center px-6 py-16">

          <div className="w-full rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E9E4DA]">

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
          MAIN
      ========================= */}

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">

        {/* INTRO */}

        <div className="mb-12">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            {c.startLabel}
          </p>

          <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">

            {c.titleLine1}

            <br />

            <span className="font-serif italic font-normal">
              {c.titleEmphasis}
            </span>

          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/50">

            {c.intro}

          </p>

        </div>


        {/* =========================
            PROGRESS
        ========================= */}

        <div className="mb-12">

          <div className="flex items-center gap-3">

            {[1, 2, 3].map((number) => (

              <div
                key={number}
                className={`h-1 flex-1 rounded-full transition duration-300 ${
                  number <= step
                    ? "bg-[#1D1D1B]"
                    : "bg-black/10"
                }`}
              />

            ))}

          </div>

          <div className="mt-3 flex justify-between text-xs text-black/35">

            {c.progress.map((label) => (
              <span key={label}>{label}</span>
            ))}

          </div>

        </div>


        {/* =========================
            FORM CARD
        ========================= */}

        <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm md:p-10">

          {/* =========================
              STEP 1
          ========================= */}

          {step === 1 && (

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                {c.step} 01
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                {c.step1Title}
              </h2>


              <div className="mt-8 space-y-6">

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {f.fullName}
                  </label>

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder={f.fullNamePlaceholder}
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.name
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.name]}
                    </p>
                  )}

                </div>


                {/* AGE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {c.age}
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.age}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(/\D/g, "");

                      updateField("age", value);

                    }}
                    placeholder={c.agePlaceholder}
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.age
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.age && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.age]}
                    </p>
                  )}

                </div>


                {/* MOBILE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {f.mobile}
                  </label>

                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(/\D/g, "");

                      updateField("mobile", value);

                    }}
                    placeholder={c.mobilePlaceholder}
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.mobile
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.mobile && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.mobile]}
                    </p>
                  )}

                </div>


                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {c.email}
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.email
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.email]}
                    </p>
                  )}

                </div>


                {/* CITY */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {f.city}
                  </label>

                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      updateField("city", e.target.value)
                    }
                    placeholder={c.cityPlaceholder}
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.city
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.city && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.city]}
                    </p>
                  )}

                </div>


                {/* STATE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    {f.state}
                  </label>

                  <select
                    value={formData.state}
                    onChange={(e) =>
                      updateField("state", e.target.value)
                    }
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.state
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
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

                  {errors.state && (
                    <p className="mt-2 text-xs text-red-500">
                      {c.errors[errors.state]}
                    </p>
                  )}

                </div>

              </div>

            </div>

          )}


          {/* =========================
              STEP 2
          ========================= */}

          {step === 2 && (

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                {c.step} 02
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                {c.step2Title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                {c.step2Text}
              </p>


              <div className="mt-8 grid gap-3">

                {currentStatusValues.map((option, index) => (

                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      updateField("currentStatus", option)
                    }
                    className={`rounded-xl border px-5 py-4 text-left text-sm transition ${
                      formData.currentStatus === option
                        ? "border-[#1D1D1B] bg-[#1D1D1B] text-white"
                        : "border-black/10 bg-[#F8F6F1] hover:border-black/25"
                    }`}
                  >
                    {c.statusLabels[index]}
                  </button>

                ))}

              </div>

              {errors.currentStatus && (
                <p className="mt-2 text-xs text-red-500">
                  {c.errors[errors.currentStatus]}
                </p>
              )}


              {/* INTERESTS */}

              <div className="mt-10">

                <label className="mb-2 block text-sm font-medium">
                  {c.interests}
                </label>

                <textarea
                  value={formData.interests}
                  onChange={(e) =>
                    updateField("interests", e.target.value)
                  }
                  placeholder={c.interestsPlaceholder}
                  rows={5}
                  className={`w-full resize-none rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                    errors.interests
                      ? "border-red-400"
                      : "border-black/10 focus:border-black/30"
                  }`}
                />

                {errors.interests && (
                  <p className="mt-2 text-xs text-red-500">
                    {c.errors[errors.interests]}
                  </p>
                )}

              </div>

            </div>

          )}


          {/* =========================
              STEP 3
          ========================= */}

          {step === 3 && (

            <div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                {c.step} 03
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                {c.step3Title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                {c.step3Text}
              </p>


              <div className="mt-8">

                <label className="mb-2 block text-sm font-medium">
                  {c.goal}
                </label>

                <textarea
                  value={formData.goal}
                  onChange={(e) =>
                    updateField("goal", e.target.value)
                  }
                  placeholder={c.goalPlaceholder}
                  rows={7}
                  className={`w-full resize-none rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                    errors.goal
                      ? "border-red-400"
                      : "border-black/10 focus:border-black/30"
                  }`}
                />

                {errors.goal && (
                  <p className="mt-2 text-xs text-red-500">
                    {c.errors[errors.goal]}
                  </p>
                )}

              </div>


              <div className="mt-7 rounded-xl bg-[#E9E4DA] p-5">

                <p className="text-sm leading-6 text-black/60">

                  <span className="font-medium text-black">
                    {c.rememberLabel}
                  </span>{" "}

                  {c.rememberText}

                </p>

              </div>

            </div>

          )}


          {/* =========================
              NAVIGATION
          ========================= */}

          <div className="mt-10 flex items-center justify-between border-t border-black/8 pt-6">

            {step > 1 ? (

              <button
                type="button"
                onClick={previousStep}
                className="text-sm font-medium text-black/50 transition hover:text-black"
              >
                {c.back}
              </button>

            ) : (

              <div />

            )}


            {step < 3 ? (

              <button
                type="button"
                onClick={nextStep}
                className="rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
              >
                {c.continue}
              </button>

            ) : (

              <button
                type="button"
                onClick={completeRegistration}
                disabled={isSubmitting}
                className={`rounded-full px-7 py-4 text-sm font-medium text-white transition duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-black/40"
                    : "bg-[#1D1D1B] hover:-translate-y-0.5 hover:bg-black"
                }`}
              >

                {isSubmitting ? f.submitting : c.complete}

              </button>

            )}

          </div>

        </div>


        {/* FOOTNOTE */}

        <p className="mt-8 text-center text-xs leading-5 text-black/30">

          {c.footnote}

        </p>

      </div>

    </main>
  );
}
