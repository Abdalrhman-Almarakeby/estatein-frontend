import StarSVG from "@/assets/icons/star.svg?react";

export default function TestimonialCard() {
  // TODO: Add props and change the data into the data that comes from the props
  return (
    <div className="space-y-6 rounded-xl border border-gray-15 p-7.5 lg:space-y-7.5 lg:p-10">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="grid size-7.5 place-items-center rounded-full border border-gray-15 bg-gray-10 lg:size-9"
          >
            <StarSVG className="lg:size-5" />
          </span>
        ))}
      </div>
      <div className="space-y-2 lg:space-y-3">
        <p className="text-lg lg:text-xl">Exceptional Service!</p>
        <p className="text-sm text-gray-60">
          Our experience with Estatein was outstanding. Their team's dedication and professionalism
          made finding our dream home a breeze. Highly recommended!
        </p>
      </div>
      <div className="flex gap-2.5">
        <img
          src="https://placehold.co/20"
          alt=""
          className="aspect-[1/1] size-[50px] rounded-full"
        />
        <p className="grid lg:text-lg">
          <span>Wade Warren</span>
          <span className="text-gray-60">USA, California</span>
        </p>
      </div>
    </div>
  );
}
