import BlocksIconSVG from "@/assets/icons/blocks.svg?react";
import ThunderIconSVG from "@/assets/icons/thunder.svg?react";

type ClientCardProps = {
  date: number;
  name: string;
  websiteLink: string;
  domain: string;
  category: string;
  testimonial: string;
};

export function ClientCard({
  date,
  name,
  domain,
  category,
  websiteLink,
  testimonial,
}: ClientCardProps) {
  return (
    <div className="border rounded-[10px] shadow-[0_0_0_6px_#191919] p-6 space-y-7.5 lg:p-10 3xl:p-12.5 3xl:space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <div className="space-y-3">
          <p className="text-primary">Since {date}</p>
          <p className="text-xl font-semibold lg:text-2xl 3xl:text-3xl">{name}</p>
        </div>
        <a
          href={websiteLink}
          target="_blank"
          rel="noreferrer"
          className="btn-tertiary btn-sm text-center"
        >
          Visit Website
        </a>
      </div>

      <div className="grid grid-cols-2">
        <div className="space-y-1 pr-4 border-r">
          <p className="flex text-xs items-center gap-0.5 text-primary">
            <BlocksIconSVG />
            Domain
          </p>
          <p className="text-secondary">{domain}</p>
        </div>
        <div className="space-y-1 pl-4">
          <p className="flex text-xs items-center gap-0.5 text-primary">
            <ThunderIconSVG />
            Category
          </p>
          <p className="text-secondary">{category}</p>
        </div>
      </div>

      <div className="border p-5 space-y-2 rounded-xl">
        <p className="text-primary">What They Said 🤗</p>
        <p className="text-secondary">{testimonial}</p>
      </div>
    </div>
  );
}
