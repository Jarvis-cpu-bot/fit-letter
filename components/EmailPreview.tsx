const ISSUE_NUMBER = 47;
const READ_MINUTES = 5;

export default function EmailPreview() {
  return (
    <section
      data-shot="email-preview"
      className="border-b-2 border-ink bg-chalk-raised px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 max-w-[20ch] font-display text-4xl leading-[0.96] tracking-[-0.02em] text-ink sm:text-6xl">
          Monday, 6am. Read it before you warm up.
        </h2>

        {/* email client chrome */}
        <div className="mx-auto max-w-xl border-2 border-ink bg-chalk text-ink">
          {/* client toolbar */}
          <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="text-lg leading-none text-steel">
                ←
              </span>
              <span aria-hidden="true" className="text-lg leading-none text-iron">
                ★
              </span>
              <span aria-hidden="true" className="text-lg leading-none text-steel">
                🗄
              </span>
            </div>
            <span className="font-body text-xs text-steel">1 of 214</span>
          </div>

          {/* message header */}
          <div className="border-b-2 border-ink px-5 py-5">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl leading-tight tracking-[-0.01em] text-ink">
                Issue {ISSUE_NUMBER}: back off the squat, push the press
              </h3>
              <span
                aria-hidden="true"
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-iron"
                title="Unread"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-body text-sm text-steel">
              <span>
                <span className="font-semibold text-ink">Illuminate Digm</span>{" "}
                &lt;programme@illuminatedigm.info&gt;
              </span>
              <span>Mon, 6:00 AM</span>
            </div>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.08em] text-steel">
              Issue {ISSUE_NUMBER} · {READ_MINUTES} min read
            </p>
          </div>

          {/* message body — narrow measure, real newsletter content */}
          <div className="flex flex-col gap-4 px-5 py-6 font-body text-[0.95rem] leading-relaxed text-ink/85 sm:px-7">
            <p>
              Your squat numbers stalled at 5×5 for two weeks running — that&apos;s
              the signal, not the failure. This week we back it off 10% and
              rebuild the bar speed before we ask for more.
            </p>

            <blockquote className="border-t-2 border-b-2 border-ink py-4 font-display text-xl leading-snug tracking-[-0.01em] text-ink">
              &ldquo;A stall is data. Only three stalls in a row is a
              problem.&rdquo;
            </blockquote>

            <ul className="flex flex-col gap-2">
              <li className="flex gap-2">
                <span className="text-iron">•</span>
                Squat: 5×5 at 90% of last week&apos;s top set.
              </li>
              <li className="flex gap-2">
                <span className="text-iron">•</span>
                Press: add 2.5kg to Friday&apos;s working weight.
              </li>
              <li className="flex gap-2">
                <span className="text-iron">•</span>
                Log your top single before Thursday&apos;s deadlift session.
              </li>
            </ul>

            <p>
              Full breakdown and the why-behind-the-load is below the card.
            </p>

            <p className="pt-2">
              See you Thursday,
              <br />
              <span className="font-semibold text-ink">Dax — Illuminate Digm</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
