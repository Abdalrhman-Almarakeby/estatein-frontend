import { Location } from "@/types";
import MailSVG from "@/assets/icons/mail.svg?react";
import PhoneSVG from "@/assets/icons/phone.svg?react";
import LocationSVG from "@/assets/icons/location.svg?react";

type LocationCardProps = Location;

export function LocationCard({ label, location, description, contact }: LocationCardProps) {
  return (
    <div className="flex flex-col rounded-lg border p-6 lg:p-10" role="region" aria-label={label}>
      <div className="mb-auto">
        <p className="text-secondary">{label}</p>
        <p className="mt-1 text-xl font-semibold lg:mt-1.5 lg:text-2xl 3xl:mt-2.5 3xl:text-3xl">
          {location}
        </p>
        <p className="text-primary mt-1 lg:mt-2.5 3xl:mt-3.5">{description}</p>
      </div>
      <div className="badges-container mt-6 lg:mt-7.5">
        <span>
          <MailSVG aria-hidden="true" /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </span>
        <span className="flex gap-1 rounded-3xl border bg-gray-10 px-3.5 py-[0.40625rem]">
          <PhoneSVG aria-hidden="true" /> <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </span>
        <span className="flex gap-1 rounded-3xl border bg-gray-10 px-3.5 py-[0.40625rem]">
          <LocationSVG aria-hidden="true" />{" "}
          <a href={contact.location.link} target="_blank" rel="noreferrer">
            {contact.location.name}
          </a>
        </span>
      </div>
      <a
        href={contact.location.link}
        target="_blank"
        rel="noreferrer"
        aria-label="Get Direction"
        className="btn-primary btn-sm 3xl:btn-lg mt-6 block text-center lg:mt-7.5"
      >
        Get Direction
      </a>
    </div>
  );
}
