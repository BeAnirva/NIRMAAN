"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzOs_jlzPywJLhk3YOAyjLO5s72jLTO-Es3v2xEvVfsH7NbG5i1_omfUQxw1-yXpy5S4A/exec";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
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
      [field]: "",
    }));
  };

  // =========================
  // STEP 1 VALIDATION
  // =========================

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.age) {
      newErrors.age = "Please enter your age.";
    } else {
      const age = Number(formData.age);

      if (age < 13 || age > 100) {
        newErrors.age = "Please enter a valid age.";
      }
    }

    if (!formData.mobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Mobile number must contain exactly 10 digits.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 2 VALIDATION
  // =========================

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.currentStatus) {
      newErrors.currentStatus =
        "Please select where you are right now.";
    }

    if (!formData.interests.trim()) {
      newErrors.interests =
        "Please tell us a little about your interests.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 3 VALIDATION
  // =========================

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.goal.trim()) {
      newErrors.goal =
        "Please tell us what you would like to achieve.";
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

      body.append("name", formData.name);
      body.append("age", formData.age);
      body.append("mobile", formData.mobile);
      body.append("email", formData.email);
      body.append("city", formData.city);
      body.append("state", formData.state);
      body.append("currentStatus", formData.currentStatus);
      body.append("interests", formData.interests);
      body.append("goal", formData.goal);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      // Google Apps Script receives the request successfully.
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Registration submission error:", error);

      alert(
        "Something went wrong while submitting your registration. Please try again."
      );
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

        {/* NAVIGATION */}

        <header className="border-b border-black/5 bg-[#F8F6F1]/90">

          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

            <a href="/" className="group">

              <div className="text-2xl font-bold tracking-[-0.04em]">
                NIRMAAN
              </div>

              <div className="mt-0.5 text-[9px] font-medium tracking-[0.25em] text-black/45">
                LEARN • BUILD • BECOME
              </div>

            </a>

          </nav>

        </header>


        {/* SUCCESS CONTENT */}

        <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center px-6 py-16">

          <div className="w-full rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E9E4DA]">

              <span className="text-2xl">
                ✓
              </span>

            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Registration complete
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">

              You're on your way.

            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-black/50">

              Thank you for registering with Nirmaan. We've received your
              information and will be in touch with you soon.

            </p>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#1D1D1B] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
            >
              Back to Nirmaan
            </a>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="border-b border-black/5 bg-[#F8F6F1]/90">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

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
            className="text-sm text-black/50 transition hover:text-black"
          >
            ← Back to Nirmaan
          </a>

        </nav>

      </header>


      {/* =========================
          MAIN
      ========================= */}

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">

        {/* INTRO */}

        <div className="mb-12">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            Start your journey
          </p>

          <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">

            Let's get to know

            <br />

            <span className="font-serif italic font-normal">
              you.
            </span>

          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/50">

            There are no right or wrong answers. Tell us a little about
            yourself so we can understand how Nirmaan can support you.

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

            <span>About You</span>
            <span>Your Direction</span>
            <span>Your Goals</span>

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
                Step 01
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Tell us about yourself
              </h2>


              <div className="mt-8 space-y-6">

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder="Your full name"
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.name
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}

                </div>


                {/* AGE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Age
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
                    placeholder="Your age"
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.age
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.age && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.age}
                    </p>
                  )}

                </div>


                {/* MOBILE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Mobile Number
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
                    placeholder="10-digit mobile number"
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.mobile
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.mobile && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.mobile}
                    </p>
                  )}

                </div>


                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Email Address
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
                      {errors.email}
                    </p>
                  )}

                </div>


                {/* CITY */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    City
                  </label>

                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      updateField("city", e.target.value)
                    }
                    placeholder="Where are you based?"
                    className={`w-full rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                      errors.city
                        ? "border-red-400"
                        : "border-black/10 focus:border-black/30"
                    }`}
                  />

                  {errors.city && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.city}
                    </p>
                  )}

                </div>


                {/* STATE */}

                <div>

                  <label className="mb-2 block text-sm font-medium">
                    State
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
                      Select your state
                    </option>

                    <option value="Andhra Pradesh">
                      Andhra Pradesh
                    </option>

                    <option value="Arunachal Pradesh">
                      Arunachal Pradesh
                    </option>

                    <option value="Assam">
                      Assam
                    </option>

                    <option value="Bihar">
                      Bihar
                    </option>

                    <option value="Chhattisgarh">
                      Chhattisgarh
                    </option>

                    <option value="Goa">
                      Goa
                    </option>

                    <option value="Gujarat">
                      Gujarat
                    </option>

                    <option value="Haryana">
                      Haryana
                    </option>

                    <option value="Himachal Pradesh">
                      Himachal Pradesh
                    </option>

                    <option value="Jharkhand">
                      Jharkhand
                    </option>

                    <option value="Karnataka">
                      Karnataka
                    </option>

                    <option value="Kerala">
                      Kerala
                    </option>

                    <option value="Madhya Pradesh">
                      Madhya Pradesh
                    </option>

                    <option value="Maharashtra">
                      Maharashtra
                    </option>

                    <option value="Manipur">
                      Manipur
                    </option>

                    <option value="Meghalaya">
                      Meghalaya
                    </option>

                    <option value="Mizoram">
                      Mizoram
                    </option>

                    <option value="Nagaland">
                      Nagaland
                    </option>

                    <option value="Odisha">
                      Odisha
                    </option>

                    <option value="Punjab">
                      Punjab
                    </option>

                    <option value="Rajasthan">
                      Rajasthan
                    </option>

                    <option value="Sikkim">
                      Sikkim
                    </option>

                    <option value="Tamil Nadu">
                      Tamil Nadu
                    </option>

                    <option value="Telangana">
                      Telangana
                    </option>

                    <option value="Tripura">
                      Tripura
                    </option>

                    <option value="Uttar Pradesh">
                      Uttar Pradesh
                    </option>

                    <option value="Uttarakhand">
                      Uttarakhand
                    </option>

                    <option value="West Bengal">
                      West Bengal
                    </option>

                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>

                    <option value="Chandigarh">
                      Chandigarh
                    </option>

                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>

                    <option value="Delhi">
                      Delhi
                    </option>

                    <option value="Jammu and Kashmir">
                      Jammu and Kashmir
                    </option>

                    <option value="Ladakh">
                      Ladakh
                    </option>

                    <option value="Lakshadweep">
                      Lakshadweep
                    </option>

                    <option value="Puducherry">
                      Puducherry
                    </option>

                  </select>

                  {errors.state && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.state}
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
                Step 02
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Where are you right now?
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Choose the option that feels closest to where you are today.
              </p>


              <div className="mt-8 grid gap-3">

                {[
                  "I'm studying",
                  "I'm looking for work",
                  "I'm currently working",
                  "I want to start something of my own",
                  "I'm not sure yet",
                ].map((option) => (

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
                    {option}
                  </button>

                ))}

              </div>

              {errors.currentStatus && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.currentStatus}
                </p>
              )}


              {/* INTERESTS */}

              <div className="mt-10">

                <label className="mb-2 block text-sm font-medium">
                  What are you most interested in?
                </label>

                <textarea
                  value={formData.interests}
                  onChange={(e) =>
                    updateField("interests", e.target.value)
                  }
                  placeholder="Tell us about your interests, skills or things you'd like to learn..."
                  rows={5}
                  className={`w-full resize-none rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                    errors.interests
                      ? "border-red-400"
                      : "border-black/10 focus:border-black/30"
                  }`}
                />

                {errors.interests && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.interests}
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
                Step 03
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                Where would you like to go?
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                You don't need to have a perfect plan. Just tell us what
                you're hoping to work towards.
              </p>


              <div className="mt-8">

                <label className="mb-2 block text-sm font-medium">
                  What would you like to achieve?
                </label>

                <textarea
                  value={formData.goal}
                  onChange={(e) =>
                    updateField("goal", e.target.value)
                  }
                  placeholder="For example: get a job, learn a new skill, start a business, become financially independent..."
                  rows={7}
                  className={`w-full resize-none rounded-xl border bg-[#F8F6F1] px-4 py-4 text-sm outline-none transition ${
                    errors.goal
                      ? "border-red-400"
                      : "border-black/10 focus:border-black/30"
                  }`}
                />

                {errors.goal && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.goal}
                  </p>
                )}

              </div>


              <div className="mt-7 rounded-xl bg-[#E9E4DA] p-5">

                <p className="text-sm leading-6 text-black/60">

                  <span className="font-medium text-black">
                    Remember:
                  </span>{" "}

                  You don't need to know exactly where you're going.
                  Nirmaan is here to help you figure out the next step.

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
                ← Back
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
                Continue →
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

                {isSubmitting
                  ? "Submitting..."
                  : "Complete Registration →"}

              </button>

            )}

          </div>

        </div>


        {/* FOOTNOTE */}

        <p className="mt-8 text-center text-xs leading-5 text-black/30">

          Your information will only be used to understand how Nirmaan
          can support your journey.

        </p>

      </div>

    </main>
  );
}
