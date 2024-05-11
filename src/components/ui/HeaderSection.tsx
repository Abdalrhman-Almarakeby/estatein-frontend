type HeaderSectionProps = {
  title: string;
  paragraph: string;
};

export function HeaderSection({ title, paragraph }: HeaderSectionProps) {
  return (
    <section className="mx-break-out px-break-out bg-gradient-to-l from-transparent from-55% to-gray-15">
      <div className="container space-y-2.5 py-12.5 lg:py-24 3xl:space-y-3.5 3xl:py-36">
        <h1 className="h-primary">{title}</h1>
        <p className="text-primary">{paragraph}</p>
      </div>
    </section>
  );
}
