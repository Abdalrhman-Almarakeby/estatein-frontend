import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { SERVICES_PAGE_LINKS_DATA } from "@/constant/pageLinksData/services";
import { PROPERTIES_SERVICES } from "@/constant/propertiesServices";
import { PROPERTY_MANAGEMENT_SERVICES } from "@/constant/propertyManagementServices";
import { PROPERTIES_SERVICES_CTA_CARD_DATA } from "@/constant/propertiesServicesCardData";
import { PROPERTY_MANAGEMENT_SERVICES_CTA_CARD_DATA } from "@/constant/propertyManagementServicesCardData";
import { ServicesSection } from "./ServicesSection";

export function Services() {
  return (
    <div className="container flex-grow space-y-20 lg:space-y-30">
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
        CTACardData={PROPERTIES_SERVICES_CTA_CARD_DATA}
        servicesData={PROPERTIES_SERVICES}
      />
      <ServicesSection
        title="Effortless Property Management"
        paragraph="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."
        CTACardData={PROPERTY_MANAGEMENT_SERVICES_CTA_CARD_DATA}
        servicesData={PROPERTY_MANAGEMENT_SERVICES}
      />
    </div>
  );
}
