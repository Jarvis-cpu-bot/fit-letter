import EmailForm from "./EmailForm";
import RepNumeral from "./RepNumeral";

export default function FooterCta() {
  return (
    <footer
      data-shot="footer-cta"
      className="relative overflow-hidden bg-inverse-surface px-6 py-20 sm:px-10 sm:py-28"
    >
      <RepNumeral
        value="3×8"
        className="pointer-events-none absolute -left-[0.04em] bottom-[-0.18em] font-display leading-none text-[34vw] text-inverse-ink/[0.05] select-none sm:text-[20vw]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col gap-8">
        <h2
          className="font-display text-5xl leading-[0.96] tracking-[-0.02em] text-inverse-ink sm:text-7xl"
          style={{ textWrap: "balance" }}
        >
          Next issue is Monday.
        </h2>
        <p className="max-w-[42ch] font-body text-lg text-inverse-ink/75">
          Put your email on the list. First programme card lands before your
          next warm-up set.
        </p>
        <div className="max-w-xl">
          <EmailForm id="footer-form" inverse />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-inverse-ink/20 pt-6 font-body text-sm text-inverse-ink/60 sm:flex-row sm:justify-between">
          <p>The Fit Letter — training and strength, weekly.</p>
          <p>No spam. One email a week. Unsubscribe any time.</p>
        </div>
      </div>
    </footer>
  );
}
