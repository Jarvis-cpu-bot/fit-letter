import EmailForm from "./EmailForm";
import RepNumeral from "./RepNumeral";

export default function Hero() {
  return (
    <section
      data-shot="hero"
      className="relative overflow-hidden border-b-2 border-ink px-6 pt-28 pb-20 sm:px-10 sm:pt-36 sm:pb-28"
    >
      {/* signature element: oversized rep-scheme numeral clipping behind the content */}
      <RepNumeral
        value="5×5"
        className="pointer-events-none absolute -right-[0.06em] top-[-0.12em] font-display leading-none text-[38vw] text-ink/[0.06] select-none sm:text-[26vw]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col gap-8">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-steel">
          The Fit Letter · weekly programme
        </p>

        <h1
          className="font-display leading-[0.96] tracking-[-0.02em] text-ink"
          style={{ textWrap: "balance", fontSize: "clamp(2.4rem, 10vw, 6.4rem)" }}
        >
          Warm up.
          <br />
          Work the top set.
          <br />
          Write it down.
        </h1>

        <p className="max-w-[42ch] font-body text-lg text-ink/80 sm:text-xl">
          One programme a week. Sets, reps, load, and the reason behind each
          one. Sent Monday at 6am, read before your first warm-up set.
        </p>

        <div className="max-w-xl pt-2">
          <EmailForm id="hero-form" />
          <p className="mt-3 font-body text-sm text-steel">
            Free. No supplement pitches. Unsubscribe from any issue.
          </p>
        </div>
      </div>
    </section>
  );
}
