"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { collections } from "@/content/collections";
import { site, whatsappLink } from "@/content/site";
import { buttonClass } from "./Button";
import { ArrowRight, Check, Phone, WhatsApp } from "./icons";

type Values = {
  name: string;
  phone: string;
  interest: string;
  locality: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "error" | "success";

const empty: Values = { name: "", phone: "", interest: "", locality: "", message: "" };

const labels: Record<keyof Values, string> = {
  name: "Your name",
  phone: "Mobile number",
  interest: "What are you looking for?",
  locality: "Your area in Pune",
  message: "Tell us a little more",
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = v.phone.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
  if (!v.phone.trim()) e.phone = "Please enter your mobile number.";
  else if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!v.interest) e.interest = "Please choose what you're interested in.";
  if (v.message.trim().length < 10) e.message = "Please add a few words (at least 10 characters).";
  else if (v.message.length > 800) e.message = "Please keep your message under 800 characters.";
  return e;
}

function compose(v: Values) {
  return [
    `Hello ${site.name},`,
    "",
    `Name: ${v.name.trim()}`,
    `Mobile: ${v.phone.trim()}`,
    `Interested in: ${v.interest}`,
    v.locality.trim() ? `Area: ${v.locality.trim()}` : null,
    "",
    v.message.trim(),
  ]
    .filter((l) => l !== null)
    .join("\n");
}

export function EnquiryForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [values, setValues] = useState<Values>({ ...empty, interest: defaultInterest });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [link, setLink] = useState("");
  const [popupBlocked, setPopupBlocked] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const fid = (k: keyof Values) => `${uid}-${k}`;

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k] || status === "error") setErrors(validate(next));
  };
  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, phone: true, interest: true, message: true });
    if (Object.keys(errs).length) {
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const url = whatsappLink(compose(values));
    setLink(url);
    // Opened synchronously inside the submit handler so browsers treat it as user-initiated.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    setPopupBlocked(!win);
    setStatus("success");
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const reset = () => {
    setValues({ ...empty, interest: defaultInterest });
    setErrors({});
    setTouched({});
    setStatus("idle");
    setPopupBlocked(false);
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="border border-stone bg-paper p-8 outline-none md:p-12"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success text-paper">
          <Check width={22} height={22} />
        </span>
        <h3 className="mt-6 font-display text-3xl tracking-tight">Your message is ready.</h3>
        <p className="mt-4 max-w-md text-ink-soft">
          {popupBlocked
            ? "Your browser blocked the new tab. Use the button below to open WhatsApp with your message filled in — just press send."
            : "We've opened WhatsApp with your enquiry filled in. Press send in WhatsApp and we'll reply as soon as we can."}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={link} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
            <WhatsApp width={18} height={18} /> Open WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={site.phone.href} className={buttonClass("secondary")}>
            <Phone width={18} height={18} /> Call instead
          </a>
        </div>
        <button type="button" onClick={reset} className="mt-8 text-sm font-semibold text-muted underline underline-offset-4 hover:text-ink">
          Start a new enquiry
        </button>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as (keyof Values)[]).filter((k) => errors[k]);
  const field =
    "mt-2 block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-lg text-ink placeholder:text-muted/70 focus:outline-none focus-visible:outline-none focus:shadow-[0_1px_0_0_currentColor] transition-[border-color,box-shadow]";
  const borderFor = (k: keyof Values) =>
    touched[k] && errors[k] ? "border-danger focus:border-danger" : "border-ink/30 focus:border-ink";
  const describedBy = (k: keyof Values, hint?: boolean) =>
    [hint ? `${fid(k)}-hint` : null, touched[k] && errors[k] ? `${fid(k)}-error` : null].filter(Boolean).join(" ") || undefined;

  const errorText = (k: keyof Values) =>
    touched[k] && errors[k] ? (
      <p id={`${fid(k)}-error`} className="mt-2 text-sm font-medium text-danger">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={`${uid}-intro`} className="space-y-9">
      <p id={`${uid}-intro`} className="text-sm text-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required. Your enquiry is sent to us through WhatsApp — nothing is
        stored on this website.
      </p>

      {status === "error" && errorList.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-danger bg-danger/5 px-5 py-4 outline-none"
        >
          <p className="font-semibold text-danger">Please check {errorList.length === 1 ? "one field" : `${errorList.length} fields`}:</p>
          <ul className="mt-2 space-y-1 text-sm">
            {errorList.map((k) => (
              <li key={k}>
                <a href={`#${fid(k)}`} className="text-danger underline underline-offset-2">
                  {labels[k]}: {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor={fid("name")} className="eyebrow text-ink-soft">
            {labels.name} <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("name")}
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={describedBy("name")}
            value={values.name}
            onChange={set("name")}
            onBlur={blur("name")}
            className={`${field} ${borderFor("name")}`}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor={fid("phone")} className="eyebrow text-ink-soft">
            {labels.phone} <span aria-hidden="true">*</span>
          </label>
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={describedBy("phone", true)}
            placeholder="98765 43210"
            value={values.phone}
            onChange={set("phone")}
            onBlur={blur("phone")}
            className={`${field} ${borderFor("phone")}`}
          />
          <p id={`${fid("phone")}-hint`} className="sr-only">
            10-digit mobile number, with or without +91
          </p>
          {errorText("phone")}
        </div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor={fid("interest")} className="eyebrow text-ink-soft">
            {labels.interest} <span aria-hidden="true">*</span>
          </label>
          <div className="relative">
          <select
            id={fid("interest")}
            name="interest"
            required
            aria-required="true"
            aria-invalid={touched.interest && !!errors.interest}
            aria-describedby={describedBy("interest")}
            value={values.interest}
            onChange={set("interest")}
            onBlur={blur("interest")}
            className={`${field} ${borderFor("interest")} cursor-pointer appearance-none pr-8`}
          >
            <option value="" disabled>
              Choose one
            </option>
            {collections.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Made-to-measure order">Made-to-measure order</option>
            <option value="Furnishing a whole home">Furnishing a whole home</option>
            <option value="Something else">Something else</option>
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute bottom-4 right-1 h-4 w-4"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {errorText("interest")}
        </div>
        <div>
          <label htmlFor={fid("locality")} className="eyebrow text-ink-soft">
            {labels.locality} <span className="normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <input
            id={fid("locality")}
            name="locality"
            autoComplete="address-level3"
            placeholder="e.g. Aundh, Khadki, Pimpri"
            value={values.locality}
            onChange={set("locality")}
            className={`${field} border-ink/30 focus:border-ink`}
          />
        </div>
      </div>

      <div>
        <label htmlFor={fid("message")} className="eyebrow text-ink-soft">
          {labels.message} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={fid("message")}
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={describedBy("message", true)}
          placeholder="Room size, the piece you have in mind, when you'd like to visit…"
          value={values.message}
          onChange={set("message")}
          onBlur={blur("message")}
          className={`${field} ${borderFor("message")} resize-y`}
        />
        <p id={`${fid("message")}-hint`} className="mt-2 text-right text-xs text-muted">
          {values.message.length}/800
        </p>
        {errorText("message")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClass("primary")}>
          <WhatsApp width={18} height={18} />
          <span>Send via WhatsApp</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight width={18} height={18} />
          </span>
        </button>
        <p className="text-sm text-muted">
          Prefer to talk?{" "}
          <a href={site.phone.href} className="font-semibold text-ink underline underline-offset-4">
            Call {site.phone.display}
          </a>
        </p>
      </div>
    </form>
  );
}
