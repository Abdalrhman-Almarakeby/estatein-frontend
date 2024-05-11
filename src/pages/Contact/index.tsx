import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { CTA } from "@/components/ui/CTA";
import { ContactFormSection } from "./ContactFormSection";
import { OfficeLocations } from "./OfficeLocations";
import { Gallery } from "./Gallery";
import PhoneIconsSVG from "@/assets/icons/phone.svg?react";
import MailIconSVG from "@/assets/icons/mail.svg?react";
import LocationIconSVG from "@/assets/icons/location.svg?react";
import FacebookIconSVG from "@/assets/socialmedia/facebook.svg?react";

const LINKS_DATA = [
  {
    to: "mailto:info@estatein.com",
    Icon: MailIconSVG,
    label: "info@estatein.com",
    ariaLabel: "Estatein Email Address",
  },
  {
    to: "tel:+1 (123) 456-7890",
    Icon: PhoneIconsSVG,
    label: "+1 (123) 456-7890",
    ariaLabel: "Estatein Phone Number",
  },
  {
    to: "https://maps.google.com",
    Icon: LocationIconSVG,
    label: "Main Headquarters",
    target: "_blank",
    ariaLabel: "Estatein Main Headquarters Location",
  },
  {
    to: "https://facebook.com",
    Icon: FacebookIconSVG,
    label: "Facebook",
    target: "_blank",
    ariaLabel: "Estatein Facebook Page",
  },
] as const;

export function Contact() {
  return (
    <div className="container flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Get in Touch with Estatein"
          paragraph="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
        <LinksSection linksData={LINKS_DATA} />
      </div>
      <ContactFormSection />
      <OfficeLocations />
      <Gallery />
      <CTA />
    </div>
  );
}
