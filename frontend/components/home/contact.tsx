import type { SocialLink } from "@/lib/graphql/types";

interface ContactProps {
  socialLinks: SocialLink[];
}

const platformLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  bluesky: "Bluesky",
  email: "Email",
};

const platformHandles: Record<string, (url: string) => string> = {
  github: (url) => "@" + url.split("/").pop(),
  linkedin: (url) => "@" + url.split("/").pop(),
  bluesky: (url) => "@" + url.split("/").pop(),
  email: (url) => url.replace("mailto:", ""),
};

export function Contact({ socialLinks }: ContactProps) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
        Connect
      </h2>
      <div className="space-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform === "email" ? undefined : "_blank"}
            rel={link.platform === "email" ? undefined : "noopener noreferrer"}
            className="flex items-baseline gap-3 group"
          >
            <span className="text-sm text-foreground group-hover:opacity-70 transition-opacity">
              {platformLabels[link.platform]}
            </span>
            <span className="text-sm text-muted-foreground">
              {platformHandles[link.platform](link.url)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
