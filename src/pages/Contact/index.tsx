import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { CTA } from "@/components/ui/CTA";
import { CONTACT_PAGE_LINKS_DATA } from "@/constant/contactPageLinksData";
import { ContactFormSection } from "./ContactFormSection";
import { OfficeLocations } from "./OfficeLocations";
import { Gallery } from "./Gallery";

export function Contact() {
  return (
    <div className="container flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Get in Touch with Estatein"
          paragraph="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
        <LinksSection linksData={CONTACT_PAGE_LINKS_DATA} />
      </div>
      <ContactFormSection />
      <OfficeLocations />
      <Gallery />
      <CTA />
    </div>
  );
}
