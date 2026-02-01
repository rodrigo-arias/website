import { mockProfile } from "@/lib/mock/data";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  const profile = mockProfile;

  return (
    <div className="page-grid">
      <PageHeader />

      <Section label="About" first>
        <div className="space-y-5">
          <p className="italic text-muted-foreground">
            → {profile.tagline}
          </p>
          {profile.about.split("\n\n").map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section label="Skills">
        <div className="flex flex-wrap gap-1">
          {profile.skills.map((skill) => (
            <img
              key={skill.name}
              src={`https://img.shields.io/badge/${encodeURIComponent(skill.name)}-%232e2e2e?style=for-the-badge&logo=${skill.icon}&logoColor=white`}
              alt={skill.name}
            />
          ))}
        </div>
      </Section>

      <Section label="Interests">
        <div className="flex flex-wrap gap-1">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center bg-[#2e2e2e] px-3 py-1.5 text-[11px] font-semibold tracking-widest text-white uppercase"
            >
              {interest}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}
