import TwitterIconSVG from "@/assets/socialmedia/x-twitter.svg?react";

type TeamMemberCardProps = {
  img: string;
  twitterLink: string;
  name: string;
  role: string;
};

export function TeamMemberCard({ img, name, role, twitterLink }: TeamMemberCardProps) {
  return (
    <div className="p-5 border text-center rounded-xl flex flex-col gap-10 lg:p-6 lg:gap-12.5 3xl:p-7.5 3xl:gap-12.5">
      <div className="relative">
        <img
          src={img}
          alt={`${name} personal image`}
          className="rounded-2xl aspect-[318/253] w-full"
        />
        <a
          href={twitterLink}
          target="_blank"
          rel="noreferrer"
          className="grid place-items-center absolute bg-purple-60 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-15 h-10 rounded-full"
        >
          <TwitterIconSVG className="fill-white size-5" />
          <div className="sr-only">{name} twitter</div>
        </a>
      </div>
      <div className="space-y-2">
        <p className="text-secondary text-lg font-semibold lg:text-xl 3xl:text-2xl">{name}</p>
        <p className="text-primary">{role}</p>
      </div>
    </div>
  );
}
