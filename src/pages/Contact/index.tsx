import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import PhoneIconsSVG from "@/assets/icons/phone.svg?react";
import MailIconSVG from "@/assets/icons/mail.svg?react";
import LocationIconSVG from "@/assets/icons/location.svg?react";
import FacebookIconSVG from "@/assets/socialmedia/facebook.svg?react";

const LINKS_DATA = [
  {
    to: "mailto:info@estatein.com",
    Icon: MailIconSVG,
    label: "info@estatein.com",
  },
  {
    to: "tel:+1 (123) 456-7890",
    Icon: PhoneIconsSVG,
    label: "+1 (123) 456-7890",
  },
  {
    to: "https://maps.google.com",
    Icon: LocationIconSVG,
    label: "Main Headquarters",
    ariaLabel: "Main Headquarters Location",
    target: "_blank",
  },
  {
    to: "https://facebook.com",
    Icon: FacebookIconSVG,
    label: "Facebook",
    target: "_blank",
  },
] as const;

export function Contact() {
  return (
    <div className="container min-h-[10000px] flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Get in Touch with Estatein"
          p="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
        <LinksSection linksData={LINKS_DATA} />
      </div>
    </div>
  );
}
