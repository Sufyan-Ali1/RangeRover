"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitQuote } from "../actions/submitQuote";

function randomMath() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

const whyChooseUs = [
  "Engine Specialists With Over 20 Years Of Experience.",
  "Competitive Prices With Up To 24 Month Warranty.",
  "Customer Satisfaction, Top Priority.",
  "Fully Tested Engines And Genuine OEM Parts.",
  "Nationwide Collection & Delivery Included.",
];

type FormFields = { reg: string; name: string; email: string; phone: string; postcode: string; issue: string };
type FieldErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (form.reg && !/^[A-Z0-9]{1,8}$/.test(form.reg))
    errors.reg = "Registration must be alphanumeric only (max 8 characters).";

  if (!form.name.trim())
    errors.name = "Full name is required.";
  else if (form.name.trim().length < 2)
    errors.name = "Name is too short.";
  else if (!/^[A-Za-z\s'\-]+$/.test(form.name))
    errors.name = "Name can only contain letters.";

  if (!form.email.trim())
    errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
    errors.email = "Enter a valid email address.";

  const phoneDigits = form.phone.replace(/\D/g, "");
  if (!phoneDigits)
    errors.phone = "Phone number is required.";
  else if (phoneDigits.length < 11)
    errors.phone = "Enter a valid phone number with at least 11 digits.";

  if (!form.postcode.trim())
    errors.postcode = "Postcode is required.";
  else if (!/^[A-Z0-9][A-Z0-9\s]{1,7}$/i.test(form.postcode.trim()))
    errors.postcode = "Enter a valid postcode.";

  if (!form.issue.trim())
    errors.issue = "Please describe the issue with your vehicle.";
  else if (form.issue.trim().length < 10)
    errors.issue = "Please provide more detail (at least 10 characters).";

  return errors;
}

import type { VehicleResult } from "../actions/lookupVehicle";

export interface VehicleInfo {
  description: string;
  data?: VehicleResult;
}

interface GetQuoteProps {
  initialReg?: string;
  showNotFound?: boolean;
  vehicleInfo?: VehicleInfo;
}

export default function GetQuote({ initialReg = "", showNotFound = false, vehicleInfo }: GetQuoteProps) {
  const router = useRouter();
  const [math, setMath] = useState({ a: 3, b: 5, answer: 8 });
  const [captcha, setCaptcha] = useState("");
  const [vehicleNotFound, setVehicleNotFound] = useState(showNotFound);
  const [form, setForm] = useState<FormFields>({
    reg: initialReg, name: "", email: "", phone: "", postcode: "", issue: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => { setMath(randomMath()); }, []);
  useEffect(() => { setVehicleNotFound(showNotFound); }, [showNotFound]);

  const refreshMath = useCallback(() => {
    setMath(randomMath());
    setCaptcha("");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let filtered = value;

    if (name === "reg")
      filtered = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8);
    else if (name === "phone")
      filtered = value.replace(/\D/g, "").slice(0, 15);
    else if (name === "postcode")
      filtered = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase();

    setForm((prev) => ({ ...prev, [name]: filtered }));

    // Clear the error for this field as the user types
    if (fieldErrors[name as keyof FormFields]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (parseInt(captcha, 10) !== math.answer) {
      setSubmitError("Incorrect answer to the verification question. Please try again.");
      refreshMath();
      return;
    }

    setSubmitError("");
    setSubmitting(true);
    const { ok, message } = await submitQuote({
      ...form,
      browser: navigator.userAgent,
      vehicle: vehicleInfo?.data,
    });
    setSubmitting(false);
    if (ok) {
      router.push("/quote-success");
    } else {
      setSubmitError(message ?? "Something went wrong. Please try again or call us directly.");
    }
  };

  const inputBorder = (field: keyof FormFields) =>
    fieldErrors[field] ? "border-red-400" : "border-gray-200";

  const FieldError = ({ field }: { field: keyof FormFields }) =>
    fieldErrors[field] ? (
      <p className="mt-1 text-[11px] text-red-500">{fieldErrors[field]}</p>
    ) : null;

  return (
    <div className="w-full bg-[#F3F4F6] px-6 pt-6 pb-10 sm:px-10 xl:px-[101px]">
      <div className="mx-auto w-full max-w-[1728px]">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-gray-800"
        >
          ‹ BACK TO WORKSHOP
        </Link>

        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
          Free Quote — No Obligation
        </p>
        <h1 className="mb-6 text-[36px] font-black leading-tight tracking-tight text-gray-900 sm:text-[48px]">
          GET YOUR{" "}
          <span className="italic text-[#11633A]">ENGINE QUOTE</span>
        </h1>

        {vehicleInfo && (
          <div
            className="mb-6 flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-5 shadow-sm"
            style={{ borderLeft: "4px solid #C9963A" }}
          >
            <div className="mt-0.5 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9963A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="9" width="22" height="9" rx="2"/>
                <path d="M5 9V6a1 1 0 0 1 1-1h4l2 4"/>
                <path d="M13 9l2-4h2a1 1 0 0 1 1 1v3"/>
                <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
              </svg>
            </div>
            <div>
              <p className="mb-1 text-[13px] font-black uppercase tracking-wide text-gray-900">Vehicle Identified</p>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-gray-700">
                {vehicleInfo.description}
              </p>
              <span className="mt-2 inline-block rounded-full border border-gray-300 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                DVLA Verified
              </span>
            </div>
          </div>
        )}

        {vehicleNotFound && (
          <div
            className="mb-6 flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
            style={{ borderLeft: "4px solid #C9963A" }}
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#C9963A]">
              <span className="text-[14px] font-black leading-none text-[#C9963A]">!</span>
            </div>
            <div>
              <p className="text-[13px] font-black uppercase tracking-wide text-gray-900">Vehicle Not Found</p>
              <p className="mt-0.5 text-[13px] text-gray-500">
                Please enter your details manually below. Our team will contact you shortly.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">

          {/* ── Form card ── */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Vehicle Registration */}
                <div>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    Vehicle Registration
                  </p>
                  <div className={`flex items-center overflow-hidden rounded-lg border-2 bg-[#FAFAE8] ${fieldErrors.reg ? "border-red-400" : "border-[#e5e5b0]"}`}>
                    <div className={`flex items-center justify-center px-3 py-3 text-xl border-r ${fieldErrors.reg ? "border-red-400" : "border-[#e5e5b0]"}`}>
                      🇬🇧
                    </div>
                    <input
                      name="reg"
                      value={form.reg}
                      onChange={handleChange}
                      placeholder="ENTER REG"
                      className="flex-1 bg-transparent px-4 py-3 text-[15px] font-bold uppercase tracking-widest text-gray-700 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                  <FieldError field="reg" />
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      Full Name <span className="text-red-500">*</span>
                    </p>
                    <div className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${inputBorder("name")}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Enter Full Name" className="flex-1 text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <FieldError field="name" />
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      Email Address <span className="text-red-500">*</span>
                    </p>
                    <div className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${inputBorder("email")}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter Email Address" className="flex-1 text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <FieldError field="email" />
                  </div>
                </div>

                {/* Phone + Postcode */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      Phone Number <span className="text-red-500">*</span>
                    </p>
                    <div className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${inputBorder("phone")}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="07123456789" className="flex-1 text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <FieldError field="phone" />
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      Post Code <span className="text-red-500">*</span>
                    </p>
                    <div className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${inputBorder("postcode")}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      <input name="postcode" value={form.postcode} onChange={handleChange} placeholder="Enter Post Code" className="flex-1 text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <FieldError field="postcode" />
                  </div>
                </div>

                {/* Issue */}
                <div>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    Issue With Vehicle <span className="text-red-500">*</span>
                  </p>
                  <textarea
                    name="issue"
                    value={form.issue}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your vehicle's issue in as much detail as possible..."
                    className={`w-full rounded-lg border px-3 py-2.5 text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none resize-none ${inputBorder("issue")}`}
                  />
                  <FieldError field="issue" />
                </div>

                {/* Human Verification */}
                <div className="rounded-lg border border-gray-200 px-4 py-3">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    Human Verification
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-1 items-center gap-2">
                      <span className="text-[14px] font-bold text-gray-800">
                        What is {math.a} + {math.b}?
                      </span>
                      <button type="button" onClick={refreshMath} className="text-gray-400 hover:text-gray-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                        </svg>
                      </button>
                    </div>
                    <input
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value.replace(/[^0-9]/g, ""))}
                      placeholder="?"
                      className="w-14 rounded-lg border border-gray-200 px-2 py-2 text-center text-[14px] font-bold text-gray-800 focus:outline-none"
                    />
                  </div>
                  {submitError && <p className="mt-1.5 text-[12px] text-red-500">{submitError}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl py-4 text-[13px] font-black uppercase tracking-widest text-white transition hover:bg-[#0d4f2d] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "#11633A" }}
                >
                  {submitting ? "Submitting…" : "Submit Quote Request"}
                </button>

                <p className="text-center text-[11px] text-gray-400">
                  By submitting, you agree to our contact terms. We never share your data.
                </p>

            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
                Why Choose Us
              </p>
              <ul className="flex flex-col gap-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#4CA66B]">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-[13px] leading-snug text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "#0f1923" }}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4CA66B]">
                Prefer To Call?
              </p>
              <p className="mb-5 text-[13px] leading-relaxed text-white/70">
                Speak directly with one of our JLR specialists. Mon–Fri 9am–6pm, Sat 7am–2pm.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:01708592377" className="flex items-center gap-3 text-[15px] font-bold text-white hover:text-[#4CA66B] transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  01708 592377
                </a>
                <a href="tel:07477733313" className="flex items-center gap-3 text-[15px] font-bold text-white hover:text-[#4CA66B] transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  07477 733313
                </a>
                <div className="flex items-center gap-3 text-[13px] text-white/60">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CA66B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  UNIT 1 Hedley Ave, Grays RM20 4EL
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
