import { CTA } from "@/components/ui/CTA";
import { HeroSection } from "./HeroSection";
import { ValuesSection } from "./ValuesSection";
import { AchievementsSection } from "./AchievementsSection";
import { HowItIsWordSection } from "./HowItIsWorkSection.tsx";
import { TeamSection } from "./TeamSection.tsx";
import { ClientsSection } from "./ClientsSection";

export function About() {
  return (
    <main className="page-spacing flex-grow">
      <HeroSection />
      <ValuesSection />
      <AchievementsSection />
      <HowItIsWordSection />
      <TeamSection />
      <ClientsSection />
      <CTA />
    </main>
  );
}
