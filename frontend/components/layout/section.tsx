import { ReactNode } from "react";

interface SectionProps {
  label: string;
  sublabel?: string;
  first?: boolean;
  children: ReactNode;
}

export function Section({ label, sublabel, first = false, children }: SectionProps) {
  return (
    <>
      <div
        className={`md:col-span-1 pt-section divider-mobile ${!first ? "mt-section" : ""}`}
      >
        <h2 className="text-label">{label}</h2>
        {sublabel && (
          <p className="text-small text-muted-foreground">{sublabel}</p>
        )}
      </div>
      <div
        className={`md:col-span-2 pt-6 md:pt-section divider-right ${!first ? "md:mt-section" : ""}`}
      >
        {children}
      </div>
    </>
  );
}
