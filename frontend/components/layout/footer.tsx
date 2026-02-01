import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { mockProfile } from "@/lib/mock/data";

export function Footer() {
  const profile = mockProfile;

  const IconComponent: Record<string, React.ReactNode> = {
    github: <GithubIcon className="size-4" />,
    linkedin: <LinkedinIcon className="size-4" />,
    bluesky: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
      </svg>
    ),
    email: <MailIcon className="size-4" />,
  };

  const labels: Record<string, string> = {
    github: "GITHUB",
    linkedin: "LINKEDIN",
    bluesky: "BLUESKY",
    email: "EMAIL",
  };

  return (
    <footer className="relative mt-[120px] md:mt-[160px]">
      {/* Horizontal top border - extends to viewport edges */}


      {/* Vertical divider line - extends to bottom of viewport */}
      <div
        className="hidden md:block absolute top-0 w-px bg-border"
        style={{
          left: 'calc(66.666% - var(--grid-gap) / 3)',
          height: 'calc(100% + 120px)'
        }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 pt-section pb-[120px] md:pb-[160px]">
        {/* Title Column */}
        <div className="md:col-span-1 mb-8 md:mb-0">
          <p className="text-label">Rodrigo Arias</p>
          <p className="text-small uppercase text-muted-foreground">
            Web Developer
          </p>
        </div>

        {/* Connect Label Column */}
        <div className="md:col-span-1 mb-4 md:mb-0">
          <h2 className="text-label">Connect</h2>
          <p className="text-small text-muted-foreground">
            where to find me
          </p>
        </div>

        {/* Connect Links Column */}
        <div className="md:col-span-1 ">
          <div className="flex flex-col gap-2">
            {profile.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === "email" ? undefined : "_blank"}
                rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                {IconComponent[link.platform]}
                {labels[link.platform]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
