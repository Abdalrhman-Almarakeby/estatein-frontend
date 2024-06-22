import FacebookLogoSVG from "@/assets/socialmedia/facebook.svg?react";
import LinkedinLogoSVG from "@/assets/socialmedia/linkedin.svg?react";
import XLogoSVG from "@/assets/socialmedia/x-twitter.svg?react";
import YoutubeLogoSVG from "@/assets/socialmedia/youtube.svg?react";

const SOCIAL_LINKS: {
  href: string;
  icon: React.ReactNode;
  name: string;
}[] = [
  {
    href: "https://github.com/Abdalrhman-Almarakeby/estatein-frontend/",
    icon: <FacebookLogoSVG className="size-5 fill-white" />,
    name: "Facebook",
  },
  {
    href: "https://github.com/Abdalrhman-Almarakeby/estatein-frontend/",
    icon: <LinkedinLogoSVG className="size-5 fill-white" />,
    name: "Linkedin",
  },
  {
    href: "https://github.com/Abdalrhman-Almarakeby/estatein-frontend/",
    icon: <XLogoSVG className="size-5 fill-white" />,
    name: "X",
  },
  {
    href: "https://github.com/Abdalrhman-Almarakeby/estatein-frontend/",
    icon: <YoutubeLogoSVG className="size-5 fill-white" />,
    name: "Youtube",
  },
] as const;

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
