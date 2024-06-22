import { Testimonial } from "@/types";
import { Stars } from "@/components/ui/Stars";

type TestimonialCardProps = Testimonial;

export function TestimonialCard({
  rating,
  title,
  body,
  name,
  location,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl border p-7.5 lg:gap-7.5 lg:p-10">
      <Stars num={rating} />
      <div className="space-y-2 lg:space-y-3">
        <p className="text-lg lg:text-xl 3xl:text-2xl">{title}</p>
        <p className="text-primary">{body}</p>
      </div>
      <div className="flex gap-2.5">
        <img
          src={avatar}
          aria-hidden="true"
          loading="lazy"
          className="aspect-[1/1] size-[50px] rounded-full"
        />
        <p className="grid lg:text-lg">
          <span>{name}</span>
          <span className="text-primary">{location}</span>
        </p>
      </div>
    </div>
  );
}
