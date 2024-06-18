import { CTA } from "@/components/ui/CTA";
import { HeroSection } from "./HeroSection";
import { ValuesSection } from "./ValuesSection";
import { AchievementsSection } from "./AchievementsSection";
import { HowItIsWordSection } from "./HowItIsWorkSection.tsx";
import { TeamSection } from "./TeamSection.tsx";
import { ClientsSection } from "./ClientsSection";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <main className="page-spacing flex-grow">
      <Helmet>
        <title>About Estatein | Our Story & Vision in Real Estate</title>
        <meta
          name="description"
          content="Learn more about Estatein, our mission to simplify your real estate journey, and our commitment to helping you find the perfect property. Discover who we are and what drives us."
        />
        <meta
          name="keywords"
          content="about Estatein, real estate mission, company vision, real estate services"
        />
      </Helmet>
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
