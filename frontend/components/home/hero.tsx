interface HeroProps {
  tagline: string;
}

export function Hero({ tagline }: HeroProps) {
  return (
    <section className="mb-16">
      <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
        {tagline}
      </p>
    </section>
  );
}
