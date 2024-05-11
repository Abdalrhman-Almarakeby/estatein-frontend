import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import { SERVICES_PAGE_LINKS_DATA } from "@/constant/pageLinksData/services";

export function Services() {
  return (
    <div className="container min-h-[10000px] flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Elevate Your Real Estate Experience"
          paragraph="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
        <LinksSection linksData={SERVICES_PAGE_LINKS_DATA} />
      </div>
    </div>
  );
}
