import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { CTA } from "@/components/ui/CTA";
import { SERVICES_PAGE_LINKS_DATA } from "@/constant/pageLinksData/services";
import { PROPERTIES_SERVICES } from "@/constant/services/propertiesServices";
import { PROPERTY_MANAGEMENT_SERVICES } from "@/constant/services/propertyManagementServices";
import { ServicesSection } from "./ServicesSection";
import { InvestmentSection } from "./InvestmentSection";

export function Services() {
  return (
    <main className="container flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Elevate Your Real Estate Experience"
          paragraph="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
        <LinksSection linksData={SERVICES_PAGE_LINKS_DATA} />
      </div>
      <ServicesSection
        title="Unlock Property Value"
        paragraph="Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
        CTACardData={{
          title: "Unlock the Value of Your Property Today",
          paragraph:
            "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
          link: "/contact#contact",
        }}
        servicesData={PROPERTIES_SERVICES}
      />
      <ServicesSection
        title="Effortless Property Management"
        paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."
        CTACardData={{
          title: "Experience Effortless Property Management",
          paragraph:
            "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
          link: "/contact#contact",
        }}
        servicesData={PROPERTY_MANAGEMENT_SERVICES}
      />
      <InvestmentSection />
      <CTA />
    </main>
  );
}
