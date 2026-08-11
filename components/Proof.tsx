import Image from "next/image";
import { PLATE_PHOTOS } from "@/lib/images";

export default function Proof() {
  return (
    <section
      data-shot="proof"
      className="border-b-2 border-ink px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:gap-16">
        <div className="plate-photo-wrap relative aspect-square w-full border-2 border-ink">
          <Image
            src={PLATE_PHOTOS.writtenCard.src}
            alt={PLATE_PHOTOS.writtenCard.alt}
            fill
            sizes="(min-width: 640px) 500px, 90vw"
            className="plate-photo object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <blockquote className="font-display text-3xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-4xl">
            &ldquo;I stopped guessing my numbers. I just show up and run
            what&apos;s on the card.&rdquo;
          </blockquote>
          <p className="font-body text-base text-steel">
            — Dana R., three years training, first year on Verity Nectra
          </p>
          <div className="mt-2 flex flex-col gap-4 border-t-2 border-ink pt-6 font-body text-base text-ink/80">
            <p>Every issue gives you the same three things:</p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-3">
                <span className="font-display text-iron">—</span>
                The lifts, in order, with working sets and rep targets.
              </li>
              <li className="flex gap-3">
                <span className="font-display text-iron">—</span>
                The load logic — why this week is heavier or lighter.
              </li>
              <li className="flex gap-3">
                <span className="font-display text-iron">—</span>
                One adjustment based on how last week actually went.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
