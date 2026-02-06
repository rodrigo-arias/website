import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { getLastUpdated } from "@/lib/utils/get-last-updated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
  description: "About this site and how it was built.",
};

export default function ColophonPage() {
  const lastUpdated = getLastUpdated();

  return (
    <div className="page-grid">
      <PageHeader />

      <Section label="Colophon" sublabel="about this site" first>
        <p>
          A personal site sharing the tools I use and resources I find valuable.
        </p>
      </Section>

      <Section label="Built With">
        <ul className="space-y-2">
          <li>
            <a
              href="https://statamic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Statamic
            </a>
            <span className="text-muted-foreground"> — CMS</span>
          </li>
          <li>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Next.js
            </a>
            <span className="text-muted-foreground"> — React framework</span>
          </li>
          <li>
            <a
              href="https://typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              TypeScript
            </a>
            <span className="text-muted-foreground"> — Language</span>
          </li>
          <li>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              TailwindCSS
            </a>
            <span className="text-muted-foreground"> — Styling</span>
          </li>
          <li>
            <a
              href="https://vercel.com/font"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Geist Mono
            </a>
            <span className="text-muted-foreground"> — Typography</span>
          </li>
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              Vercel
            </a>
            <span className="text-muted-foreground"> — Hosting</span>
          </li>
        </ul>
      </Section>

      <Section label="Source">
        <p>
          <a
            href="https://github.com/rodrigo-arias/website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            View on GitHub
          </a>
          <span className="text-muted-foreground"> — Open source</span>
        </p>
      </Section>

      <Section label="Last Updated">
        <p>{lastUpdated}</p>
      </Section>
    </div>
  );
}
