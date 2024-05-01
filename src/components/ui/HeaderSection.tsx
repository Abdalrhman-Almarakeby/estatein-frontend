type HeaderSectionProps = {
  title: string;
  p: string;
};

export function HeaderSection({ title, p }: HeaderSectionProps) {
  return (
    <div className="mx-break-out px-break-out bg-gradient-to-l from-transparent from-55% to-gray-15">
      <div className="container space-y-2.5 py-12.5 lg:py-24 3xl:space-y-3.5 3xl:py-36">
        <h1 className="text-[1.75rem] font-semibold md:text-[2rem] lg:text-[2.375rem] 3xl:text-[3rem]">
          {title}
        </h1>
        <p className="text-sm font-medium text-gray-60 md:text-base 3xl:text-lg">{p}</p>
      </div>
    </div>
  );
}
