"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw2fjqMBTAndVVznzPG7Uce2ackDG3J8Nz9YsAhdWv4IodfBIELAhGuy7tLo4wTWNlnQw/exec";

export default function BecomeAMentor() {
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

      alert(
        "Something went wrong while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F8F6F1]">

        {/* NAVIGATION */}

        <nav className="border-b border-black/5 bg-[#F8F6F1]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

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
              className="text-sm text-black/60 transition hover:text-black"
            >
              ← Back to Nirmaan
            </a>

          </div>
        </nav>


        {/* SUCCESS */}

        <div className="mx-auto flex min-h-[75vh] max-w-2xl items-center justify-center px-6 py-16">

          <div className="w-full rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm md:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE3D8]">

              <span className="text-2xl">
                ✓
              </span>

            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              Application received
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Thank you for stepping forward.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-black/50">
              We've received your mentor application. Our team will
              review your information and get back to you soon.
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

      <nav className="border-b border-black/5 bg-[#F8F6F1]">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-12">

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
            className="text-sm text-black/60 transition hover:text-black"
          >
            ← Back to Nirmaan
          </a>

        </div>

      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">

            {/* LEFT */}

            <div>

              <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                Become a Mentor
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">

                Heroes don't always

                <br />

                <span className="font-serif italic font-normal">
                  wear capes.
                </span>

              </h1>

            </div>


            {/* RIGHT */}

            <div>

              <p className="max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8">
                You've learned things that someone else is just beginning
                to figure out. Nirmaan gives you a space to share your
                experience, guide young people and contribute to someone's
                next step.
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
                    The Nirmaan Community
                  </p>

                </div>

                <div>

                  <p className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">

                    You don't need to
                    have all the answers.

                    <br />
                    <br />

                    Sometimes, sharing
                    what you've already
                    learned is enough to
                    help someone move
                    forward.

                  </p>

                  <div className="mt-8">

                    <span className="inline-flex rounded-full bg-black/10 px-4 py-2 text-xs font-medium text-black/55">
                      Share • Guide • Inspire
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
                  Mentor Application
                </p>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  Tell us a little about yourself.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
                  This helps us understand who you are and how you would
                  like to contribute to the Nirmaan community.
                </p>

              </div>


              <form
                className="mt-10 space-y-6"
                onSubmit={handleSubmit}
              >


                {/* FULL NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Full Name <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      Email <span className="text-black/40">*</span>
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
                      Mobile Number <span className="text-black/40">*</span>
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
                      City <span className="text-black/40">*</span>
                    </label>

                    <input
                      name="city"
                      type="text"
                      required
                      placeholder="e.g. Bhubaneswar"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-black/70">
                      State <span className="text-black/40">*</span>
                    </label>

                    <select
                      name="state"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                    >

                      <option value="" disabled>
                        Select your state
                      </option>

                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                      <option>Andaman and Nicobar Islands</option>
                      <option>Chandigarh</option>
                      <option>
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option>Delhi</option>
                      <option>Jammu and Kashmir</option>
                      <option>Ladakh</option>
                      <option>Lakshadweep</option>
                      <option>Puducherry</option>

                    </select>

                  </div>

                </div>


                {/* COMMUNITY STATUS */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    You are a <span className="text-black/40">*</span>
                  </label>

                  <select
                    name="status"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="" disabled>
                      Select your current status
                    </option>

                    <option value="student">
                      Student
                    </option>

                    <option value="working-professional">
                      Working Professional
                    </option>

                    <option value="own-venture">
                      Own Venture / Entrepreneur
                    </option>

                  </select>

                </div>


                {/* FIELD */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Your Field <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="field"
                    type="text"
                    required
                    placeholder="e.g. Agriculture, Technology, HR, Design, Finance..."
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                  <p className="mt-2 text-xs leading-5 text-black/35">
                    Tell us the field, industry, subject or area you know best.
                  </p>

                </div>


                {/* CURRENT ROLE */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Current Role / Profession{" "}
                    <span className="text-black/40">*</span>
                  </label>

                  <input
                    name="role"
                    type="text"
                    required
                    placeholder="e.g. HR Manager, Student, Founder, Designer..."
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* ORGANIZATION */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Organization

                    <span className="ml-2 text-xs font-normal text-black/30">
                      Optional
                    </span>

                  </label>

                  <input
                    name="organization"
                    type="text"
                    placeholder="Company / Organization / College"
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* CONTRIBUTION */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-black/70">
                    HOW YOU'D LIKE TO CONTRIBUTE{" "}
                    <span className="text-black/40">*</span>
                  </label>

                  <p className="mb-4 text-xs text-black/40">
                    Select all that apply.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {[
                      "1:1 Mentoring",
                      "Career Guidance",
                      "Workshops",
                      "Skill Sessions",
                      "Project Guidance",
                      "Community Sessions",
                      "Other",
                    ].map((option) => (

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
                          {option}
                        </span>

                      </label>

                    ))}

                  </div>

                  {contributions.length === 0 && (
                    <p className="mt-2 text-xs text-black/35">
                      Please select at least one option.
                    </p>
                  )}

                </div>


                {/* YEARS OF EXPERIENCE */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Years of Experience

                    <span className="ml-2 text-xs font-normal text-black/30">
                      Optional
                    </span>

                  </label>

                  <select
                    name="experience"
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm text-black/60 outline-none transition focus:border-black/30"
                  >

                    <option value="">
                      Select experience
                    </option>

                    <option value="0-1">
                      Less than 1 year
                    </option>

                    <option value="1-3">
                      1–3 years
                    </option>

                    <option value="3-5">
                      3–5 years
                    </option>

                    <option value="5-10">
                      5–10 years
                    </option>

                    <option value="10+">
                      10+ years
                    </option>

                  </select>

                </div>


                {/* ABOUT */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    Tell us about yourself

                    <span className="ml-2 text-xs font-normal text-black/30">
                      Optional
                    </span>

                  </label>

                  <textarea
                    name="about"
                    rows={5}
                    placeholder="Anything else you'd like us to know about your journey, experience or interests..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-black/30 focus:border-black/30"
                  />

                </div>


                {/* LINKEDIN */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-black/70">
                    LinkedIn / Portfolio

                    <span className="ml-2 text-xs font-normal text-black/30">
                      Optional
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
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Mentor Application"}
                    </span>

                    {!isSubmitting && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}

                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-black/35">
                    We'll review your application and get back to you.
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
              LEARN • BUILD • BECOME
            </div>

          </div>

          <a
            href="/"
            className="text-sm text-black/45 transition hover:text-black"
          >
            Back to Nirmaan →
          </a>

        </div>

      </footer>

    </main>
  );
}
