import Hero from "@/components/Hero";
import SessionBand from "@/components/SessionBand";
import Proof from "@/components/Proof";
import EmailPreview from "@/components/EmailPreview";
import FooterCta from "@/components/FooterCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <SessionBand />
      <Proof />
      <EmailPreview />
      <FooterCta />
    </main>
  );
}
