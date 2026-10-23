"use client";

import { useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { submitContact, type ContactPayload } from "../actions/submitContact";

type Fields = Omit<ContactPayload, "browser">;
type Errors = Partial<Record<keyof Fields, string>>;
const inputs: { name: Exclude<keyof Fields, "message">; label: string; placeholder: string; type?: string }[] = [
  { name: "name", label: "Full name", placeholder: "Your full name" },
  { name: "email", label: "Email address", placeholder: "you@example.com", type: "email" },
  { name: "phone", label: "Phone number", placeholder: "07123456789", type: "tel" },
  { name: "reg", label: "Registration", placeholder: "AB12CDE" },
  { name: "postcode", label: "Postcode", placeholder: "RM20 4EL" },
];

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  else if (fields.name.trim().length < 2) errors.name = "Name is too short.";
  else if (!/^[A-Za-z0-9 ]+$/.test(fields.name)) errors.name = "Use letters, numbers and spaces only.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) errors.email = "Enter a valid email address.";
  if (!/^\d{11,15}$/.test(fields.phone)) errors.phone = "Enter a phone number with 11–15 digits.";
  if (!/^[A-Z0-9]{1,8}$/.test(fields.reg)) errors.reg = "Registration is required (maximum 8 characters).";
  if (!/^[A-Z0-9][A-Z0-9\s]{1,7}$/i.test(fields.postcode.trim())) errors.postcode = "Enter a valid postcode.";
  if (fields.message.trim().length < 10) errors.message = "Please describe the issue (at least 10 characters).";
  return errors;
}

function question() {
  return { a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1 };
}

interface BlogContactFormProps {
  title?: string;
  submitLabel?: string;
  compact?: boolean;
  registrationFirst?: boolean;
}

export default function BlogContactForm({ title = "Send a Message", submitLabel = "Send Message", compact = false, registrationFirst = false }: BlogContactFormProps = {}) {
  const router = useRouter();
  const id = useId();
  const [fields, setFields] = useState<Fields>({ name: "", email: "", phone: "", reg: "", postcode: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [math, setMath] = useState({ a: 3, b: 5 });
  const [answer, setAnswer] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMath(question()));
    return () => cancelAnimationFrame(frame);
  }, []);

  function change(name: keyof Fields, value: string) {
    if (name === "name") value = value.replace(/[^A-Za-z0-9 ]/g, "");
    if (name === "phone") value = value.replace(/\D/g, "").slice(0, 15);
    if (name === "reg") value = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8);
    if (name === "postcode") value = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase();
    setFields(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting) return;
    const invalid = validate(fields);
    setErrors(invalid);
    if (Object.keys(invalid).length) return;
    if (!answer || Number(answer) !== math.a + math.b) {
      setVerificationError("Incorrect answer. Please try again.");
      return;
    }
    setSubmitError("");
    setSubmitting(true);
    try {
      const result = await submitContact({ ...fields, browser: navigator.userAgent });
      if (result.ok) router.push("/quote-success");
      else setSubmitError(result.message ?? "Unable to send your enquiry. Please try again.");
    } catch {
      setSubmitError("Unable to send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = (name: keyof Fields) => `w-full rounded-xl border bg-slate-50 px-3 py-2.5 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#11633A] focus:ring-1 focus:ring-[#11633A] ${errors[name] ? "border-red-400" : "border-slate-200"}`;
  const orderedInputs = registrationFirst
    ? [...inputs.filter(input => input.name === "reg"), ...inputs.filter(input => input.name !== "reg")]
    : inputs;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-5 py-6 text-slate-900 shadow-sm sm:px-6">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>
      <form onSubmit={submit} noValidate className="flex flex-col gap-4">
        <div className={compact ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "flex flex-col gap-4"}>
        {orderedInputs.map(input => (
          <div key={input.name} className={compact && registrationFirst && input.name === "reg" ? "sm:col-span-2" : undefined}>
            <label htmlFor={`${id}-${input.name}`} className="mb-1.5 block text-[13px] font-semibold text-slate-700">{input.label} *</label>
            {registrationFirst && input.name === "reg" ? (
              <div className={`flex overflow-hidden rounded-lg border transition focus-within:border-[#4CA66B] focus-within:ring-1 focus-within:ring-[#4CA66B] ${errors.reg ? "border-red-400" : "border-slate-200"}`}>
                <div aria-hidden="true" className="flex shrink-0 flex-col items-center justify-center gap-0.5 bg-[#003087] px-3 py-2">
                  <svg viewBox="0 0 60 40" className="h-7 w-10">
                    <rect width="60" height="40" fill="#012169" />
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="8" />
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 V40 M0,20 H60" stroke="white" strokeWidth="12" />
                    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest text-white">UK</span>
                </div>
                <input id={`${id}-reg`} name="reg" required maxLength={8} value={fields.reg} onChange={event => change("reg", event.target.value)} placeholder="ENTER REGISTRATION" aria-invalid={Boolean(errors.reg)} aria-describedby={errors.reg ? `${id}-reg-error` : undefined} className="min-w-0 flex-1 bg-[#F5C400] px-3 py-3 text-[13px] font-black uppercase tracking-[0.1em] text-[#1a1a1a] placeholder:font-bold placeholder:text-[#8B7200] outline-none sm:px-3.5 sm:text-[16px]" />
              </div>
            ) : (
              <input id={`${id}-${input.name}`} name={input.name} type={input.type ?? "text"} required value={fields[input.name]} onChange={event => change(input.name, event.target.value)} placeholder={input.placeholder} aria-invalid={Boolean(errors[input.name])} aria-describedby={errors[input.name] ? `${id}-${input.name}-error` : undefined} className={fieldClass(input.name)} />
            )}
            {errors[input.name] && <p id={`${id}-${input.name}-error`} className="mt-1 text-xs text-red-600">{errors[input.name]}</p>}
          </div>
        ))}
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="mb-1.5 block text-[13px] font-semibold text-slate-700">Issue with vehicle *</label>
          <textarea id={`${id}-message`} name="message" required rows={3} value={fields.message} onChange={event => change("message", event.target.value)} placeholder="Describe the issue with your vehicle..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${id}-message-error` : undefined} className={`${fieldClass("message")} resize-y`} />
          {errors.message && <p id={`${id}-message-error`} className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex items-center gap-2">
            <label htmlFor={`${id}-answer`} className="shrink-0 text-[13px] text-slate-700">What is {math.a} + {math.b}?</label>
            <input id={`${id}-answer`} required inputMode="numeric" value={answer} onChange={event => { setAnswer(event.target.value.replace(/\D/g, "")); setVerificationError(""); }} placeholder="Answer" aria-invalid={Boolean(verificationError)} aria-describedby={verificationError ? `${id}-verification-error` : undefined} className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-2 py-2 text-center text-[13px] text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-[#11633A]" />
            <button type="button" aria-label="Refresh verification question" onClick={() => { setMath(question()); setAnswer(""); setVerificationError(""); }} className="cursor-pointer rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[#11633A] hover:bg-[#ECFFF3]">↻</button>
          </div>
          {verificationError && <p id={`${id}-verification-error`} className="mt-1 text-xs text-red-600">{verificationError}</p>}
        </div>
        <button type="submit" disabled={submitting} className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#11633A] py-3 text-[14px] font-bold text-white transition hover:bg-[#0d4f2d] disabled:cursor-not-allowed disabled:opacity-50">{submitting ? "Sending…" : submitLabel}<span aria-hidden="true">↗</span></button>
        {submitError && <p role="alert" className="text-sm text-red-600">{submitError}</p>}
      </form>
    </div>
  );
}
