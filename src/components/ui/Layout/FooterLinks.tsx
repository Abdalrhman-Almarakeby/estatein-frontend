import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type FooterLinksProps = {
  pageName: string;
  children: React.ReactElement<typeof Link>[];
  className?: string;
};

export function FooterLinks({ pageName, children, className }: FooterLinksProps) {
  return (
    <nav
      aria-label={`${pageName} Page Links`}
      className={cn(
        "flex flex-col [&>*]:py-1  border-b  pb-5  lg:border-none lg:p-0 2xl:[&>*]:py-2 lg:order-none [&>*:nth-child(1)]:mb-2 [&>*:nth-child(1)]:text-gray-60",
        className
      )}
    >
      {children}
    </nav>
  );
}
