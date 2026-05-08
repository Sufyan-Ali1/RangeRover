"use client";

import { useState } from "react";
import { submitContact, type ContactPayload } from "../actions/submitContact";

type FormFields = ContactPayload;
type FieldErrors = Partial<Record<keyof FormFields, string>>;

function validate(form: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim())
    errors.name = "Full name is required.";
  else if (form.name.trim().length < 2)
    errors.name = "Name is too short.";
  else if (!/^[A-Za-z\s'\-]+$/.test(form.name))
    errors.name = "Name can only contain letters.";

  if (!form.phone.trim())
    errors.phone = "Phone number is required.";
  else if (!/^\+?[\d\s\-]{10,15}$/.test(form.phone))
    errors.phone = "Enter a valid phone number (10–15 digits).";

  if (!form.email.trim())
    errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
    errors.email = "Enter a valid email address.";

  if (form.reg && !/^[A-Z0-9]{1,8}$/.test(form.reg))
    errors.reg = "Registration must be alphanumeric only (max 8 characters).";

  if (form.postcode && !/^[A-Z0-9][A-Z0-9\s]{1,7}$/i.test(form.postcode.trim()))
    errors.postcode = "Enter a valid postcode.";

  if (!form.message.trim())
    errors.message = "Message is required.";
  else if (form.message.trim().length < 10)
    errors.message = "Please provide more detail (at least 10 characters).";

  return errors;
}

const baseInput =
  "w-full rounded-md border px-3.5 py-2.5 text-[13.5px] text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#4CA66B] focus:ring-1 focus:ring-[#4CA66B]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-b-2 border-[#4CA66B] pb-0.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#4CA66B]">
      {children}
    </span>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormFields>({
    name: "", phone: "", email: "", reg: "", postcode: "", message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let filtered = value;

    if (name === "reg")
      filtered = value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 8);
    else if (name === "phone")
      filtered = value.replace(/[^0-9+\s\-]/g, "");
    else if (name === "postcode")
      filtered = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase();

    setForm((prev) => ({ ...prev, [name]: filtered }));
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
    setSubmitError("");
    setSubmitting(true);
    const { ok } = await submitContact(form);
    setSubmitting(false);
    if (ok) {
      setSubmitted(true);
    } else {
      setSubmitError("Something went wrong. Please try again or call us directly.");
    }
  };

  const borderClass = (field: keyof FormFields) =>
    fieldErrors[field] ? "border-red-400" : "border-gray-300";

  const FieldError = ({ field }: { field: keyof FormFields }) =>
    fieldErrors[field] ? (
      <p className="mt-1 text-[11px] text-red-500">{fieldErrors[field]}</p>
    ) : null;

  return (
    <section className="w-full bg-white">
      <div className="w-full pt-28 pb-10 text-center sm:pt-32 sm:pb-12">
        <h1 className="text-5xl font-bold text-gray-900 sm:text-[56px]">Contact us</h1>
        <p className="mt-2.5 text-[15px] text-gray-500">Check What Our Customer&apos;s Says</p>
      </div>

      <div className="mx-auto w-full max-w-[1728px] px-6 pb-20 sm:px-10 xl:px-[101px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* ── Left: Form Card ── */}
          <div className="rounded-2xl border border-gray-200 px-8 py-9 shadow-sm sm:px-10">
            <h2 className="text-[22px] font-bold text-gray-900">Lorem Ipsum Has Been The</h2>
            <p className="mt-2.5 text-[13.5px] leading-[1.7] text-gray-500">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            </p>

            {submitted ? (
              <div className="mt-10 flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFFF3]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#11633A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-[20px] font-black text-gray-900">Message Sent!</h3>
                <p className="text-[13.5px] text-gray-500">We&apos;ll respond within 24 hours during business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 flex flex-col gap-4">

                {/* Full Name + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[12.5px] text-gray-700">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`${baseInput} ${borderClass("name")}`}
                    />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07123456789"
                      className={`${baseInput} ${borderClass("phone")}`}
                    />
                    <FieldError field="phone" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`${baseInput} ${borderClass("email")}`}
                  />
                  <FieldError field="email" />
                </div>

                {/* Reg Number + Postcode */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-[12.5px] text-gray-700">Reg Number</label>
                    <input
                      name="reg"
                      value={form.reg}
                      onChange={handleChange}
                      placeholder="AB12CDE"
                      className={`${baseInput} ${borderClass("reg")}`}
                    />
                    <FieldError field="reg" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12.5px] text-gray-700">Postcode</label>
                    <input
                      name="postcode"
                      value={form.postcode}
                      onChange={handleChange}
                      placeholder="RM20 4EL"
                      className={`${baseInput} ${borderClass("postcode")}`}
                    />
                    <FieldError field="postcode" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-[12.5px] text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={7}
                    placeholder="Tell us how we can help you..."
                    className={`${baseInput} resize-none ${borderClass("message")}`}
                  />
                  <FieldError field="message" />
                </div>

                {submitError && (
                  <p className="text-[12px] text-red-500">{submitError}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 rounded-md bg-[#4CA66B] py-3 text-[14px] font-semibold text-white transition hover:bg-[#3D9258] active:bg-[#11633A] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  {submitting ? "Sending…" : "Send Message"}
                </button>

                <p className="text-center text-[12px] text-gray-400">
                  We&apos;ll respond to your message within 24 hours during business days.
                </p>
              </form>
            )}
          </div>

          {/* ── Right: Contact Info ── */}
          <div className="flex flex-col gap-7 pt-1">
            <div>
              <h2 className="text-[26px] font-bold text-gray-900">Contact Information</h2>
              <p className="mt-2.5 text-[13.5px] leading-[1.7] text-gray-500">
                It is a long established fact that a reader be by<br className="hidden sm:block" />
                the readable distracted layout.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <SectionLabel>Address</SectionLabel>
                <div className="mt-4 text-[14px] leading-[2] text-gray-800">
                  Unit 1 Hedley Ave<br />
                  Grays RM20 4EL<br />
                  United Kingdom
                </div>
              </div>
              <div>
                <SectionLabel>Contact</SectionLabel>
                <div className="mt-4 flex flex-col gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Phone:</p>
                    <p className="mt-0.5 text-[16px] font-bold text-gray-900">07477 733313</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Email:</p>
                    <p className="mt-0.5 text-[14px] font-bold text-gray-900">sales@rangerovergarage.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>Opening Hours</SectionLabel>
              <div className="mt-4 flex flex-col gap-2.5">
                <p className="text-[14.5px] text-gray-800">
                  <span className="font-semibold">Monday - Friday: </span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="text-[14.5px] text-gray-800">
                  <span className="font-semibold">Saturday: </span>
                  <span className="font-bold">7:00 AM - 1:00 PM</span>
                </p>
                <p className="text-[14.5px] text-gray-800">
                  <span className="font-semibold">Sunday: </span>
                  <span className="font-bold text-red-500">Closed</span>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://maps.google.com/maps?q=Unit+1+Hedley+Ave,+Grays+RM20+4EL,+United+Kingdom&output=embed&hl=en"
                width="100%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Range Rover Garage Location"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
