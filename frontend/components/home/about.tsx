interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
        About
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
