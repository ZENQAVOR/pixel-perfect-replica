export function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro?: string; id?: string }) {
  return (
    <div className="reveal max-w-prose">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-px w-8 bg-violet" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-3xl font-semibold text-gradient md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}
