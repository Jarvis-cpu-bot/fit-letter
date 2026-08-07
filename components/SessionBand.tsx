import Image from "next/image";
import RepNumeral from "./RepNumeral";
import { PLATE_PHOTOS } from "@/lib/images";

const SESSIONS = [
  {
    num: "01",
    day: "Monday",
    lift: "Squat",
    scheme: "5×5",
    note: "Warm up in doubles. Work to a top set of 5. Back off 10% for two more sets of 5.",
    photo: PLATE_PHOTOS.loadedBar,
  },
  {
    num: "02",
    day: "Tuesday",
    lift: "Bench",
    scheme: "3×8",
    note: "Light day. Bar speed over load. Three clean sets, stop two reps short of failure.",
    photo: PLATE_PHOTOS.chalkHands,
  },
  {
    num: "03",
    day: "Thursday",
    lift: "Deadlift",
    scheme: "1×5",
    note: "One working set. Heavy, not maximal. If the fifth rep slows, that's the number.",
    photo: PLATE_PHOTOS.plateCloseup,
  },
  {
    num: "04",
    day: "Friday",
    lift: "Press",
    scheme: "5×3",
    note: "Five triples, same weight. Rest is full — three minutes, not a clock-watch.",
    photo: PLATE_PHOTOS.stopwatch,
  },
];

export default function SessionBand() {
  return (
    <section
      data-shot="sessions"
      className="border-b-2 border-ink bg-chalk-raised px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.02em] text-ink sm:text-6xl">
            This week&apos;s
            <br />
            programme card
          </h2>
          <p className="hidden max-w-[26ch] font-body text-sm text-steel sm:block">
            Scroll the sessions. Same four lifts, different demand each day.
          </p>
        </div>

        <div
          className="band-scroll -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:-mx-10 sm:px-10"
          role="list"
          aria-label="This week's training sessions"
        >
          {SESSIONS.map((s) => (
            <article
              key={s.num}
              role="listitem"
              className="relative flex w-[78vw] shrink-0 snap-start flex-col border-2 border-ink bg-chalk sm:w-[380px]"
            >
              <div className="plate-photo-wrap relative aspect-square w-full border-b-2 border-ink">
                <Image
                  src={s.photo.src}
                  alt={s.photo.alt}
                  fill
                  sizes="(min-width: 640px) 380px, 78vw"
                  className="plate-photo object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6 pt-9">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-body text-sm font-semibold uppercase tracking-[0.1em] text-steel">
                    {s.day}
                  </p>
                  <RepNumeral
                    value={s.scheme}
                    className="font-display text-3xl leading-none text-iron"
                  />
                </div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.01em] text-ink">
                  {s.lift}
                </h3>
                <p className="font-body text-[0.95rem] leading-snug text-ink/75">
                  {s.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
