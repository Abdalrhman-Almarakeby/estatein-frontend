import { Helmet } from "react-helmet-async";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { CTA } from "@/components/ui/CTA";
import { CONTACT_PAGE_LINKS_DATA } from "@/constant/pageLinksData/contact";
import { ContactFormSection } from "./ContactFormSection";
import { OfficeLocations } from "./OfficeLocations";
import { Gallery } from "./Gallery";

export function Contact() {
  return (
    <main className="page-spacing flex-grow">
      <Helmet>
        <title>Contact Estatein | Get in Touch for Real Estate Assistance</title>
        <meta
          name="description"
          content="Need help with your property search? Contact Estatein today! Our team is ready to assist with all your real estate needs. Reach out via phone, email, or our contact form."
        />
        <meta
          name="keywords"
          content="contact Estatein, real estate assistance, customer support, contact form, property inquiries"
        />
      </Helmet>
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
    </main>
  );
}
