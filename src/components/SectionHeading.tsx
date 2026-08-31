export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-brand-orange" />
      {description && (
        <p className="mt-4 text-base text-slate-600">{description}</p>
      )}
    </div>
  );
}
