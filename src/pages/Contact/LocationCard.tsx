import { Link } from "react-router-dom";
import { Location } from "@/lib/types/location";
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
          <MailSVG aria-hidden="true" /> <Link to={`mailto:${contact.email}`}>{contact.email}</Link>
        </span>
        <span className="flex gap-1 rounded-3xl border bg-gray-10 px-3.5 py-[0.40625rem]">
          <PhoneSVG aria-hidden="true" /> <Link to={`tel:${contact.phone}`}>{contact.phone}</Link>
        </span>
        <span className="flex gap-1 rounded-3xl border bg-gray-10 px-3.5 py-[0.40625rem]">
          <LocationSVG aria-hidden="true" />{" "}
          <Link to={contact.location.link} target="_blank" rel="noopener noreferrer">
            {contact.location.name}
          </Link>
        </span>
      </div>
      <Link
        to={contact.location.link}
        className="btn-primary btn-sm 3xl:btn-lg mt-6 block text-center lg:mt-7.5"
        aria-label="Get Direction"
      >
        Get Direction
      </Link>
    </div>
  );
}
