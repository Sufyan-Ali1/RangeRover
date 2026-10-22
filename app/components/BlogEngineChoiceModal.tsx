"use client";

import { useEffect, useRef, useState } from "react";
import { submitContact } from "../actions/submitContact";

const suppliers = ["Supply & Fit", "Supply Only", "I will consider both"];
const conditions = ["Reconditioned", "New", "Used", "I will consider all"];
const titles = ["Find your engine", "Engine condition", "Confirm your car", "Your details"];
const descriptions = [
  "Tell us what you prefer so we can prepare the right quote.",
  "Choose the engine condition you prefer.",
  "Enter your registration for a quote matched to your vehicle.",
  "Tell us where to send your personalised quote.",
];
const fields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email address", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  { name: "postcode", label: "Postcode", type: "text", autoComplete: "postal-code" },
] as const;

export default function BlogEngineChoiceModal({ blogId }: { blogId: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [supplier, setSupplier] = useState("");
  const [condition, setCondition] = useState("");
  const [reg, setReg] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", postcode: "" });
  const [math, setMath] = useState({ a: 3, b: 5 });
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    let previousOverflow: string | undefined;
    const unlock = () => {
      if (previousOverflow !== undefined) document.body.style.overflow = previousOverflow;
    };
    const timer = window.setTimeout(() => {
      if (!element || document.querySelector("dialog[open]")) return;
      setMath({ a: Math.floor(Math.random() * 10) + 1, b: Math.floor(Math.random() * 10) + 1 });
      previousOverflow = document.body.style.overflow;
      element.showModal();
      document.body.style.overflow = "hidden";
    }, 7000);
    element?.addEventListener("close", unlock);
    return () => {
      window.clearTimeout(timer);
      element?.removeEventListener("close", unlock);
      element?.close();
      unlock();
    };
  }, []);

  useEffect(() => {
    if (!dialog.current?.open) return;
    content.current?.scrollTo(0, 0);
    content.current?.querySelector<HTMLElement>("input, button")?.focus();
  }, [step, success]);

  const close = () => dialog.current?.close();
  const advance = () => { setError(""); setStep(previous => previous + 1); };
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setError("");
    if (!/^[A-Za-z0-9 ]{2,}$/.test(details.name.trim())) return setError("Enter your full name using letters, numbers and spaces.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(details.email.trim())) return setError("Enter a valid email address.");
    if (!/^\d{11,15}$/.test(details.phone)) return setError("Enter a phone number with 11–15 digits.");
    if (!/^[A-Z0-9][A-Z0-9\s]{1,7}$/i.test(details.postcode.trim())) return setError("Enter a valid postcode.");
    if (!answer.trim() || Number(answer) !== math.a + math.b) return setError("Check your answer to the verification question.");
    setSubmitting(true);
    try {
      const result = await submitContact({
        name: details.name.trim(), email: details.email.trim(), phone: details.phone,
        postcode: details.postcode.trim(), reg,
        message: `Engine enquiry — Supplier: ${supplier}, Condition: ${condition}, Blog: ${blogId}`,
        browser: navigator.userAgent,
      });
      if (result.ok) setSuccess(true);
      else setError("Unable to send your enquiry. Please try again or contact our team.");
    } catch {
      setError("Unable to send your enquiry. Please try again or contact our team.");
    } finally { setSubmitting(false); }
  }

  const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#11633A] focus:ring-2 focus:ring-[#11633A]/20";
  const primaryClass = "w-full cursor-pointer rounded-xl bg-[#11633A] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0d4d2d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11633A] disabled:cursor-wait disabled:opacity-60";
  return (
    <dialog ref={dialog} aria-labelledby="engine-dialog-title" aria-describedby="engine-dialog-description"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-2xl backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm"
      onCancel={event => event.preventDefault()}>
      <div ref={content} className="max-h-[90dvh] overflow-y-auto">
        <div className="flex items-center justify-between bg-[#11633A] px-6 py-4 text-white">
          <span className="text-xs font-bold uppercase tracking-widest">Range Rover Garage</span>
          <button type="button" onClick={close} aria-label="Close engine enquiry" className="cursor-pointer rounded-full px-2 py-1 text-xl leading-none hover:bg-white/15 focus-visible:outline-2">×</button>
        </div>
        <div className="p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#11633A]">{success ? "Enquiry received" : `Step ${step + 1} of 4`}</p>
          <h2 id="engine-dialog-title" className="text-2xl font-bold text-slate-900">{success ? "Thank you for your enquiry" : titles[step]}</h2>
          <p id="engine-dialog-description" className="mb-6 mt-2 text-sm leading-relaxed text-slate-600">{success ? "Our team will be in touch with your personalised quote." : descriptions[step]}</p>
          {error && <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          {success ? <button type="button" onClick={close} className={primaryClass}>Close</button> : <>
            {step < 2 && <div className="space-y-3">{(step === 0 ? suppliers : conditions).map(choice => <button key={choice} type="button" onClick={() => { if (step === 0) setSupplier(choice); else setCondition(choice); advance(); }} className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:border-[#11633A] hover:bg-[#ecfff3] focus-visible:outline-2 focus-visible:outline-[#11633A]">{choice}</button>)}</div>}
            {step === 2 && <form onSubmit={event => { event.preventDefault(); if (!/^[A-Z0-9]{5,8}$/.test(reg)) setError("Enter a registration with 5–8 letters and numbers."); else advance(); }} className="space-y-4">
              <label htmlFor="engine-dialog-reg" className="block text-sm font-semibold text-slate-700">Registration number</label>
              <input id="engine-dialog-reg" value={reg} onChange={event => setReg(event.target.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8))} maxLength={8} placeholder="ENTER REG" required className="w-full rounded-xl border border-amber-400 bg-amber-300 px-4 py-4 text-center text-2xl font-bold uppercase text-slate-950 outline-none focus:ring-2 focus:ring-[#11633A]" />
              <button className={primaryClass}>Confirm your car</button>
            </form>}
            {step === 3 && <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">{fields.map(field => <div key={field.name}>
                <label htmlFor={`engine-dialog-${field.name}`} className="mb-1.5 block text-sm font-semibold text-slate-700">{field.label}</label>
                <input id={`engine-dialog-${field.name}`} type={field.type} autoComplete={field.autoComplete} required value={details[field.name]} disabled={submitting} onChange={event => { let value = event.target.value; if (field.name === "phone") value = value.replace(/\D/g, "").slice(0, 15); if (field.name === "postcode") value = value.toUpperCase().slice(0, 8); setDetails(previous => ({ ...previous, [field.name]: value })); }} className={inputClass} />
              </div>)}</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <label htmlFor="engine-dialog-answer" className="mb-2 block text-sm font-semibold text-slate-700">What is {math.a} + {math.b}?</label>
                <input id="engine-dialog-answer" inputMode="numeric" required value={answer} onChange={event => setAnswer(event.target.value)} className={inputClass} disabled={submitting} />
              </div>
              <button disabled={submitting} className={primaryClass}>{submitting ? "Sending…" : "Request my quote"}</button>
            </form>}
            {step > 0 && <button type="button" disabled={submitting} onClick={() => { setError(""); setStep(previous => previous - 1); }} className="mt-5 cursor-pointer text-sm font-semibold text-[#11633A] hover:underline disabled:opacity-50">← Back</button>}
          </>}
        </div>
      </div>
    </dialog>
  );
}
