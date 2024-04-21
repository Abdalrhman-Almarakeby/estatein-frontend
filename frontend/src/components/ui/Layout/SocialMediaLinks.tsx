import FacebookLogoSVG from "@/assets/socialmedia/facebook.svg?react";
import LinkedinLogoSVG from "@/assets/socialmedia/linkedin.svg?react";
import XLogoSVG from "@/assets/socialmedia/x-twitter.svg?react";
import YoutubeLogoSVG from "@/assets/socialmedia/youtube.svg?react";

const SOCIAL_LINKS: readonly {
  href: string;
  icon: React.ReactNode;
  name: string;
}[] = [
  {
    href: "https://facebook.com",
    icon: <FacebookLogoSVG className="size-5 fill-white" />,
    name: "Facebook",
  },
  {
    href: "https://linkedin.com",
    icon: <LinkedinLogoSVG className="size-5 fill-white" />,
    name: "Linkedin",
  },
  {
    href: "https://x.com",
    icon: <XLogoSVG className="size-5 fill-white" />,
    name: "X",
  },
  {
    href: "https://youtube.com",
    icon: <YoutubeLogoSVG className="size-5 fill-white" />,
    name: "Youtube",
  },
];

export function SocialMediaLinks() {
  return (
    <div className="mb-5 flex justify-center gap-2 md:order-3 md:mb-0 md:ml-auto">
      {SOCIAL_LINKS.map(({ href, name, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          role="link"
          rel="noopener noreferrer"
          title={`Find Us On ${name}`}
          aria-label={`${name} link`}
          className="grid size-[40px] place-items-center rounded-full bg-gray-08"
        >
          {icon}
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  );
}
