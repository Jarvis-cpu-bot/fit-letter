"use client";

import { useId, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailForm({
  id,
  compact = false,
  inverse = false,
}: {
  id: string;
  compact?: boolean;
  /** Sits on the always-dark inverse band (FooterCta) instead of the theme surface. */
  inverse?: boolean;
}) {
  const inputId = useId();
  const errorId = useId();
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sent");
  }

  const ink = inverse ? "text-inverse-ink border-inverse-ink" : "text-ink border-ink";
  const surface = inverse ? "bg-inverse-surface" : "bg-chalk";
  const onSurfaceText = inverse ? "text-inverse-ink" : "text-ink";
  const btnSurface = inverse
    ? "border-inverse-ink bg-inverse-ink text-inverse-surface"
    : "border-inverse-surface bg-inverse-surface text-inverse-ink";

  if (status === "sent") {
    return (
      <p role="status" className={`font-body text-base font-semibold ${onSurfaceText} border-2 ${ink} px-5 py-4`}>
        You&apos;re in. First programme lands Monday, 6am.
      </p>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className={compact ? "flex flex-col gap-3" : "flex flex-col gap-3 sm:flex-row sm:gap-0"}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@yourgym.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        aria-invalid={status === "error"}
        aria-describedby={status === "error" ? errorId : undefined}
        className={`w-full min-w-0 border-2 ${ink} ${surface} px-5 py-4 font-body text-base ${onSurfaceText} ${
          inverse ? "placeholder:text-inverse-ink/60" : "placeholder:text-steel"
        } focus-visible:relative focus-visible:z-10 ${compact ? "" : "sm:border-r-0"}`}
      />
      <button
        type="submit"
        data-shot-cta
        className={`shrink-0 border-2 ${btnSurface} px-7 py-4 font-display text-lg uppercase tracking-wide transition-colors hover:bg-iron hover:border-iron hover:text-inverse-ink focus-visible:bg-iron focus-visible:border-iron focus-visible:text-inverse-ink`}
      >
        Get the programme
      </button>
      {status === "error" && (
        <p id={errorId} role="alert" className="font-body text-sm font-semibold text-iron-ink sm:basis-full">
          Enter a real email address — that&apos;s where the programme goes.
        </p>
      )}
    </form>
  );
}
