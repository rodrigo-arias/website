import type { Skill } from "@/lib/graphql/types";

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="mb-16">
      <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={`https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color}?style=flat&logo=${skill.icon}&logoColor=white`}
            alt={skill.name}
            className="h-5"
          />
        ))}
      </div>
    </section>
  );
}
