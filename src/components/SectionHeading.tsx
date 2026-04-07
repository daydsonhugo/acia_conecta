type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
          light ? "text-white/84" : "text-conecta-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl ${
          light ? "text-white" : "text-conecta-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${
            light ? "text-white/88" : "text-conecta-700"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
